(function () {
	function initMobileHeaderBottomSpace() {
		var resizeTimeout, banner, height, heightCorrection, finalHeight, targetElem;

		function addBottomSpace() {
			banner = document.querySelector("#onetrust-banner-sdk");

			if (banner) {
				targetElem = document.querySelector("#federalBarMobileG");

				if (targetElem) {
					if (!targetElem.hasAttribute("data-oldPaddingBottom")) {
						targetElem.setAttribute("data-oldPaddingBottom", targetElem.style.paddingBottom);
					}

					height = banner ? banner.offsetHeight : 0;
					heightCorrection = 15;
					finalHeight = height + heightCorrection;
					targetElem.style.paddingBottom = finalHeight + "px";

					if (!targetElem.hasAttribute("data-oldMaxHeight")) {
						targetElem.setAttribute("data-oldMaxHeight", targetElem.style.maxHeight);
					}

					targetElem.style.maxHeight = "none";
				}
			}
		}

		function resetModifiedStyles() {
			var oldPaddingBottom = targetElem && targetElem.hasAttribute("data-oldPaddingBottom") ? targetElem.getAttribute("data-oldPaddingBottom") : null,
				oldMaxHeight = targetElem && targetElem.hasAttribute("data-oldMaxHeight") ? targetElem.getAttribute("data-oldMaxHeight") : null;

			if (oldPaddingBottom || oldPaddingBottom == "") {
				if (oldPaddingBottom == "") {
					targetElem.style.removeProperty("padding-bottom");
				} else {
					targetElem.style.paddingBottom = oldPaddingBottom;
				}

				targetElem.removeAttribute("data-oldPaddingBottom");
			}

			if (oldMaxHeight || oldMaxHeight == "") {
				if (oldMaxHeight == "") {
					targetElem.style.removeProperty("max-height");
				} else {
					targetElem.style.maxHeight = oldMaxHeight;
				}

				targetElem.removeAttribute("data-oldMaxHeight");
			}
		}

		if (window.innerWidth < 992) {
			addBottomSpace();
		}

		window.addEventListener("resize", function () {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(function () {
				if (window.innerWidth < 992) {
					addBottomSpace();
				} else {
					resetModifiedStyles();
				}
			}, 150);
		});

		document.addEventListener("click", function (e) {
			if (e.target.closest("#onetrust-banner-sdk .onetrust-close-btn-handler")) {
				resetModifiedStyles();
			}
		});
	}

	function initMobileHeaderTabScroll() {
		var container = document.querySelector("#connectorNavWrapG"),
			focusables = container ? container.querySelectorAll("button, a, select") : null;

		if (focusables) {
			focusables.forEach(function (elem) {
				elem.addEventListener("focusin", function () {
					var elemTopDistance = elem.getBoundingClientRect().y,
						banner = document.querySelector("#onetrust-banner-sdk"),
						bannerTopDistance = banner ? banner.getBoundingClientRect().y : 0,
						scrollYDistance;

					if (banner && elemTopDistance + elem.offsetHeight + 5 > bannerTopDistance) {
						scrollYDistance = elemTopDistance + elem.offsetHeight + 30 - bannerTopDistance;
						container.scrollTop = container.scrollTop + scrollYDistance;
					}
				});
			});
		}
	}

	function setupPreferenceCenterInitialFocus(triggerBtn) {
		let cookieSettingsTriggers = document.querySelectorAll(triggerBtn);

		cookieSettingsTriggers.forEach(function (trigger) {
			trigger.addEventListener("click", function (e) {
				let cookieSettingsModal = document.querySelector('#onetrust-pc-sdk'),
					focusablesInCookieSettings = cookieSettingsModal.querySelectorAll('button:not([disabled]), a, input:not([disabled])');
				if (focusablesInCookieSettings.length > 0) {
					if (e.target !== focusablesInCookieSettings[0]) {
						setTimeout(function () { focusablesInCookieSettings[0].focus(); }, 0);
					}
				}
			});
		});
	}

	function CCsetUpMutationObserver(elem, config, callback) {
		var targetNode, observer;

		if (elem == null || config == null || typeof callback !== "function") {
			return;
		}
		if (elem !== undefined) {
			targetNode = elem;
		} else if (typeof elem === "string") {
			targetNode = document.querySelector(elem);

			if (targetNode == null || targetNode.length == 0) {
				return;
			}
		}
		observer = new MutationObserver(callback);
		observer.observe(targetNode, config);

		return observer;
	}

	function setupCCBannerObserver() {
		var target = document.body,
			injectedElemId = "onetrust-banner-sdk";

		CCsetUpMutationObserver(target, { childList: true, subtree: true }, function (mutationList, observer) {
			var len = mutationList.length,
				mutation,
				i,
				addedNodes,
				bannerElem,
				isExecuted;

			for (i = 0; i < len; i++) {
				mutation = mutationList[i];
				addedNodes = mutation.addedNodes;

				if (mutation.type === "childList" && addedNodes != null && addedNodes.length > 0) {
					bannerElem = document.getElementById(injectedElemId);

					if (bannerElem && !isExecuted) {
						observer.disconnect();
						initMobileHeaderBottomSpace();
						initMobileHeaderTabScroll();
						setupPreferenceCenterInitialFocus('#onetrust-pc-btn-handler, .cookie-setting-link');
						isExecuted = true;
					}
				}
			}
		});
	}

	function OTSDKBtnOnClickInit() {
		// Add event listener to "Cookie settings" btn in footer
		OTSDKBtnOnClickEventListener(document.getElementById('ot-sdk-btn'));

		// Add mutation observer to check if "Cookie settings" btn in OT footer banner exists
		const OTSDKBannerObserver = new MutationObserver(() => {
			if (document.getElementById('onetrust-pc-btn-handler')) {
				// Add event listener to "Cookie settings" btn in OT footer banner
				OTSDKBtnOnClickEventListener(document.getElementById('onetrust-pc-btn-handler'));
				OTSDKBannerObserver.disconnect();
			}
		});

		OTSDKBannerObserver.observe(document.querySelector("body"), {
			subtree: true,
			childList: true,
		});
	}

	function OTSDKBtnOnClickEventListener(elem) {
		if (elem) {
			elem.addEventListener('click', function () {
				const OTSdkBannerElem = document.querySelectorAll('#onetrust-pc-sdk.otPcCenter');
				if (OTSdkBannerElem.length > 1) {
					OTSdkBannerElem[1].remove();
				}
			});
		}
	}

	document.addEventListener("DOMContentLoaded", function () {
		setupCCBannerObserver();
		setupPreferenceCenterInitialFocus('#ot-sdk-btn, .ot-sdk-show-settings');
		OTSDKBtnOnClickInit();
	});
})();
