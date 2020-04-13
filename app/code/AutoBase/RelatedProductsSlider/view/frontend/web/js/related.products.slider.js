define([
        'jquery',
        'owlCarousel',
    ],
    function ($) {
        'use strict';

        function init() {
            var $itemsActive = $('.owl-item.active', '#related-products').find('.product-item-info');
            $itemsActive.each(function (i, item) {
                $(item).css({
                    "padding-right" : 6 * ($itemsActive.length - i) - 6,
                    "padding-left" : 6 * i
                });
            });
        }

        function draw(event) {
            init(event.data);
        }

        return function (config, element) {
            var $target = $(element);
            $target.addClass('owl-carousel');
            $target.owlCarousel({
                margin: 0,
                nav: true,
                dots: false,
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
            init();
            $(':button', '#related-products').on('click', draw);
        };
    });
