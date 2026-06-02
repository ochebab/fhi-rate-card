if (!EShop)
    var EShop = {};

EShop.UrlTools = (function () {
    var generateUrl = function (currentUrl, anchorPoint) {
        var pageUrl = '';
        var urlWithoutHashTag = removeHash(currentUrl);

        if (anchorPoint !== undefined) {
            pageUrl = urlWithoutHashTag + anchorPoint;
        } else {
            pageUrl = urlWithoutHashTag;
        }

        return pageUrl;
    };

    var removeHash = function (currentUrl) {
        var urlWithoutHashTag = '';

        if (currentUrl.indexOf('#') >= 0) {
            urlWithoutHashTag = currentUrl.substring(0, currentUrl.indexOf('#'));
        } else {
            urlWithoutHashTag = currentUrl;
        }

        return urlWithoutHashTag;
    };

    var redirectTo = function (urlRedirect, anchor, firefoxHackForceReload) {
        if (anchor !== undefined) {
            if (removeHash(urlRedirect) === removeHash(window.location.href)) {
                window.location.replace(urlRedirect + anchor);
                window.location.reload();
            } else {
                window.location.replace(urlRedirect + anchor);
            }
        } else {
            if (removeHash(urlRedirect) === removeHash(window.location.href)) {
                if (firefoxHackForceReload) {
                    window.location.href = removeHash(window.location.href);
                } else {
                    window.location.reload();
                }
            } else {
                window.location.replace(urlRedirect);
            }
        }
    };

    return {
        generateUrl: generateUrl,
        redirectTo: redirectTo
    };
}());

