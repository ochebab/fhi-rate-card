if(typeof _cls_config === "undefined") _cls_config = {};

/* BEGIN ajax */
_cls_config.interceptAjax=true;
_cls_config.ajaxRecordMetadata="never";  
_cls_config.ajaxRecordRequestBody="uriMatches((\\/Ordering\\/.*\\/OrderForm\\/.*\\/Submit)|(\\/Ordering\\/.*\\/ActivateDevice\\/Submit)|(\\/Ordering\\/.*\\/OrderDetails)|(\\/TV\\/.*\\/Submit)|(\\/Ordering\\/.*\\/OrderForm\\/.*\\/CreditCardInformation)|(\\/PersonalizedContentApi\\/Api\\/TileContentData)|(\\/CustomerProfile\\/CustomerAccounts\\/.*)|(\\/UXP\\.Services\\/FieldServices\\/Appointments\\/Reschedule\\/Submit)|(\\/bpi\\/api\\/wi\\/v1\\/feedStatus)|(\\/bpi\\/api\\/wi\\/v1\\/nextStep)|(\\/ecare\\/Profile\\/Registration\\/SubmitProfile)|(\\/bpi\\/api\\/wi\\/v1\\/hydrate\\/startProcess)|(\\/FieldServices\\/Appointments\\/Reschedule\\/Availability)|(\\/dof\\/existingcustomer\\/dofbffselfserveapi)|(\\/dofbffselfserveapi)|(\\/ecare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/eCare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/apierror\\/)|(\\/PersonalizedContentApi\\/Api\\/Tiles.*)|(\\/Serviceaccount\\/.*)|(\\/ajax\\/toolbox\\/EscalationWebFormCheck)|(\\/UXP\\.Services\\/Tools\\/Utilities\\/DynamicScreensWeb)|(\\/Ordering\\/Mobility\\/.*\\/HUG.*)|(\\/Ordering\\/Mobility\\/.*\\/HardwareUpgrade.*)|(\\/Ordering\\/Mobility\\/.*\\/PhoneNumbers)|(\\/PreAuthorizedSignUp\\/IndexPartial)|(\\/PreAuthorizedSignUp\\/ReviewPartial)|(\\/PreAuthorizedSignUp\\/CreditCardAutopayOffer)|(\\/PreAuthorizedSignUp\\/BankAccountAutopayOffer)|(\\/PreAuthorizedSignUp\\/Confirm)|(\\/PayBill\\/BankAccountAutopayOffer)|(\\/PayBill\\/PreAuthorizeSignupPartial)|(\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/offering\\/getIncentiveDiscountDetails)|(\\/channelbellcaext\\/dof\\/hardwaremanagement\\/dofbffselfserveapi)|(\\/MyBill\\/PayBill\\/BankAccountAutopayOffer)|(\\/MyBill\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/Ordering\\/Mobility\\/.*\\/OrderForm\\/ChangeRatePlan)|(\\/ecare\\/Usage\\/Services\\/Mobility\\/.*\\/Summary\\/PreviewStatus)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/Feature)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/RatePlan)|(\\/DeviceValidation\\/Mobility)|(\\/Activation)|(\\/Usage\\/Services\\/Internet\\/.*\\/Usage\\/Summary)|(\\/Serviceaccount\\/Services\\/Internet\\/)|(\\/Ordering\\/Products\\/Internet\\/)|(\\/Ordering\\/Services\\/Internet\\/)|(\\/Ordering\\/InternetTool\\/SpeedComparison)|(\\/Internet\\/.*\\/Profile)|(\\/Ordering\\/Internet\\/.*\\/Product)|(\\/Ordering\\/Appointment)|(\\/Billing\\/BillingAccounts\\/.*\\/Bill)|(\\/Billing/\\BillingAccounts\\/.*\\/TimeLines)|(\\/Tools\\/GuidedTour\\/Tours\\/Mobility)|(\\/Ordering\\/TV\\/)|(\\/Ordering\\/Tv\\/)|(\\/serviceaccount\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Internet\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Bundle\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/PersonalInformation)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Appointment)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/BillingInfo)|(\\/(es|ES|eS)hop\\/Qualification\\/GetAddressFromCanadaPost.*)|(\\/(es|ES|eS)hop\\/Qualification\\/GetIndexOfSelectedAddress.*)|(\\/(es|ES|eS)hop\\/Qualification\\/ValidateManualEntryAddressFromLMS.*)|(\/catalogue\/callback-dropdown\.json)|(\\/api\\/auth\\/providers)|(\\/api\\/auth\\/signin\\/customer-sso)|(\\/api\\/auth\\/session)|(\\/api\\/protected\\/graphql)|(\\/api\\/auth\\/signout)|(\\/api\\/auth\\/signin\\/agent-sso)|(\\/api\\/feature-flags)|(\\/api\\/auth\\/csrf)|(\\/oauth\\/token)|(\\/mfa\\/authenticators\\/.*)|(\\/mfa\\/authenticators)|(net\\/1\\/NRBR)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidBrowse\\/Activation)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidSIM\\/SIM)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidUserInfo\\/Profile)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/OTPSVC\\/OTP)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/City)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/Assignments)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidPayment\\/TopUp)|(\\/uxpcommon\\/UXP\\.Services\\/Common\\/PDM\\/GetProductsByIdentifier)|(bell\\.ca\\/authorize)|(virginplus\\.ca\\/authorize)|(\\/channelbellcaext\\/amspia\\/portinmanagement\\/)|(\\/channelvirginext\\/amspia\\/portinmanagement\\/))";
_cls_config.ajaxRecordRequestHeaders="uriMatches((\\/Ordering\\/.*\\/OrderForm\\/.*\\/Submit)|(\\/Ordering\\/.*\\/ActivateDevice\\/Submit)|(\\/Ordering\\/.*\\/OrderDetails)|(\\/TV\\/.*\\/Submit)|(\\/Ordering\\/.*\\/OrderForm\\/.*\\/CreditCardInformation)|(\\/PersonalizedContentApi\\/Api\\/TileContentData)|(\\/CustomerProfile\\/CustomerAccounts\\/.*)|(\\/UXP\\.Services\\/FieldServices\\/Appointments\\/Reschedule\\/Submit)|(\\/bpi\\/api\\/wi\\/v1\\/feedStatus)|(\\/bpi\\/api\\/wi\\/v1\\/nextStep)|(\\/ecare\\/Profile\\/Registration\\/SubmitProfile)|(\\/bpi\\/api\\/wi\\/v1\\/hydrate\\/startProcess)|(\\/FieldServices\\/Appointments\\/Reschedule\\/Availability)|(\\/dof\\/existingcustomer\\/dofbffselfserveapi)|(\\/dofbffselfserveapi)|(\\/ecare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/eCare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/apierror\\/)|(\\/PersonalizedContentApi\\/Api\\/Tiles.*)|(\\/Serviceaccount\\/.*)|(\\/ajax\\/toolbox\\/EscalationWebFormCheck)|(\\/UXP\\.Services\\/Tools\\/Utilities\\/DynamicScreensWeb)|(\\/Ordering\\/Mobility\\/.*\\/HUG.*)|(\\/Ordering\\/Mobility\\/.*\\/HardwareUpgrade.*)|(\\/Ordering\\/Mobility\\/.*\\/PhoneNumbers)|(\\/PreAuthorizedSignUp\\/IndexPartial)|(\\/PreAuthorizedSignUp\\/ReviewPartial)|(\\/PreAuthorizedSignUp\\/CreditCardAutopayOffer)|(\\/PreAuthorizedSignUp\\/BankAccountAutopayOffer)|(\\/PreAuthorizedSignUp\\/Confirm)|(\\/PayBill\\/BankAccountAutopayOffer)|(\\/PayBill\\/PreAuthorizeSignupPartial)|(\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/offering\\/getIncentiveDiscountDetails)|(\\/channelbellcaext\\/dof\\/hardwaremanagement\\/dofbffselfserveapi)|(\\/MyBill\\/PayBill\\/BankAccountAutopayOffer)|(\\/MyBill\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/Ordering\\/Mobility\\/.*\\/OrderForm\\/ChangeRatePlan)|(\\/ecare\\/Usage\\/Services\\/Mobility\\/.*\\/Summary\\/PreviewStatus)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/Feature)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/RatePlan)|(\\/DeviceValidation\\/Mobility)|(\\/Activation)|(\\/Usage\\/Services\\/Internet\\/.*\\/Usage\\/Summary)|(\\/Serviceaccount\\/Services\\/Internet\\/)|(\\/Ordering\\/Products\\/Internet\\/)|(\\/Ordering\\/Services\\/Internet\\/)|(\\/Ordering\\/InternetTool\\/SpeedComparison)|(\\/Internet\\/.*\\/Profile)|(\\/Ordering\\/Internet\\/.*\\/Product)|(\\/Ordering\\/Appointment)|(\\/Billing\\/BillingAccounts\\/.*\\/Bill)|(\\/Billing/\\BillingAccounts\\/.*\\/TimeLines)|(\\/Tools\\/GuidedTour\\/Tours\\/Mobility)|(\\/Ordering\\/TV\\/)|(\\/Ordering\\/Tv\\/)|(\\/serviceaccount\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Internet\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Bundle\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/PersonalInformation)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Appointment)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/BillingInfo)|(\\/(es|ES|eS)hop\\/Qualification\\/GetAddressFromCanadaPost.*)|(\\/(es|ES|eS)hop\\/Qualification\\/GetIndexOfSelectedAddress.*)|(\\/(es|ES|eS)hop\\/Qualification\\/ValidateManualEntryAddressFromLMS.*)|(\/catalogue\/callback-dropdown\.json)|(\\/api\\/auth\\/providers)|(\\/api\\/auth\\/signin\\/customer-sso)|(\\/api\\/auth\\/session)|(\\/api\\/protected\\/graphql)|(\\/api\\/auth\\/signout)|(\\/api\\/auth\\/signin\\/agent-sso)|(\\/api\\/feature-flags)|(\\/api\\/auth\\/csrf)|(\\/oauth\\/token)|(\\/mfa\\/authenticators\\/.*)|(\\/mfa\\/authenticators)|(net\\/1\\/NRBR)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidBrowse\\/Activation)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidSIM\\/SIM)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidUserInfo\\/Profile)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/OTPSVC\\/OTP)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/City)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/Assignments)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidPayment\\/TopUp)|(\\/uxpcommon\\/UXP\\.Services\\/Common\\/PDM\\/GetProductsByIdentifier)|(bell\\.ca\\/authorize)|(virginplus\\.ca\\/authorize)|(\\/channelbellcaext\\/amspia\\/portinmanagement\\/)|(\\/channelvirginext\\/amspia\\/portinmanagement\\/))";
_cls_config.ajaxRecordResponseBody="uriMatches((\\/Ordering\\/.*\\/OrderForm\\/.*\\/Submit)|(\\/Ordering\\/.*\\/ActivateDevice\\/Submit)|(\\/Ordering\\/.*\\/OrderDetails)|(\\/TV\\/.*\\/Submit)|(\\/Ordering\\/.*\\/OrderForm\\/.*\\/CreditCardInformation)|(\\/PersonalizedContentApi\\/Api\\/TileContentData)|(\\/CustomerProfile\\/CustomerAccounts\\/.*)|(\\/UXP\\.Services\\/FieldServices\\/Appointments\\/Reschedule\\/Submit)|(\\/bpi\\/api\\/wi\\/v1\\/feedStatus)|(\\/bpi\\/api\\/wi\\/v1\\/nextStep)|(\\/ecare\\/Profile\\/Registration\\/SubmitProfile)|(\\/bpi\\/api\\/wi\\/v1\\/hydrate\\/startProcess)|(\\/FieldServices\\/Appointments\\/Reschedule\\/Availability)|(\\/dof\\/existingcustomer\\/dofbffselfserveapi)|(\\/dofbffselfserveapi)|(\\/ecare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/eCare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/apierror\\/)|(\\/PersonalizedContentApi\\/Api\\/Tiles.*)|(\\/Serviceaccount\\/.*)|(\\/ajax\\/toolbox\\/EscalationWebFormCheck)|(\\/UXP\\.Services\\/Tools\\/Utilities\\/DynamicScreensWeb)|(\\/Ordering\\/Mobility\\/.*\\/HUG.*)|(\\/Ordering\\/Mobility\\/.*\\/HardwareUpgrade.*)|(\\/Ordering\\/Mobility\\/.*\\/PhoneNumbers)|(\\/PreAuthorizedSignUp\\/IndexPartial)|(\\/PreAuthorizedSignUp\\/ReviewPartial)|(\\/PreAuthorizedSignUp\\/CreditCardAutopayOffer)|(\\/PreAuthorizedSignUp\\/BankAccountAutopayOffer)|(\\/PreAuthorizedSignUp\\/Confirm)|(\\/PayBill\\/BankAccountAutopayOffer)|(\\/PayBill\\/PreAuthorizeSignupPartial)|(\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/offering\\/getIncentiveDiscountDetails)|(\\/channelbellcaext\\/dof\\/hardwaremanagement\\/dofbffselfserveapi)|(\\/MyBill\\/PayBill\\/BankAccountAutopayOffer)|(\\/MyBill\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/Ordering\\/Mobility\\/.*\\/OrderForm\\/ChangeRatePlan)|(\\/ecare\\/Usage\\/Services\\/Mobility\\/.*\\/Summary\\/PreviewStatus)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/Feature)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/RatePlan)|(\\/DeviceValidation\\/Mobility)|(\\/Activation)|(\\/Usage\\/Services\\/Internet\\/.*\\/Usage\\/Summary)|(\\/Serviceaccount\\/Services\\/Internet\\/)|(\\/Ordering\\/Products\\/Internet\\/)|(\\/Ordering\\/Services\\/Internet\\/)|(\\/Ordering\\/InternetTool\\/SpeedComparison)|(\\/Internet\\/.*\\/Profile)|(\\/Ordering\\/Internet\\/.*\\/Product)|(\\/Ordering\\/Appointment)|(\\/Billing\\/BillingAccounts\\/.*\\/Bill)|(\\/Billing/\\BillingAccounts\\/.*\\/TimeLines)|(\\/Tools\\/GuidedTour\\/Tours\\/Mobility)|(\\/Ordering\\/TV\\/)|(\\/Ordering\\/Tv\\/)|(\\/serviceaccount\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Internet\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Bundle\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/PersonalInformation)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Appointment)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/BillingInfo)|(\\/(es|ES|eS)hop\\/Qualification\\/GetAddressFromCanadaPost.*)|(\\/(es|ES|eS)hop\\/Qualification\\/GetIndexOfSelectedAddress.*)|(\\/(es|ES|eS)hop\\/Qualification\\/ValidateManualEntryAddressFromLMS.*)|(\/catalogue\/callback-dropdown\.json)|(\\/api\\/auth\\/providers)|(\\/api\\/auth\\/signin\\/customer-sso)|(\\/api\\/auth\\/session)|(\\/api\\/protected\\/graphql)|(\\/api\\/auth\\/signout)|(\\/api\\/auth\\/signin\\/agent-sso)|(\\/api\\/feature-flags)|(\\/api\\/auth\\/csrf)|(\\/oauth\\/token)|(\\/mfa\\/authenticators\\/.*)|(\\/mfa\\/authenticators)|(net\\/1\\/NRBR)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidBrowse\\/Activation)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidSIM\\/SIM)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidUserInfo\\/Profile)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/OTPSVC\\/OTP)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/City)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/Assignments)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidPayment\\/TopUp)|(\\/uxpcommon\\/UXP\\.Services\\/Common\\/PDM\\/GetProductsByIdentifier)|(bell\\.ca\\/authorize)|(virginplus\\.ca\\/authorize)|(\\/channelbellcaext\\/amspia\\/portinmanagement\\/)|(\\/channelvirginext\\/amspia\\/portinmanagement\\/))";
_cls_config.ajaxRecordResponseHeaders="uriMatches((\\/Ordering\\/.*\\/OrderForm\\/.*\\/Submit)|(\\/Ordering\\/.*\\/ActivateDevice\\/Submit)|(\\/Ordering\\/.*\\/OrderDetails)|(\\/TV\\/.*\\/Submit)|(\\/Ordering\\/.*\\/OrderForm\\/.*\\/CreditCardInformation)|(\\/PersonalizedContentApi\\/Api\\/TileContentData)|(\\/CustomerProfile\\/CustomerAccounts\\/.*)|(\\/UXP\\.Services\\/FieldServices\\/Appointments\\/Reschedule\\/Submit)|(\\/bpi\\/api\\/wi\\/v1\\/feedStatus)|(\\/bpi\\/api\\/wi\\/v1\\/nextStep)|(\\/ecare\\/Profile\\/Registration\\/SubmitProfile)|(\\/bpi\\/api\\/wi\\/v1\\/hydrate\\/startProcess)|(\\/FieldServices\\/Appointments\\/Reschedule\\/Availability)|(\\/dof\\/existingcustomer\\/dofbffselfserveapi)|(\\/dofbffselfserveapi)|(\\/ecare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/eCare\\/Serviceaccount\\/Mobility\\/ActivationCode)|(\\/apierror\\/)|(\\/PersonalizedContentApi\\/Api\\/Tiles.*)|(\\/Serviceaccount\\/.*)|(\\/ajax\\/toolbox\\/EscalationWebFormCheck)|(\\/UXP\\.Services\\/Tools\\/Utilities\\/DynamicScreensWeb)|(\\/Ordering\\/Mobility\\/.*\\/HUG.*)|(\\/Ordering\\/Mobility\\/.*\\/HardwareUpgrade.*)|(\\/Ordering\\/Mobility\\/.*\\/PhoneNumbers)|(\\/PreAuthorizedSignUp\\/IndexPartial)|(\\/PreAuthorizedSignUp\\/ReviewPartial)|(\\/PreAuthorizedSignUp\\/CreditCardAutopayOffer)|(\\/PreAuthorizedSignUp\\/BankAccountAutopayOffer)|(\\/PreAuthorizedSignUp\\/Confirm)|(\\/PayBill\\/BankAccountAutopayOffer)|(\\/PayBill\\/PreAuthorizeSignupPartial)|(\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/offering\\/getIncentiveDiscountDetails)|(\\/channelbellcaext\\/dof\\/hardwaremanagement\\/dofbffselfserveapi)|(\\/MyBill\\/PayBill\\/BankAccountAutopayOffer)|(\\/MyBill\\/PayBill\\/CreditCardAutopayOffer)|(\\/MyBill\\/PreAuthorizeSignup)|(\\/Ordering\\/Mobility\\/.*\\/OrderForm\\/ChangeRatePlan)|(\\/ecare\\/Usage\\/Services\\/Mobility\\/.*\\/Summary\\/PreviewStatus)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/Feature)|(\\/ecare\\/Ordering\\/Mobility\\/.*\\/RatePlan)|(\\/DeviceValidation\\/Mobility)|(\\/Activation)|(\\/Usage\\/Services\\/Internet\\/.*\\/Usage\\/Summary)|(\\/Serviceaccount\\/Services\\/Internet\\/)|(\\/Ordering\\/Products\\/Internet\\/)|(\\/Ordering\\/Services\\/Internet\\/)|(\\/Ordering\\/InternetTool\\/SpeedComparison)|(\\/Internet\\/.*\\/Profile)|(\\/Ordering\\/Internet\\/.*\\/Product)|(\\/Ordering\\/Appointment)|(\\/Billing\\/BillingAccounts\\/.*\\/Bill)|(\\/Billing/\\BillingAccounts\\/.*\\/TimeLines)|(\\/Tools\\/GuidedTour\\/Tours\\/Mobility)|(\\/Ordering\\/TV\\/)|(\\/Ordering\\/Tv\\/)|(\\/serviceaccount\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Internet\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Bundle\\/.*)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/PersonalInformation)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/Appointment)|(\\/channelvirginext\\/UXP\\.Services\\/e(c|C)are\\/Ordering\\/EShop\\/.*\\/BillingInfo)|(\\/(es|ES|eS)hop\\/Qualification\\/GetAddressFromCanadaPost.*)|(\\/(es|ES|eS)hop\\/Qualification\\/GetIndexOfSelectedAddress.*)|(\\/(es|ES|eS)hop\\/Qualification\\/ValidateManualEntryAddressFromLMS.*)|(\/catalogue\/callback-dropdown\.json)|(\\/api\\/auth\\/providers)|(\\/api\\/auth\\/signin\\/customer-sso)|(\\/api\\/auth\\/session)|(\\/api\\/protected\\/graphql)|(\\/api\\/auth\\/signout)|(\\/api\\/auth\\/signin\\/agent-sso)|(\\/api\\/feature-flags)|(\\/api\\/auth\\/csrf)|(\\/oauth\\/token)|(\\/mfa\\/authenticators\\/.*)|(\\/mfa\\/authenticators)|(net\\/1\\/NRBR)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidBrowse\\/Activation)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidSIM\\/SIM)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidUserInfo\\/Profile)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/OTPSVC\\/OTP)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/City)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidNumberSelection\\/Assignments)|(\\/channelluckyext\\/Shop\\/BCE\\/APIP\\/Services\\/PrepaidPayment\\/TopUp)|(\\/uxpcommon\\/UXP\\.Services\\/Common\\/PDM\\/GetProductsByIdentifier)|(bell\\.ca\\/authorize)|(virginplus\\.ca\\/authorize)|(\\/channelbellcaext\\/amspia\\/portinmanagement\\/)|(\\/channelvirginext\\/amspia\\/portinmanagement\\/))";
_cls_config.ajaxRecordStats="always";
_cls_config.ajaxMaskResponseBody=
[
  {
    "predicate": "uriMatches((.*\/channelbellcaext)|(.*\/channelluckyext)|(.*\/channelvirginext)|(.*\/PreAuthorizeReviewPartial)|(.*\/PreAuthorizeSignupPartial))",
	  "transformations":
    [ 
      {type:"pattern",search:'(id="AccountHolderName">).*(<\/label>)',replace:"$1*********$2"},
      {type:"pattern",search:'(id="TransitNumber">).*(<\/label>)',replace:"$1*********$2"},
      {type:"pattern",search:'(id="BankName">).*(<\/label>)',replace:"$1*********$2"},
      // {type:"pattern",search:'(value="(.*)")',replace: "$1*********$2"},
      {type:"pattern",search:'(id="AccountNumber">).*(<\/label>)',replace:"$1*********$2"},
      {type:"pattern",search:'(id="CardholderName">).*(<\/label>)',replace:"$1*********$2"},
      {type:"pattern",search:'(id="CreditCardExpirationDate">).*(<\/label>)',replace:"$1*********$2"},
      {type:"pattern",search:'(id="CreditCardNumberMasked">).*(<\/label>)',replace:"$1*********$2"},
      {type:"jsonfield",search:"AccountHolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"AccountNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"accountNumberMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"accountNumberMaskedDisplay",replace:"XXXXX"},
      {type:"jsonfield",search:"BankAccountDetails",replace:"XXXXX"},
      {type:"jsonfield",search:"BankCode",replace:"XXXXX"},
      {type:"jsonfield",search:"bankAccountDetails",replace:"XXXXX"},
      {type:"jsonfield",search:"bankCode",replace:"XXXXX"},
      {type:"jsonfield",search:"bankCodeLong",replace:"XXXXX"},
      {type:"jsonfield",search:"bankName",replace:"XXXXX"},
      {type:"jsonfield",search:"BankName",replace:"XXXXX"},
      {type:"jsonfield",search:"bffToken",replace:"XXXXX"},
      {type:"jsonfield",search:"cardBrand",replace:"XXXXX"},
      {type:"jsonfield",search:"cardHolder",replace:"XXXXX"},
      {type:"jsonfield",search:"cardHolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"CardHolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"cardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"CardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"cardType",replace:"XXXXX"},
      {type:"jsonfield",search:"civicNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"ConfirmSecretAnswer",replace:"XXXXX"},
      {type:"jsonfield",search:"country",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardDetails",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"creditCardLastFourDigits",replace:"XXXXX"},
      {type:"jsonfield",search:"creditCardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardNumberMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"creditCardNumberMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardToken",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardType",replace:"XXXXX"},
      {type:"jsonfield",search:"CustomQuestionText",replace:"XXXXX"},
      {type:"jsonfield",search:"cvv",replace:"XXXXX"},
      {type:"jsonfield",search:"dateOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"eid",replace:"XXXXX"},
      {type:"jsonfield",search:"expirationDateDisplay",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpirationDateDisplay",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryDate",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpiryDate",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryDateMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryDateYear",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"HolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"iccid",replace:"XXXXX"},
      {type:"jsonfield",search:"imei",replace:"XXXXX"},
      {type:"jsonfield",search:"LastFourDigits",replace:"XXXXX"},
      {type:"jsonfield",search:"lastFourDigits",replace:"XXXXX"},
      {type:"jsonfield",search:"nameOnCard",replace:"XXXXX"},
      {type:"jsonfield",search:"NewKey",replace:"XXXXX"},
      {type:"jsonfield",search:"newImei",replace:"XXXXX"},
      {type:"jsonfield",search:"newSim",replace:"XXXXX"},
      {type:"jsonfield",search:"newVoiceMailPassword",replace:"XXXXX"},
      {type:"jsonfield",search:"ownershipVerificationCode",replace:"XXXXX"},
      {type:"jsonfield",search:"passportNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"PasswordKey",replace:"XXXXX"},
      {type:"jsonfield",search:"pin",replace:"XXXXX"},
      {type:"jsonfield",search:"previousSim",replace:"XXXXX"},
      {type:"jsonfield",search:"primaryLine",replace:"XXXXX"},
      {type:"jsonfield",search:"recoveryid",replace:"XXXXX"},
      {type:"jsonfield",search:"SecretAnswer",replace:"XXXXX"},
      {type:"jsonfield",search:"SecretAnswerText",replace:"XXXXX"},
      {type:"jsonfield",search:"SecretQuestionId",replace:"XXXXX"},
      {type:"jsonfield",search:"securityCode",replace:"XXXXX"},
      {type:"jsonfield",search:"SecurityCode",replace:"XXXXX"},
      {type:"jsonfield",search:"securityCodeMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"SecurityCodeMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"SelectedPaymentMethod",replace:"XXXXX"},
      {type:"jsonfield",search:"Token",replace:"XXXXX"},
      {type:"jsonfield",search:"token",replace:"XXXXX"},
      {type:"jsonfield",search:"tokenizedCardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"TransitCode",replace:"XXXXX"},
      {type:"jsonfield",search:"transitCode",replace:"XXXXX"},
      {type:"jsonfield",search:"UserSecretQuestionAnswerD",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedCVV",replace:"XXXXX"},
      {type:"jsonfield",search:"ValidatedCVV",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedExpireMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"ValidatedExpireMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedExpireYear",replace:"XXXXX"},
      {type:"jsonfield",search:"ValidatedExpireYear",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedToken",replace:"XXXXX"},
      {type:"jsonfield",search:"voucherNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"accountHolderFirstName",replace:"XXXXX"},
      {type:"jsonfield",search:"accountHolderLastName",replace:"XXXXX"},
      {type:"jsonfield",search:"bank",replace:"XXXXX"},
      {type:"jsonfield",search:"bankAccountNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"dayOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"monthOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"yearOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"password",replace:"XXXXX"},
      {type:"jsonfield",search:"questionText",replace:"XXXXX"},
      {type:"jsonfield",search:"answer",replace:"XXXXX"},
      {type:"jsonfield",search:"tokenID",replace:"XXXXX"},
      {type:"jsonfield",search:"dlExpiryDay",replace:"XXXXX"},
      {type:"jsonfield",search:"dlExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"dlExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"ccExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"ccExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"CCExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"CCExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"DLExpiryDay",replace:"XXXXX"},
      {type:"jsonfield",search:"DLExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"DLExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"valueOfSelectedIdentificationMethod",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpireMonth ",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpireYear",replace:"XXXXX"},
      {type:"jsonfield",search:"questionAnswerList",replace:"XXXXX"},
      {type:"jsonfield",search:"questionId",replace:"XXXXX"},
      {type:"jsonfield",search:"answerText",replace:"XXXXX"},
      {type:"jsonfield",search:"questionText",replace:"XXXXX"},
      {type:"jsonfield",search:"expMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"expYear",replace:"XXXXX"},
      {type:"jsonfield",search:"AuthorizationValue", replace:"XXXXX"}
    ]
  }
]
_cls_config.ajaxMaskRequestBody=
[
  {
	  "predicate": "uriMatches((.*\/channelbellcaext)|(.*\/channelluckyext)|(.*\/channelvirginext))",
	  "transformations":
    [
      {type:"jsonfield",search:"AccountHolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"AccountNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"accountNumberMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"accountNumberMaskedDisplay",replace:"XXXXX"},
      {type:"jsonfield",search:"BankAccountDetails",replace:"XXXXX"},
      {type:"jsonfield",search:"BankCode",replace:"XXXXX"},
      {type:"jsonfield",search:"bankAccountDetails",replace:"XXXXX"},
      {type:"jsonfield",search:"bankCode",replace:"XXXXX"},
      {type:"jsonfield",search:"bankCodeLong",replace:"XXXXX"},
      {type:"jsonfield",search:"bankName",replace:"XXXXX"},
      {type:"jsonfield",search:"BankName",replace:"XXXXX"},
      {type:"jsonfield",search:"bffToken",replace:"XXXXX"},
      {type:"jsonfield",search:"cardBrand",replace:"XXXXX"},
      {type:"jsonfield",search:"cardHolder",replace:"XXXXX"},
      {type:"jsonfield",search:"cardHolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"CardHolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"cardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"CardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"cardType",replace:"XXXXX"},
      {type:"jsonfield",search:"civicNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"ConfirmSecretAnswer",replace:"XXXXX"},
      {type:"jsonfield",search:"country",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardDetails",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"creditCardLastFourDigits",replace:"XXXXX"},
      {type:"jsonfield",search:"creditCardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardNumberMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"creditCardNumberMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardToken",replace:"XXXXX"},
      {type:"jsonfield",search:"CreditCardType",replace:"XXXXX"},
      {type:"jsonfield",search:"CustomQuestionText",replace:"XXXXX"},
      {type:"jsonfield",search:"cvv",replace:"XXXXX"},
      {type:"jsonfield",search:"dateOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"eid",replace:"XXXXX"},
      {type:"jsonfield",search:"expirationDateDisplay",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpirationDateDisplay",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryDate",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpiryDate",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryDateMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryDateYear",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"expiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"HolderName",replace:"XXXXX"},
      {type:"jsonfield",search:"iccid",replace:"XXXXX"},
      {type:"jsonfield",search:"imei",replace:"XXXXX"},
      {type:"jsonfield",search:"LastFourDigits",replace:"XXXXX"},
      {type:"jsonfield",search:"lastFourDigits",replace:"XXXXX"},
      {type:"jsonfield",search:"nameOnCard",replace:"XXXXX"},
      {type:"jsonfield",search:"NewKey",replace:"XXXXX"},
      {type:"jsonfield",search:"newImei",replace:"XXXXX"},
      {type:"jsonfield",search:"newSim",replace:"XXXXX"},
      {type:"jsonfield",search:"newVoiceMailPassword",replace:"XXXXX"},
      {type:"jsonfield",search:"ownershipVerificationCode",replace:"XXXXX"},
      {type:"jsonfield",search:"passportNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"PasswordKey",replace:"XXXXX"},
      {type:"jsonfield",search:"pin",replace:"XXXXX"},
      {type:"jsonfield",search:"previousSim",replace:"XXXXX"},
      {type:"jsonfield",search:"primaryLine",replace:"XXXXX"},
      {type:"jsonfield",search:"recoveryid",replace:"XXXXX"},
      {type:"jsonfield",search:"SecretAnswer",replace:"XXXXX"},
      {type:"jsonfield",search:"SecretAnswerText",replace:"XXXXX"},
      {type:"jsonfield",search:"SecretQuestionId",replace:"XXXXX"},
      {type:"jsonfield",search:"securityCode",replace:"XXXXX"},
      {type:"jsonfield",search:"SecurityCode",replace:"XXXXX"},
      {type:"jsonfield",search:"securityCodeMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"SecurityCodeMasked",replace:"XXXXX"},
      {type:"jsonfield",search:"SelectedPaymentMethod",replace:"XXXXX"},
      {type:"jsonfield",search:"Token",replace:"XXXXX"},
      {type:"jsonfield",search:"token",replace:"XXXXX"},
      {type:"jsonfield",search:"tokenizedCardNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"TransitCode",replace:"XXXXX"},
      {type:"jsonfield",search:"transitCode",replace:"XXXXX"},
      {type:"jsonfield",search:"UserSecretQuestionAnswerD",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedCVV",replace:"XXXXX"},
      {type:"jsonfield",search:"ValidatedCVV",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedExpireMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"ValidatedExpireMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedExpireYear",replace:"XXXXX"},
      {type:"jsonfield",search:"ValidatedExpireYear",replace:"XXXXX"},
      {type:"jsonfield",search:"validatedToken",replace:"XXXXX"},
      {type:"jsonfield",search:"voucherNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"accountHolderFirstName",replace:"XXXXX"},
      {type:"jsonfield",search:"accountHolderLastName",replace:"XXXXX"},
      {type:"jsonfield",search:"bank",replace:"XXXXX"},
      {type:"jsonfield",search:"bankAccountNumber",replace:"XXXXX"},
      {type:"jsonfield",search:"dayOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"monthOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"yearOfBirth",replace:"XXXXX"},
      {type:"jsonfield",search:"password",replace:"XXXXX"},
      {type:"jsonfield",search:"questionText",replace:"XXXXX"},
      {type:"jsonfield",search:"answer",replace:"XXXXX"},
      {type:"jsonfield",search:"tokenID",replace:"XXXXX"},
      {type:"jsonfield",search:"dlExpiryDay",replace:"XXXXX"},
      {type:"jsonfield",search:"dlExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"dlExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"ccExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"ccExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"CCExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"CCExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"DLExpiryDay",replace:"XXXXX"},
      {type:"jsonfield",search:"DLExpiryMonth",replace:"XXXXX"},
      {type:"jsonfield",search:"DLExpiryYear",replace:"XXXXX"},
      {type:"jsonfield",search:"valueOfSelectedIdentificationMethod",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpireMonth ",replace:"XXXXX"},
      {type:"jsonfield",search:"ExpireYear",replace:"XXXXX"},
      {type:"jsonfield",search:"questionAnswerList",replace:"XXXXX"},
      {type:"jsonfield",search:"questionId",replace:"XXXXX"},
      {type:"jsonfield",search:"answerText",replace:"XXXXX"},
      {type:"jsonfield",search:"questionText",replace:"XXXXX"},
      {type:"jsonfield",search:"AuthorizationValue", replace:"XXXXX"}
    ]
  }
]
/* END ajax */

/*BEGIN MASKING*/
//Value Masking (INPUT)
_cls_config.blackoutWhenLocationContains=[];
_cls_config.valueMaskingMode = "whitelist";
_cls_config.maskWhitelistValueById =['dp-amount','USER','loginId','ValidationAddressHowtoBuy','fname','lname','emailAddress','confirmEmailAddress','ContactName','IDType','CanadaPreviousAddress','PersonalInformation_BillingInformationViewModel_StreetAddress','PersonalInformation_CustomerInformationViewModel_FirstName','PersonalInformation_CustomerInformationViewModel_LastName','PersonalInformation_BillingInformationViewModel_StreetAddressDetail_SubBuilding','PersonalInformation_CustomerInformationViewModel_EmailAddress','PersonalInformation_CustomerInformationViewModel_ConfirmEmailAddress','StreetAddressVisualOnly','input_8','firstName','lastName','email','emailConfirm','identificationType','CONTACT_FULL_NAME','name','address','customer_firstName','customer_lastName','customer_email','customer_email2','billing_device_creditCard_streetNumber','billing_device_creditCard_streetName','billing_device_creditCard_unitNumber','billing_device_creditCard_city','billing_device_creditCard_postalcode','Emailaddress','conEmailAddress','recoveryemail','recoveryNumber','editBillingAddr_enterPostal','txtAddressLine1','txtAddressLine2','EditBillingA_txtcity','editBillingAddr_txtPostalCode','txtAccountOrMobileNumber','txtPostalCode','txtEmailAddress','txtConfirmEmailAddress','txtLastName','UserName','EmailAddress','selectPhone','addressline1','addressline2','localAddr_txtCity','localAddr_txtPostalcode','selectProvince','address-line2','intlCity','selectCountry','TL_CHANGE_ADDRESS_POSTALCODE_MAIN','TL_CHANGE_ADDRESS_LINE1','TL_CHANGE_ADDRESS_LINE2','TL_CHANGE_ADDRESS_CITY','TL_CHANGE_ADDRESS_PROVINCE','TL_CHANGE_ADDRESS_POSTALCODE','CantFindAddress_StreetNumber','CantFindAddress_StreetNumberSuffix','CantFindAddress_StreetName','CantFindAddress_StreetType','CantFindAddress_StreetPostDirection','CantFindAddress_SubBuilding','CantFindAddress_City','CantFindAddress_PostalCode','PersonalInformation_BillingInformationViewModel_PhoneNumber','PersonalInformation_BillingInformationViewModel_StreetAddressDetail_SubBuilding','PersonalInformation_BillingInformationViewModel_EntryCode','OrderTrackingNo','PhnoPostalcode','username','bellservices','drpdifferentprovider','txtsingleAccountNumber','currtransa','orderortrackingnumber','phoneorpostalcode','temporary-phone-number-input','phone-number-input','tempphno','phone','DRODownPaymentSlider', 'KIODownPaymentSlider'];
_cls_config.maskWhitelistValueByClass=['gb-unmask'];
//00057852 Adding masking as requested.
//DOM Masking
_cls_config.domMaskingMode = "blacklist";
_cls_config.domBlacklistMaskContentByClass=['ulp-authenticator-selector-text','unlock-sim-override','cls_mask','dataDetailsTable.contentId','information-right','product_usage_details','dataListThemeH','iot-info','rsx-custom-select','rsx-custom-select','addDataTable','md-icon-info-block-full','MyAccountInfo','alignCredit-box','bank-name-align','radio-bank-md','autopay-payment-info-container','otp-field-box','last:payment-mb-0','sm:payment-w-auto','captureImage','tlPrivate', 'gb-mask'];
_cls_config.domBlacklistMaskContentById=['TransitId','TransitNumber','AccountHolderName','AccountNumber','BankName','CreditCardExpirationDate','CardholderName','VoucherNumber','CreditCardDetails_CreditCardNumber','CreditCardDetails_CardholderName','CreditCardDetails_CreditCardType','NewPin','BankAccountDetails_CardHolder','BankAccountDetails_BankName','BankAccountDetails_TransitCode','BankAccountDetails_BankCode','secretquestiondisplay','lblBackupMobileNo','lblBackupEmail','hdnRecoveryMobileNumber','hdnRecoveryEmailAddress','usage-details-table-body','SelectedCreditCard_ExpireMonth','SelectedCreditCard_ExpireYear','BankAccountInfo_BankCodeDDL','CurrentItem_BankAccountDetails_BankName','CurrentItem_BankAccountDetails_CardHolder','CurrentItem_BankAccountDetails_BankCode','CurrentItem_BankAccountDetails_AccountNumberMasked','CurrentItem_CreditCardDetails_CreditCardType','CurrentItem_CreditCardDetails_CreditCardNumberMasked','CurrentItem_CreditCardDetails_ExpireYear','CurrentItem_CreditCardDetails_ExpireMonth','TransitNumberAndAccountNumber','txtSecretQuestion1','txtSecretQuestion2','txtSecretQuestion3','txtCardNumber','txtCreditCardHolderName','ddlCCMonth','ddlCCYear','ddlMonth','ddlYear','dataTable','LoginInfoModel_SecretQuestionId1','LoginInfoModel_SecretQuestionId2','LoginInfoModel_SecretQuestionId3','dataTab','ddlBankName','ReviewPage_CardHolderName','ReviewPage_CardNumber','ReviewPage_CardExpiryDate','ddlCardType','DriverLicense','CreditCardNumber','SinNumber','txtDriverLicenseNumber','dlprovince','expiryMonth','expiryDay','expiryYear','MOB','DOB','YOB','CC_expMonth_PI','CC_expYear_PI','EXPM','EXPD','EXPY','SecretQuestion1','cardHolderName','CreditCard_ExpirationDataMM*','CreditCard_ExpirationDateYY*','PassportCountry','PassportCountry','tempMaskedCC','hdnSelectedBankName','hdnSelectedBankCode','hdnSelectedBankCodeLong','NewPW','month','day','year','expirationMonth','expirationYear','dlexpirymonth','dlexpiryday','dlexpiryyear','secretQuestion1','secretQuestion2','secretQuestion3','singleCompany','topUPAddValue','TransitCodeAndAccountNumber','UnlockKey','profileinformation-prf-rcry','profile_reminder_lightbox','divCurrentPADInfo*','spnBAHolderName*','spnBABankName*','spnBABankAcctNumberMasked*','divCurrentPACCInfo*','spnCCHolderName*','spnCCDescription*','spnCCNumberMasked*','spnCCExpriationDate*','spnCCType*','customer_dateOfBirth_month','customer_dateOfBirth_day','customer_dateOfBirth_year','billing_device_creditCard_expiry_month','billing_device_creditCard_expiry_year','personalDetailsReview','box_paymentdetails','expiration-month','expiration-date','expiration-year','divDebitBankName','divExpirationDate','ddlCCMonth*','ddlCCYear*','divDebit*','divCredit*','transitnumber','bankname','accountnumber','accountholdername','checkbox-preauthorized-text','BankAccountInfo_TransitCode','BankAccountInfo_CardHolder','BankAccountInfo_AccountNumberMasked','lnkPreAuthBank*','ReviewPage_DataOfBirth','CcMonthData_Payment','CcYearData_Payment','Payment_PaymentInformation_PaymentInfoDetail_CreditCard_ExpirationDataMM','Payment_PaymentInformation_PaymentInfoDetail_CreditCard_ExpirationDateYY','PersonalInformation_CreditInformationViewModel_MonthOfDOB','PersonalInformation_CreditInformationViewModel_DateOfDOB','PersonalInformation_CreditInformationViewModel_YearOfDOB','bank-name','PersonalInformation_DateOfBirthMM*','PersonalInformation_DateOfBirthDD*','PersonalInformation_DateOfBirthYY*','PassportCountry*','PassportExpiryDateMM*','PassportExpiryDateDD*','PassportExpiryDateYY*','CreditCardNumberMasked','CardholderName','CreditCardExpirationDate','BankAccountInfo_TransitCode','BankAccountInfo_CardHolder','BankAccountInfo_AccountNumberMasked','SelectedCreditCard_CardholderName','lnkNameOnCard','credit_card_number','label_expiration_date','SelectedCreditCard_SecurityCodeMasked','BankAccountInfo_TransitCode','BankAccountInfo_CardHolder','BankAccountInfo_AccountNumberMasked','selfieCapture','instructionImage','date-of-birth','exp-month','exp-year','payment-summary-voucher-number-*','topup-card-voucher-number-*','SecretQuestionId','payment-summary-cardholder-name','payment-summary-card-last-four','payment-summary-expiry-date','payment-summary-postal-code','password','confirmPassword','secretQuestions.*.question','secretQuestions.*.answer'];
_cls_config.domBlacklistMaskSimpleSelector=['label[for= "Secret question1"]','body > div:nth-child(86) > div.fade.in.modal > div > div > div.pad-30.pad-h-15-xs.bgWhite.modal-body > div > div.inlineBlock.pad-20-left.no-pad-left-xs.content-width.valign-top > p.txtBlue.txtSize18.txtBold.no-margin-bottom','#checkoutbillingshippingform > div > div.rsx-no-margin-bottom > div:nth-child(2) > div:nth-child(4) > div > div.rsx-form-group.js-custom-select-date.rsx-col-no-pad.row.clearfix.rsx-margin-bottom.rsx-margin-30-top-xs > div.col-xs-12.col-sm-8.col-md-9.rsx-form-control-col > div:nth-child(1) > button > span','#checkoutbillingshippingform > div > div.rsx-no-margin-bottom > div:nth-child(2) > div:nth-child(4) > div > div.rsx-form-group.js-custom-select-date.rsx-col-no-pad.row.clearfix.rsx-margin-bottom.rsx-margin-30-top-xs > div.col-xs-12.col-sm-8.col-md-9.rsx-form-control-col > div:nth-child(2) > button > span','#checkoutbillingshippingform > div > div.rsx-no-margin-bottom > div:nth-child(2) > div:nth-child(4) > div > div:nth-child(1) > div.col-xs-12.col-sm-8.col-md-9.rsx-form-control-col > span','#checkoutreviewform > div > section:nth-child(3) > div > div > div.col-md-6.pad-l-md-30 > div.margin-b-15 > dl > dd:nth-child(4) > span','#checkoutreviewform > div > section:nth-child(3) > div > div > div.col-md-6.pad-l-md-30 > div.margin-b-15 > dl > dd.no-margin > span','#your-order-accordion-body > section > div > div > section:nth-child(4) > div > div > div.col-md-6.pad-l-md-30 > div.margin-b-15 > dl > dd:nth-child(4) > span','#your-order-accordion-body > section > div > div > section:nth-child(4) > div > div > div.col-md-6.pad-l-md-30 > div.margin-b-15 > dl > dd.no-margin > span','div.col-xs-8.col-sm-9.col-md-9.col-lg-9 > span.list-unstyled > span > span','span[class="rsx-txt-normal"]','div[aria-describedby="PAYMENT_INFORMATION"]','div[aria-describedby="CREDIT_VERIFICATION"]','#mainContent > div > div.virgin-mobility-checkout-credit > div > section > div > div > div.sm\\:vbfa-w-\\[54\\.8\\%\\].md\\:vbfa-w-\\[54\\.79\\%\\] > div > div > div:nth-child(6) > span','ul span[class="txtLineHeight-18 txtSize14 txtLightGray3 fontArial wordWrap"]','span[class="voucherNumberManual"]','#PersonalInfo > div > div.co-form-fields > section > div.margin-b-30 > p','div[aria-describedby="ID_CHECK"]','button[aria-labelledby="expiry-year-label"]','button[aria-labelledby="expiry-month-label"]'];

//OMITTING
_cls_config.domOmitById=['selfieCapture','instructionImage'];
_cls_config.domOmitByClass=['voucherClear','captureImage'];

/*END MASKING*/

/* OOTB */
_cls_config.iframesAutoInject=true;
_cls_config.recordMouseMoves=true; 
_cls_config.recordScrolls=true;
_cls_config.recordHovers=true;
_cls_config.clientAttributesEnabled=true;
_cls_config.clientAttributeMaxLength=500;
_cls_config.collectStruggles=true;
_cls_config.recordAnimation=true;
_cls_config.autoInjectGlassvox=true;
_cls_config.iframesAutoInjectGlassvox=true;
/* END OF OOTB */

/*BEGIN EXTRA*/

//00060569
_cls_config.interceptThirdPartyAttributes=false;

/* Capturing shadow DOM elements */
_cls_config.recordShadowDom=  true; /* Added from original */
_cls_config.enableAdoptedCss=true;
//_cls_config.domForceIEMutationEventsHandler=true;

//00061753
_cls_config.recordNonNativeShadowAsElementContainer=true;


// 00054045, 00055833, 00058010, 00058283, 00058282, 00058777
_cls_config.ajaxResponseBodyMaxLength=-1;

//00055596
_cls_config.ajaxRequestBodyMaxLength = 25000;



/*END EXTRA*/

/* BI Additions */
/* Enable Page Performance (Waterfall) */
_cls_config.resourceTimingRecordEnabled=true;
_cls_config.resourceTimingRecordEnabledByChance=0.05;

/* Enable Core Web Vitals */
_cls_config.webVitalsRecordEnabled=true;

/* Enable Scroll Depth for Interaction Maps */
_cls_config.recordScrollReach=true;

/* Enable Form Tracking on Interaction Maps */
_cls_config.domFormAnalysisReporting=true;
_cls_config.domFormValidationTracking=true;
_cls_config.domIncludeCSSSelector=true;

/* Enable Window Properties for Page Names */
_cls_config.pageAttributesEnabled = false;
/* End BI Additions */

/*Capturing CSS */
_cls_config.domPreciseStyleSheetCloning=true;
_cls_config.domRecordEnabled=true;
_cls_config.domRecordEnabledByChance=1;
_cls_config.domRecordCssRule=true;
_cls_config.domRecordCssProps=true;
_cls_config.resourceRecordCssOnly=false;
_cls_config.resourcesRecordEnabled=true;
_cls_config.resourcesRecordCount=5;
_cls_config.resourcesRecordChance=1; 
_cls_config.resourcesRecordAllowCors=true;
/*End Capturing CSS */
/* carry over from orginal detectors */

_cls_config.optimizelyCheckOnSegmentLoad= true;
_cls_config.enableOptimizelyIntegration= true;
_cls_config.passTabIdViaWinName= true;
_cls_config.resourceRecordCssOnly= false;
_cls_config.domTamperingDetectionEnabled=false;

_cls_config.recordClipboardContent= false;
_cls_config.reportURI="https://report.bellcanada.glassboxdigital.io/reporting/3ec3779b-f940-447a-9916-538599ffbc3e/cls_report";

//55409 00060563
_cls_config.interceptAdobeSdkVariables=false;
_cls_config.captureGlobalObjects=['dtOmni'];
_cls_config.captureGlobalObjectsOnSegmentChange=true;
_cls_config.captureDataLayerArrayPushes=true;
_cls_config.dataLayerArrayName="dtOmni";
_cls_config.dataLayerPath="dtOmni";

//00055722 00059904
_cls_config.waitForSegmentRender=10000;

//00057372
var myURL = [
'/Registration'
]; 

for (let i = 0; i < myURL.length; i++) {
    if (document.location.href.includes(myURL[i])) {
        _cls_config.ccAutoMaskMode="relaxed";
        break;
    } else {
        _cls_config.ccAutoMaskMode="default";
    }
}

//00058232
//_cls_config.struggleCaptureBlankPageTargetsSelector=['body > main',"#mainContent","#container"];

//60108
_cls_config.struggleDeadClickInterval = 500;

//00071072
//_cls_config.interceptABTesting = true;
//_cls_config.interceptAdobeABEvent = true;
//_cls_config.abTestingGlobalObject = 'ttMeta';


/* END Configuration */
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath="https://cdn.gbqofs.com/bellcanada/detector/p/";
_cls_config.domPath=_cls_config.detectorPath;