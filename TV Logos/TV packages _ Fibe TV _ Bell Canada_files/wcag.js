(function (window, document, $) {
    "use strict";
    //WCAG plugin.
    //This insures that the focus outlines are only visible when
    //explictly required, and hidden at all times otherwise.

    var styleWCAG = $('<style>*:focus,a:focus{outline: none;}.wcag *:focus,.wcag a:focus{outline: thin dotted #00549a;outline-color: -webkit-focus-ring-color;outline-offset: -2px;}</style>');

    $.fn["wcag"] = function () {
        //Make sure we only have one copy running at all times
        if (window["$wcag"]) return;
        var _isActive = false,
            _activeClass = "wcag",
            _body = $("body"),
            _isTabbing,
            _content = $("#maincontent"),
            _trigger = function (e) {

                //Filter tab presses and activate key navigation mode
                if (!_isActive && e["keyCode"] && e.keyCode === 9) {
                    _isTabbing = $("body.is_tabbing");
                    _isActive = true;
                    if (_isTabbing.length == 0) {
                        _body.addClass(_activeClass);
                        //_content.focus();
                        return false;
                    }
                } else return true;
            }, _clear = function (e) {
                //Deactivate key navigation mode
                if (_isActive) {
                    _isTabbing = $("body.is_tabbing");
                    _isActive = false
                    if (_isTabbing.length == 0) {
                        _body.removeClass(_activeClass);
                    }
                } else return true;
            };
        $(window)
            .keydown(_trigger)
            .click(_clear);

        $('html > head').append(styleWCAG);

        window["$wcag"] = true;
    };

    //Initialize the plugin
    $(document).ready(function () {
        $(document).wcag();
    });

})(window, document, $);