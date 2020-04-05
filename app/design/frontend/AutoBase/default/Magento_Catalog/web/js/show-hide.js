define([
        'jquery',
        'mage/translate'
    ],
    function ($) {
        'use strict';

        return function (config, element) {

            var showHideToggle = $(element),
                itemsShown = +config.itemsShown + 1,
                childElement = config.childElement,
                elementText = config.toggleText,
                activeElementText= config.activeToggleText;
            showHideToggle.html($.mage.__(elementText));
            console.log(config);
            showHideToggle.click(function(){
                showHideToggle.prev().children(childElement + ':nth-child(n+' + itemsShown + ')').slideToggle('');
                showHideToggle.toggleClass('active-js');
                if(showHideToggle.hasClass('active-js')){
                    showHideToggle.html($.mage.__(activeElementText));
                } else {
                    showHideToggle.html($.mage.__(elementText));
                }
                return false;
            });
        };
    });
