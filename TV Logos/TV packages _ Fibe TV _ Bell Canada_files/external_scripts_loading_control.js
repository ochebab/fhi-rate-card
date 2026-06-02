
/*!
 * External Scripts Loading Control - Main Controller
 * Orchestrates loading of Glassbox and Quantum Metric modules
 */
(function () {
    'use strict';

    // ==============================================
    // SCRIPT LOADER UTILITY
    // ==============================================

    const ScriptLoader = {
        // Synchronous script loading for before DOM ready
        loadScriptBeforeDOMReady(src) {
            return new Promise((resolve, reject) => {
                // Check if script already loaded
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }

                // Create script element with synchronous loading
                const script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                script.async = false;
                script.defer = false;

                // Use synchronous XMLHttpRequest for immediate loading when document is still parsing
                if (document.readyState === 'loading') {
                    try {
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', src, false); // false = synchronous
                        xhr.send();

                        if (xhr.status === 200) {
                            // Execute the script content immediately
                            const scriptElement = document.createElement('script');
                            scriptElement.type = 'text/javascript';
                            scriptElement.text = xhr.responseText;
                            document.head.appendChild(scriptElement);
                            resolve();
                        } else {
                            reject(new Error(`Failed to load script: ${src} (${xhr.status})`));
                        }
                    } catch (error) {
                        // Fallback to regular loading if synchronous request fails
                        this.loadScript(src).then(resolve).catch(reject);
                    }
                } else {
                    // Fallback to regular loading if DOM already ready
                    this.loadScript(src).then(resolve).catch(reject);
                }
            });
        },

        loadScript(src) {
            return new Promise((resolve, reject) => {
                // Check if script already loaded
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                script.async = false;
                script.defer = false;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        },

        isDev() {
            return window.location.hostname.toLowerCase().includes(".int.");
        },

        detectBrand() {
            const hostname = window.location.hostname.toLowerCase();
            return hostname.includes('virginplus.ca') ? 'V' : 'B';
        },

        async loadModulesBeforeDOMReady() {
            const basePath = this.isDev() && this.detectBrand() === "B" ?
                `${window.location.protocol}//${window.location.host}/Styles/assets/js/` : 'https://www.bell.ca/Styles/assets/js/'
            try {
                // Load shared utilities first (always required)
                await this.loadScriptBeforeDOMReady(basePath + 'shared-utilities.js');

                // Wait for shared utilities to initialize and get the configuration
                await new Promise(resolve => {
                    const checkConfig = () => {
                        if (window.ExternalScripts?.GlobalConfig?.isModuleActive) {
                            resolve();
                        } else {
                            setTimeout(checkConfig, 10);
                        }
                    };
                    checkConfig();
                });

                const GlobalConfig = window.ExternalScripts.GlobalConfig;

                // Get list of active module files to load
                const activeModuleFiles = GlobalConfig.getActiveModuleFiles();
                const modulePromises = [];

                // Load each unique module file (except shared-utilities.js which is already loaded)
                activeModuleFiles.forEach(fileName => {
                    if (fileName !== 'shared-utilities.js') {
                        modulePromises.push(this.loadScriptBeforeDOMReady(basePath + fileName));
                    }
                });

                // Load all active modules
                if (modulePromises.length > 0) {
                    await Promise.all(modulePromises);
                }

                return true;
            } catch (error) {
                console.error('Failed to load external script modules before DOM ready:', error);
                return false;
            }
        },

        async loadModules() {
            const basePath = this.isDev() && this.detectBrand() === "B" ?
                `${window.location.protocol}//${window.location.host}/Styles/assets/js/` : 'https://www.bell.ca/Styles/assets/js/'
            try {
                // Load shared utilities first (always required)
                await this.loadScript(basePath + 'shared-utilities.js');

                // Wait for configuration to be available
                if (window.ExternalScripts?.GlobalConfig?.isModuleActive) {
                    const GlobalConfig = window.ExternalScripts.GlobalConfig;
                    
                    // Get list of active module files to load
                    const activeModuleFiles = GlobalConfig.getActiveModuleFiles();
                    const modulePromises = [];

                    // Load each unique module file (except shared-utilities.js which is already loaded)
                    activeModuleFiles.forEach(fileName => {
                        if (fileName !== 'shared-utilities.js') {
                            modulePromises.push(this.loadScript(basePath + fileName));
                        }
                    });

                    // Load all active modules in parallel
                    if (modulePromises.length > 0) {
                        await Promise.all(modulePromises);
                    }
                }

                return true;
            } catch (error) {
                console.error('Failed to load external script modules:', error);
                return false;
            }
        }
    };

    // ==============================================
    // APPLICATION CONTROLLER
    // ==============================================

    const App = {
        async init() {
            try {
                // Load all required modules BEFORE DOM ready
                const modulesLoaded = await ScriptLoader.loadModulesBeforeDOMReady();

                if (!modulesLoaded) {
                    console.error('External scripts modules failed to load before DOM ready');
                    return;
                }

                // Verify core modules are available
                if (!window.ExternalScripts.SharedUtils || !window.ExternalScripts.GlobalConfig) {
                    console.error('Core external scripts modules not properly initialized');
                    return;
                }

                const SharedUtils = window.ExternalScripts.SharedUtils;
                const GlobalConfig = window.ExternalScripts.GlobalConfig;

                // Validate active modules using the new flexible system
                const validationResult = GlobalConfig.validateRequiredModules();
                if (!validationResult) {
                    SharedUtils.logger.warn('Some active modules are missing, continuing with available modules');
                }

                // Initialize modules based on active configuration
                if (GlobalConfig.isModuleActive('GlassboxModule') && window.ExternalScripts.GlassboxModule) {
                    window.ExternalScripts.GlassboxModule.init();
                }

                // Initialize Quantum Metric based on configuration and environment
                if (GlobalConfig.isModuleActive('QuantumMetricModule') && window.ExternalScripts.QuantumMetricModule) {
                    if (SharedUtils.isDev()) {
                        window.ExternalScripts.QuantumMetricModule.init();
                    }
                }

            } catch (error) {
                console.error('External Scripts Controller initialization failed:', error);
            }
        }
    };

    // Create ExternalScripts namespace and make App available
    window.ExternalScripts = window.ExternalScripts || {};
    window.ExternalScripts.App = App;

    // Auto-initialize
    App.init();

})();
