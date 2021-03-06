var carouselItems = [];
var index;

(function ()
{
    function loadImage ( index )
    {
        $('#imageModal').find('.imageContent').html("");
        var caption = $('.galleryCard').eq(index).find('.title').html();
        $('#imageModal').find('.imageContent').append('<img class="fullWidth" src="' + carouselItems[ index ] + '" alt="' + caption + '">')
            .append('<div class="caption">' + caption + '</div>');
        var carouselImage = $('#imageModal').find('img');
        var naturalHeight = carouselImage.get(0).naturalHeight;
        var naturalWidth = carouselImage.get(0).naturalWidth;
        var height = carouselImage.outerHeight();
        var width = carouselImage.outerWidth();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var aspectRatio = naturalWidth / naturalHeight;
        //Landscape oriented devices
        if (windowHeight < windowWidth)
        {
            carouselImage.removeClass('fullWidth').addClass('fullHeightPercent');
            if (carouselImage.outerHeight() > (95 * vh))
            {
                $('#imageModal').find('.content').outerWidth((80 * vw));
                carouselImage.removeClass('fullHeightPercent').addClass('fullWidth');
            }
        }
        //Portrait oriented devices
        else {
            carouselImage.removeClass('fullHeightPercent').addClass('fullWidth');
        }
        $('#imageModal').find('.content').outerWidth((95 * vh) * aspectRatio);
    }

    window.onload = function ()
    {
        $('.galleryCard').each(function ()
        {
            carouselItems.push($(this).find('img').attr('src'));

        });
        $('.galleryCard').click(function ()
        {
            index = $(this).index();
            loadImage(index);
            $('#imageModal').addClass('fadeIn view');
        });

        $('#cancelButton').click(function ( event )
        {
            event.preventDefault();
            $('#imageModal').removeClass('fadeIn view');
        });

        $('#nextButton').click(function ( event )
        {
            event.preventDefault();
            $('#imageModal').find('.content').css({'opacity': 0});
            setTimeout(function ()
            {
                index += 1;
                if (index >= carouselItems.length)
                    index = 0;
                loadImage(index);
                $('#imageModal').find('.content').css({'opacity': 1});
            }, 1005);
        });

        $('#prevButton').click(function ( event )
        {
            event.preventDefault();
            $('#imageModal').find('.content').css({'opacity': 0});
            setTimeout(function ()
            {
                index -= 1;
                if (index < 0)
                    index = carouselItems.length - 1;
                loadImage(index);
                $('#imageModal').find('.content').css({'opacity': 1});
            }, 1005);
        })

    };

})();