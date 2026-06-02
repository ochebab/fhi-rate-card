
/*!
 * External Scripts Loading Control - Bell Externals
 * Clean Script Loading with Fallback
 */

const loadExternalScripts = () => {
    const modulePath = '/Styles/assets/js/external_scripts_loading_control.js';
    
    const script = document.createElement('script');
    script.src = modulePath;
    script.async = false;
    
    document.head.appendChild(script);
};

loadExternalScripts();