EShop.ManualServiceAddress = (function () {
    'use strict';

    var isAddressFormValid = function () {
        var errorDescTexts = $('#cantfindaddressdiv').find('.error-description');
        var errorMsgs = $('#cantfindaddressdiv').find('#errorMsgs');
        var errorList = $(errorMsgs).find('.error-list');
        var errorListitems = "",
            $spanErrorText = "",
            $listErrorText = "";
        var isFrench = document.documentElement.lang === 'fr';
        //var langErrorHeader = (isFrench) ? " erreur(s) emp&#xEA;chent la transmission du formulaire. Veuillez v&#xE9;rifier et r&#xE9;essayer." : " error(s) prevent the form from being submitted. Please check your entries and try again.";
        var langErrorHeader = (isFrench) ? "Un probl&egrave;me est survenu." : "We encountered a problem.";
        var langErrorText = (isFrench) ? " est obligatoire." : " is required.";
        var prefixTxt = (isFrench) ? "Le " : "";
        var isError = false;
        var isFormValid = true;

        $(errorMsgs).find('h3, #hiddenErrorMessageTitle').html("");
        $(errorList).html("");

        $(errorDescTexts).each(function (i, el) {
            var $getElFormGroup = $(el).closest("div.form-group"),
                $getInputLabel = $(el).closest("div.form-group").find("label").text(),
                $getInputEl = $(el).closest("div.form-group").find("input"),
                // regExStNameAndCity = /^[0-9a-zA-Z\u00C0-\u017F\-\'\� ]+$/;
                regExStNameAndCity = /^[0-9a-zA-Z\u00C0-\u017F\-\'\. ]+$/;

            if ($getInputEl.val() == "") {
                if ($($getInputEl).attr('name') == "city") {
                    prefixTxt = (isFrench) ? "La " : "";
                }
                if ($($getInputEl).attr('name') == "streetnumber" || $($getInputEl).attr('name') == "streetname" || $($getInputEl).attr('name') == "city") {
                    $listErrorText = (isFrench) ? "Ce renseignement est requis." : "This information is required.";
                    var labelTxt = (isFrench) ? $getInputLabel.toLowerCase() : $getInputLabel;
                    $spanErrorText = prefixTxt + labelTxt + langErrorText;
                    let labelTextEn = $($getInputEl).attr('name') == "streetnumber" ? "Street Number is required." : $($getInputEl).attr('name') == "streetname" ? "Street Name is required." : $($getInputEl).attr('name') == "city"? "City is required.": ""
                    $(el).find('span').eq(1).html($spanErrorText).attr("data-omni-content-error", labelTextEn);
                }

                isError = true;

            } else {
                isError = false;
                if ($($getInputEl).attr('name') == "streetnumber" && (/^[0-9]+$/.test($($getInputEl).val()) == false)) {
                    $listErrorText = (isFrench) ? "Veuillez entrer un num&eacute;ro valide." : "Please enter a valid street number.";
                    $spanErrorText = (isFrench) ? "Le num&eacute;ro ne peut contenir que des chiffres." : "Street number must be numbers only.";
                    $(el).find('span').eq(1).html($spanErrorText).attr("data-omni-content-error", "Street number must be numbers only.");
                    isError = true;
                }
                if ($($getInputEl).attr('name') == "streetname" && (!regExStNameAndCity.test($($getInputEl).val()))) {
                    $listErrorText = (isFrench) ? "Veuillez entrer un nom de rue valide." : "Please enter a valid street name.";
                    $spanErrorText = (isFrench) ? "Le nom de la rue ne peut contenir de symboles &agrave; l&rsquo;exception des traits d&rsquo;union (-), point(.) et apostophes (')." : "Street name can't include symbols, except for dashes (-), dots (.), and apostrophes (').";
                    $(el).find('span').eq(1).html($spanErrorText).attr("data-omni-content-error", "Street name cannot include symbols, except for dashes (-), dot(.) and apostophes (').");
                    isError = true;
                }
                if ($($getInputEl).attr('name') == "city" && (!regExStNameAndCity.test($($getInputEl).val()))) {
                    $listErrorText = (isFrench) ? "Veuillez entrer un nom de ville valide." : "Please enter a valid city.";
                    $spanErrorText = (isFrench) ? "Le nom de la ville ne peut contenir de symboles &agrave; l&rsquo;exception des traits d&rsquo;union (-), point(.) et apostophes (')." : "City cannot include symbols, except for dashes (-), dot(.) and apostrophes (').";
                    $(el).find('span').eq(1).html($spanErrorText).attr("data-omni-content-error", "City cannot include symbols, except for dashes (-), dot (.) and apostophes (').");
                    isError = true;
                }
            }
            if (isError) {
                isFormValid = false;
                $getElFormGroup.addClass('error');
                errorListitems += "<li class='listError'><a role='button' aria-describedby='" + $(el).attr("id") + "' href='javascript:document.getElementById(\"" + $($getInputEl).attr('id') + "\").focus()' class='error'>" + $getInputLabel + "</a><span> - " + $listErrorText + "</span></div>";
                $(el).show();
                $('#cantfindaddressdiv').find('.error-description:visible:first').closest("div.form-group").find("input").focus();
            } else {
                $getElFormGroup.removeClass('error');
                $(el).hide();
            }
        });
        if (!isFormValid) {
            document.body.classList.add('is_tabbing');
            //var countErrors = $('#cantfindaddressdiv').find('.error-description:visible').length;
            //$(errorMsgs).find('h3, #hiddenErrorMessageTitle').html(countErrors + langErrorHeader);
            $(errorMsgs).find('h3, #hiddenErrorMessageTitle').html(langErrorHeader);
            $(errorList).append(errorListitems);
            $(errorMsgs).show();
            $(errorList).find('a:visible:first').focus();
        } else {
            $(errorMsgs).hide();
        }
        return isFormValid;
    };

    var getAddressFormData = function () {
        return $("#cantfindaddform").serialize();
    };

    var AddressType = {
        address: function () {
            $("#titleModalAdresseWCodePostal").addClass("hide");
            $("#titleModalAdresseWOCodePostal").removeClass("hide");

            $("#foundaddressdiv").hide();
            $("#postalcodediv").hide();
            $("#cantfindaddressdiv").show();
        },
        postalCode: function () {
            $("#titleModalAdresseWCodePostal").removeClass("hide");
            $("#titleModalAdresseWOCodePostal").addClass("hide");

            $("#foundaddressdiv").hide();
            $("#cantfindaddressdiv").hide();
            $("#postalcodediv").show();
        },
        foundAddress: function () {
            $("#foundaddressdiv").show();
            $("#cantfindaddressdiv").hide();
            $("#postalcodediv").hide();
        },
        promoCodeAddress: function (promoCode) {
            $("#titleModalAdresseWCodePostal").addClass("hide");
            $("#titleModalAdresseWOCodePostal").removeClass("hide");
        },
        promoCodeLoading: function (promoCode) {
            $("#titleModalAdresseWCodePostal").addClass("hide");
            $("#titleModalAdresseWOCodePostal").removeClass("hide");

            $('#startTypingSection').addClass("hide");
            $('#promoCodeText').addClass("hide");
            $('#checkAvailabilitydesc').removeClass("hide");
            var a = $('#checkAvailabilitydesc');

            a.html("<span class='rsx-loading-indicator-spinner' ></span>");
            a.append($("#divloadertext1").text());
        }
    }

    var cantfindaddressLB = function (prmValue, lbContent, setContent) {
        $("#addressPreQualModal").find(".rsx-modal-inner-backdrop").removeClass("rsx-modal-inner-backdrop");
        var lightboxID = document.getElementById(prmValue);
        var lightboxContent = document.getElementById(lbContent);

        lightboxID = $(lightboxID).text();
        lightboxContent = $(lightboxContent).text();
        try {
            Omniture_LBTitleAndContent(lightboxID, lightboxContent);
        } catch (e) {

        }


        // popup content
        setContent();

        // Hiding previous error message
        $("#errorDivTop").hide();
        $("#errorDivTopIcon").hide();
        $("#errorDivPostalCode").hide();

        $("#errorDivStreetNumber").hide();
        $("#errorDivInvalidStreetNumber").hide();
        $("#errorDivStreetname").hide();
        $("#errorDivInvalidStreetname").hide();
        $("#errorDivCityName").hide();
        $("#errorDivInvalidCityName").hide();
        $("#errorDivAptNumber1").hide();
        $("#errorDivInvalidPostalCode").hide();
    };

    $(document).ready(function () {

        $(document).on("click", ".cantfindadddress", function (e) {
            e.preventDefault();

            cantfindaddressLB('titleModalAdresseWOCodePostal', 'provideaddAddress', AddressType.address);
        });

        $(document).on('click', '#activateCallmeBackForm', function (e) {
            e.preventDefault();
            //EShop.RequestaCallback.ClearExistingErrors();
            $('body').loadingIndicator('hide');
            $("#eShopTextCantFindAddHTB").modal('hide');
            $("#invalidAddresshtb").modal('hide');
            $("#multipleAddressHTBModal").modal('hide');
            $("#poBoxError").modal('hide');
            $("#eShopLOBNotAvailable").modal('hide');
            $("#requestCallback").modal();
            omnitureRequestCallBackStart();
        });

        //refresh errors for the form upon modal close
        $('#eShopTextCantFindAddHTB').on('hidden.bs.modal', function () {
            var $errorMessages = $('#cantfindaddressdiv').find('#errorMsgs');
            var $errorInInputs = $("#cantfindaddform div.form-group.error");

            $errorMessages.hide();
            $errorInInputs.removeClass("error");
        });

    });

    var numberOfUnits = function (rdata) {
        var jRdata = jQRSX(rdata);
        for (var i = 0; i < jRdata.length; i++) {

            if (typeof (jRdata[i].id) === undefined && jRdata[i].value.length == 0)
                continue;

            if (jRdata[i].id == "number-of-units")
                return parseInt(jRdata[i].value);
        }

        return 0;
    }

    var populateAddressPlaceholders = function (address) {
        $("[name='lbladdressnotfound']").text(address);
        $("#formSuccessAddress").text(address);
        $("#callBackAddress").val(address);
        $("[id='lblAdress']").text(address);
        $("[name='lblAddressNotFound']").text(address);

    }

    return {
        isAddressFormValid: isAddressFormValid,
        getAddressFormData: getAddressFormData,
        cantfindaddressLB: cantfindaddressLB,
        AddressType: AddressType,
        numberOfUnits: numberOfUnits,
        PopulateAddressPlaceholders: populateAddressPlaceholders,
    }
}());

function SetInternet() {
    if ($('#FibeTV').is(':checked')) {
        $('#Internet').prop('checked', 'checked');
        $('#Internet').parent().addClass('rsx-active');
    }
}

function preventiffibeselected() {
    if ($('#FibeTV').is(':checked') && $("#FibeTV").data("lobtype") == "IPTV") {
        $('#Internet').prop('checked', 'checked');
        $('#Internet').parent().addClass('rsx-active');
        $("#eShopPreventDeSelect").modal({ verticallyCenter: true });
        $("#eShopPreventDeSelect").modal('open');
        return false;
    }
    else {
        return true;
    }
}

EShop.Qualification = (function () {

    var reloadPage = function () {
        location.reload();
    }
    return {
        ReloadPage: reloadPage
    }
}());

// Message Category Enums
var MessageCatgEnumJS = {
    /// <summary>
    /// Information � blue icon 
    /// </summary>
    "Information": "I",
    /// <summary>
    /// Confirmation � green icon 
    /// </summary>
    "Confirmation": "C",
    /// <summary>
    /// Attention/Warning � yellow icon 
    /// </summary>
    "Warning": "W",
    /// <summary>
    /// Critical/Error � red icon 
    /// </summary>
    "Error": "E"
}