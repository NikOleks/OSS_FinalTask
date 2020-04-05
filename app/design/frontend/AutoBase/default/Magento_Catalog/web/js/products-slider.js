define([
        'jquery',
        'owlCarousel',
    ],
    function ($) {
        'use strict';

        return function (config, element) {
            console.log("in carousel");
            var target = $(element);
            console.log(element + " - " + target);
            target.addClass('owl-carousel');
            target.owlCarousel({
                margin: 0,
                nav: true,
                items: 5,
                responsiveClass:true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    1024: {
                        items: 5,
                    }
                }
            });
            var itemActive = target.find('.owl-item.active');
            //$(itemActive[0]).children('.product-item-info').css("padding-right", "24px");
            //itemActive[1].children('.product-item-info').css({"padding-left": "6px", "padding-right": "18px"});
            //itemActive[2].children('.product-item-info').css("padding", "12px");
            //itemActive[3].children('.product-item-info').css({"padding-left": "18px", "padding-right": "6px"});
            //itemActive[4].children('.product-item-info').css("padding-left", "24px");
            console.log($(itemActive[0]));
            console.log("out carousel");
        };
    });
