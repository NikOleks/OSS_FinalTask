define([
        'jquery'
    ],
    function ($) {
        'use strict';

        function collapseMore(event) {
            var toggleMore = $(this).parent().find('.more-js');
            event.data.text.css('height', event.data.height);
            $(this).hide();
            $(toggleMore).show();
            return false;
        }

        function readMore(event) {
            var toggleCollapse = $(this).parent().find('.collapse-js');
            event.data.text.css('height', '100%');
            $(this).hide();
            $(toggleCollapse).show();
            return false;
        }

        return function (config, element) {
            var reviewItem = $(element),
                height = +config.height;
            var paragraphs = $('.review-text-js', reviewItem);
            $(paragraphs).each(function (i, element) {
                if($(element).height() > height){
                    $(element).css({'overflow': 'hidden',
                        'height': height});
                    var toggleMore = $(element).parent().find('.more-js'),
                        toggleCollapse = $(element).parent().find('.collapse-js');
                    $(toggleMore).on('click',{'text' : $(element)}, readMore);
                    $(toggleCollapse).on('click',{'height' : height, 'text' : $(element)}, collapseMore);
                    $(toggleMore).show();
                }
            });
        };
    });
