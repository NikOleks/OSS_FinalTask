define([
        'jquery'
    ],
    function ($) {
        'use strict';

        function convertPrice(text) {
            var position = text.indexOf(".");
            return (position !== -1) ? text.slice(0, position) : text;
        }

        function getPrice(text) {
            return text.replace("грн", "");
        }

        return function () {
            var prices = $('.price-box .price');
            $(prices).each(function (i, price) {
                var text = convertPrice($(price).text());
                if (text.includes("грн")) {
                    text = getPrice(text);
                }
                $(price).empty();
                $(price).append(text + " " + "<span class='currency'>грн</span>");
            });
        }();
    }
);
