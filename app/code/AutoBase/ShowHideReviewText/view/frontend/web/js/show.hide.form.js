define([
        'jquery'
    ],
    function ($) {
        'use strict';

        return function (config, element) {
            var btn = $(element);
            btn.on('click', function () {
                var form = $("#review-form");
                if ($(form).css("display") === "none") {
                    $(form).show();
                }
            });
        };
    });
