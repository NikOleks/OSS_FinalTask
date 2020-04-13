define([
        'jquery'
    ],
    function ($) {
        'use strict';

        return function (config, element) {
            var showHideToggle = $(element),
                positionStart = +config.position + 1,
                childElement = config.childElement,
                action = config.effect;
            showHideToggle.on('click', function () {
                var parent = $(this).parent(),
                    itemsHideShow = $(parent).find('.drop-out-js')
                        .children(childElement + ':nth-child(n+' + positionStart + ')');
                if( action === 'show' && itemsHideShow.length !== 0 ){
                    $(itemsHideShow).slideDown();
                    $(this).hide();
                    $(parent).find('.hide-js').show();
                }
                if ( action === 'hide' && itemsHideShow.length !== 0 ){
                    $(itemsHideShow).slideUp();
                    $(this).hide();
                    $(parent).find('.show-js').show();
                }
                return false;
            });
        };
    });
