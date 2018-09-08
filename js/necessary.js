var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;
$(document).ready(function ()
{
    //Safari fix
    $('container').outerWidth($(window).width() - 50);
    $(window).resize(function ()
    {
        $('container').outerWidth($(window).width() - 50);
        $('.fullScreen').outerHeight($(window).height());
        if ($(window).height() < 350)
        {
            if ($('#hero').length)
            {
                $('#hero').outerHeight($(window).height() + (50 * vh));
            }
        }
        vh = window.innerHeight / 100;
        vw = window.innerWidth / 100;
    });

    $('.eModal').click(function ( event )
    {
        var that = $(this);
        if ($(event.target).hasClass('content') || $(event.target).parents().hasClass('content') || $(event.target).hasClass('controls') || $(event.target).parents().hasClass('controls'))
        {

        }
        else {
            $(this).removeClass('fadeIn');
            setTimeout(function ()
            {
                that.removeClass('view');
            }, 1000);
        }
    });

});
