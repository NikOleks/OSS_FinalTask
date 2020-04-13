define([
        'jquery',
        'mage/translate'
    ],
    function ($) {
        'use strict';

        function collapseForm(){
            $(this).prev().hide();
            $(this).remove();
            return false;
        }

        function createCollapseBtn(form) {
            $("<a href='#' class='link collapse-form-js'></a>").insertAfter($(form));
            var collapseBtn = $(".collapse-form-js");
            $(collapseBtn).text($.mage.__("Hide form"));
            $(collapseBtn).on('click', collapseForm);
        }

        return function (config, element) {
            var btn = $(element);
            btn.on('click', function () {
                var form = $("#review-form");
                if ($(form).css("display") === "none") {
                    $(form).show();
                    createCollapseBtn(form);
                }
            });
        };
    });
