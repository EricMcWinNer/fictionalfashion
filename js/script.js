function ericSweetView(selector) {
    var itemLength = selector.find('.ericItem').length;
    var number = itemLength - 1;
    selector.find('.ericItem').hide();
    selector.find('.ericItem').eq(0).addClass('selected').show();
    selector.find('.ericItem').eq(1).addClass('right').show();
    selector.find('.ericItem').eq(number).addClass('left').show();
    var rightFlag = true;
    var leftFlag = true;
    selector.find('.ericItem .clickEvent').click(function () {
            if ($(this).parents('.ericItem').hasClass('right')) {
                var rightIndex = $(this).parents('.ericItem').index();
                    if(rightFlag){
                        rightFlag = false;
                        selector.find('.ericItem').each(function () {
                            if (!$(this).hasClass('selected') && !$(this).hasClass('left') && !$(this).hasClass('right'))
                                $(this).removeClass('fromRight').addClass('fromLeft');
                        });
                        if (rightIndex === 0) {
                            selector.find('.ericItem').eq(number - 1).addClass('fromLeft').removeClass('left rotate');
                            selector.find('.ericItem').eq(number).addClass('toLeftFromSelected');
                            setTimeout(function () {
                                selector.find('.ericItem').eq(number - 1).hide();
                            }, 900);
                            setTimeout(function () {
                                selector.find('.ericItem').eq(number).addClass('left').removeClass('selected toLeftFromSelected').addClass('rotate');
                            }, 900);
                        }
                        else if (rightIndex === 1) {
                            selector.find('.ericItem').eq(number).addClass('fromLeft').removeClass('left rotate');
                            selector.find('.ericItem').eq(rightIndex - 1).addClass('toLeftFromSelected');
                            setTimeout(function () {
                                selector.find('.ericItem').eq(number).hide();
                            }, 900);
                            setTimeout(function () {
                                selector.find('.ericItem').eq(rightIndex - 1).addClass('left').removeClass('selected toLeftFromSelected').addClass('rotate');
                            }, 900);
                        }
                        else {
                            selector.find('.ericItem').eq(rightIndex - 2).addClass('fromLeft').removeClass('left rotate');
                            selector.find('.ericItem').eq(rightIndex - 1).addClass('toLeftFromSelected');
                            setTimeout(function () {
                                selector.find('.ericItem').eq(rightIndex - 2).hide();
                            }, 900);
                            setTimeout(function () {
                                selector.find('.ericItem').eq(rightIndex - 1).addClass('left').removeClass('selected toLeftFromSelected').addClass('rotate');
                            }, 900);
                        }
                        selector.find('.ericItem').eq(rightIndex).addClass('toSelectedFromRight').removeClass('right rotate');
                        selector.find('.ericItem').eq(rightIndex === number ? 0 : rightIndex + 1).show().removeClass('fromLeft rotate').addClass('right rotate');
                        setTimeout(function () {
                            selector.find('.ericItem').eq(rightIndex).addClass('selected').removeClass('right toSelectedFromRight');
                            rightFlag = true;
                        }, 900);
                    }
                    else{
                        //Do nothing!
                    }
            }
            else {
                var leftIndex = $(this).parents('.ericItem').index();
                if(leftFlag){
                    leftFlag = false;
                    selector.find('.ericItem').each(function () {
                        if (!$(this).hasClass('selected') && !$(this).hasClass('left') && !$(this).hasClass('right'))
                            $(this).removeClass('fromLeft').addClass('fromRight');
                    });
                    if (leftIndex === number) {
                        selector.find('.ericItem').eq(1).addClass('fromRight').removeClass('right rotate');
                        selector.find('.ericItem').eq(0).addClass('toRightFromSelected');
                        setTimeout(function () {
                            selector.find('.ericItem').eq(1).hide();
                        }, 900);
                        setTimeout(function () {
                            selector.find('.ericItem').eq(0).addClass('right').removeClass('selected toRightFromSelected').addClass('rotate');
                        }, 900);
                    }
                    else {
                        selector.find('.ericItem').eq(leftIndex === number - 1 ? 0 : leftIndex + 2).addClass('fromRight').removeClass('right rotate');
                        selector.find('.ericItem').eq(leftIndex + 1).addClass('toRightFromSelected');
                        setTimeout(function () {
                            selector.find('.ericItem').eq(leftIndex === number - 1 ? 0 : leftIndex + 2).hide();
                        }, 900);
                        setTimeout(function () {
                            selector.find('.ericItem').eq(leftIndex + 1).addClass('right').removeClass('selected toRightFromSelected left').addClass('rotate');
                        }, 900);
                    }
                    selector.find('.ericItem').eq(leftIndex).addClass('toSelectedFromLeft').removeClass('left rotate');
                    selector.find('.ericItem').eq(leftIndex === 0 ? number : leftIndex - 1).show().removeClass('fromRight rotate right').addClass('left rotate');
                    setTimeout(function () {
                        selector.find('.ericItem').eq(leftIndex).addClass('selected').removeClass('left toSelectedFromLeft');
                        leftFlag = true;
                    }, 900);
                }
                else{
                    //Do nothing!
                }
            }
        }
    );
}

function ericCarousel(selector) {
    selector.find('.ericItem').each(function () {
        var background = $(this).attr('data-eric-background');
        var imageRegex = 'url(';
        var gradientRegex = 'linear-gradient(';
        if (background === '' || background === null || background === undefined) {
            return;
        }
        else {
            if (background.indexOf(imageRegex) !== -1) {
                $(this).css({
                    'background-image': background,
                    'background-repeat': 'no-repeat',
                    'background-size': 'cover'
                });
            }
            else if (background.indexOf(gradientRegex) !== -1) {
                $(this).css({
                    'background': background
                });
            }
            else {
                $(this).css({
                    'background': background
                })
            }
        }
    });
    var index = 0;
    var delay = selector.attr('data-eric-transition') || 3500;
    switch (delay.constructor) {
        case String:
            if (delay.substr(delay.length - 2, 2) === 'ms') {
                delay = delay.replace('ms', '');
                delay = parseInt(delay, 10);
            }
            else if (delay.substr(delay.length - 1, 1) === 's') {
                delay = delay.replace('s', '');
                delay = parseInt(delay, 10) * 1000;
            }
            else {
                delay = parseInt(delay, 10);
            }
            break;
        case Number:
            break;
    }
    selector.find('.ericItem').css({'opacity': 0}).hide();
    selector.find('.ericItem').eq(index).addClass('active').show().css({'opacity': 1});
    var number = selector.find('.ericItem').length - 1;
    var period = selector.attr('data-eric-period') || 5000;
    var originalPeriod;
    switch (period.constructor) {
        case String:
            if (period.substr(period.length - 2, 2) === 'ms') {
                period = period.replace('ms', '');
                period = originalPeriod = parseInt(period, 10);
                period += delay;
            }
            else if (period.substr(period.length - 1, 1) === 's') {
                period = period.replace('s', '');
                period = originalPeriod = (parseInt(period, 10)) * 1000;
                period += delay;
            }
            else {
                period = originalPeriod = parseInt(period, 10);
                period += delay;
            }
            break;
        case Number:
            originalPeriod = period;
            period += delay;
            break;
    }

    var periodInterval = period / 100;
    var iterations = 0;
    var currentPercent = 0;
    var decrement = false;
    var beginAgain = false;
    var newStart;
    var carouselClass;

    function carouselWorker() {
        if (newStart === "startOver" && beginAgain === false) {
            iterations = 0;
            currentPercent = 0;
            beginAgain = true;
        }
        iterations++;
        if (decrement === false) {
            currentPercent += 2;
            $('.percentageProgress').attr('data-progress-percent', currentPercent);
            if (currentPercent === 100)
                decrement = true;
        }
        else {
            currentPercent -= 2;
            $('.percentageProgress').attr('data-progress-percent', currentPercent);
            if (currentPercent === 0)
                decrement = false;
        }

        if (iterations % 100 === 0) {
            selector.find('.ericItem').eq(index).animate({'opacity': 0}, 1000);
            if (index >= number) {
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index = 0;
                selector.find('.ericItem').eq(index).show().addClass('active').animate({'opacity': 1}, delay);
                $('#carouselIndicator').find('.currentIndex').html(index + 1);
                carouselClass = Math.floor(((Math.random() * 10) + 1) / 2);
                changeClass(carouselClass);
            }
            else {
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index += 1;
                selector.find('.ericItem').eq(index).addClass('active').show().animate({'opacity': 1}, delay);
                $('#carouselIndicator').find('.currentIndex').html(index + 1);
                carouselClass = Math.floor(((Math.random() * 10)) / 2);
                changeClass(carouselClass);
            }
            if (index % 2 === 1) {
                if ($('#carouselControl').hasClass("right"))
                    $('#carouselControl').removeClass("right");
                $('#carouselControl').addClass("left");
            }
            else {
                if ($('#carouselControl').hasClass("left"))
                    $('#carouselControl').removeClass("left");
                $('#carouselControl').addClass("right");
            }
        }
    }

    var interval = null;

    function intervalManager(state, callback, duration, startOver) {
        if (state === "play") {
            if (startOver === "startOver") {
                newStart = "startOver";
                iterations = 0;
                currentPercent = 0;
                decrement = false;
                interval = setInterval(callback, duration);
            }
            else {
                interval = setInterval(callback, duration);
            }
        }
        else if (state === "stop") {
            clearInterval(interval);
        }
    }

    function changeClass(classNumber) {
        if (classNumber === 0) {
            validateNextContent();
            $('.nextContent').addClass('purple');
        }
        else if (classNumber === 1) {
            validateNextContent();
            $('.nextContent').addClass('yellow');
        }
        else if (classNumber === 2) {
            validateNextContent();
            $('.nextContent').addClass('blue');
        }
        else {
            validateNextContent();
            $('.nextContent').addClass('pink');
        }
    }

    function validateNextContent() {
        if ($('.nextContent').hasClass('yellow'))
            $('.nextContent').removeClass('yellow');
        else if ($('.nextContent').hasClass('blue'))
            $('.nextContent').removeClass('blue');
        else if ($('.nextContent').hasClass('pink'))
            $('.nextContent').removeClass('pink');
        else
            $('.nextContent').removeClass('purple');
        $('.nextContent').addClass('purple');
    }

    intervalManager("play", carouselWorker, periodInterval);
    $('#carouselIndicator').find('.currentIndex').html(1);
    return {
        nexxt: function () {
            intervalManager('stop');
            $('.percentageProgress .mask, .percentageProgress .fill').addClass('retract').parents('.percentageProgress').attr('data-progress-percent', 0);
            $('.percentageProgress .mask, .percentageProgress .fill').removeClass('retract');
            if (index >= number) {
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index = 0;
                selector.find('.ericItem').eq(index).show().addClass('active').animate({'opacity': 1}, delay);
                carouselClass = Math.floor(((Math.random() * 10)) / 2);
                changeClass(carouselClass);
                intervalManager("play", carouselWorker, periodInterval, "startOver");
                $('#carouselIndicator').find('.currentIndex').html(index + 1);
            }
            else {
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index += 1;
                selector.find('.ericItem').eq(index).addClass('active').show().animate({'opacity': 1}, delay);
                carouselClass = Math.floor(((Math.random() * 10)) / 2);
                changeClass(carouselClass);
                intervalManager("play", carouselWorker, periodInterval, "startOver");
                $('#carouselIndicator').find('.currentIndex').html(index + 1);
            }
            if (index % 2 === 1) {
                if ($('#carouselControl').hasClass("right"))
                    $('#carouselControl').removeClass("right");
                $('#carouselControl').addClass("left");
            }
            else {
                if ($('#carouselControl').hasClass("left"))
                    $('#carouselControl').removeClass("left");
                $('#carouselControl').addClass("right");
            }
        },
        previous: function () {
            intervalManager('stop');
            $('.percentageProgress .mask, .percentageProgress .fill').addClass('retract').parents('.percentageProgress').attr('data-progress-percent', 0);
            $('.percentageProgress .mask, .percentageProgress .fill').removeClass('retract');
            if (index === 0) {
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index = number;
                selector.find('.ericItem').eq(index).show().addClass('active').animate({'opacity': 1}, delay);
                carouselClass = Math.floor(((Math.random() * 10)) / 2);
                changeClass(carouselClass);
                intervalManager("play", carouselWorker, periodInterval, "startOver");
                $('#carouselIndicator').find('.currentIndex').html(index + 1);
            }
            else {
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index -= 1;
                selector.find('.ericItem').eq(index).addClass('active').show().animate({'opacity': 1}, delay);
                carouselClass = Math.floor(((Math.random() * 10)) / 2);
                changeClass(carouselClass);
                intervalManager("play", carouselWorker, periodInterval, "startOver");
                $('#carouselIndicator').find('.currentIndex').html(index + 1);
            }
            if (index % 2 === 1) {
                if ($('#carouselControl').hasClass("right"))
                    $('#carouselControl').removeClass("right");
                $('#carouselControl').addClass("left");
            }
            else {
                if ($('#carouselControl').hasClass("left"))
                    $('#carouselControl').removeClass("left");
                $('#carouselControl').addClass("right");
            }
        },
        pauuse: function () {
            intervalManager('stop');
        },
        resume: function () {
            intervalManager("play", carouselWorker, periodInterval);
        },
        restart: function () {
            intervalManager("play", carouselWorker, periodInterval, "startOver");
        },
        totalIndexes: function () {
            return number + 1;
        },
        skipTo: function (indexToSkipTo) {
            if (indexToSkipTo > number || indexToSkipTo < 0) {
                return;
            }
            else {
                intervalManager("stop");
                $('.percentageProgress .mask, .percentageProgress .fill').addClass('retract').parents('.percentageProgress').attr('data-progress-percent', 0);
                $('.percentageProgress .mask, .percentageProgress .fill').removeClass('retract');
                selector.find('.ericItem').eq(index).removeClass('active').css({'opacity': 0}).hide();
                index = indexToSkipTo;
                selector.find('.ericItem').eq(index).show().addClass('active').animate({'opacity': 1}, delay);
                intervalManager("play", carouselWorker, periodInterval, "startOver");
            }
        }
    };
}

function backgroundPicture() {
    $('body').find('.backgroundPicture').each(function () {
        var backgroundArray = $(this).attr('data-background-Picture').split(',');
        if (backgroundArray.length === 1) {
            $(this).css({"background-image": backgroundArray[0]});
        }
        else if (backgroundArray.length === 2) {
            $(this).css({"background-image": backgroundArray[0]});
            $(this).css({"background-position": backgroundArray[1]});
        }
        else if (backgroundArray.length === 3) {
            $(this).css({"background-image": backgroundArray[0]});
            $(this).css({"background-position": backgroundArray[1]});
            $(this).css({"background-attachment": backgroundArray[2]});
        }
        else if (backgroundArray.length === 4) {
            $(this).css({"background-image": backgroundArray[0]});
            $(this).css({"background-position": backgroundArray[1]});
            $(this).css({"background-size": backgroundArray[2]});
            $(this).css({"background-repeat": backgroundArray[3]});
        }
        else if (backgroundArray.length === 5) {
            $(this).css({"background-image": backgroundArray[0]});
            $(this).css({"background-position": backgroundArray[1]});
            $(this).css({"background-attachment": backgroundArray[2]});
            $(this).css({"background-repeat": backgroundArray[3]});
            $(this).css({"background-size": backgroundArray[4]});
        }
    });
}

$(document).ready(function () {
    $('#image_behind_triangle, #image_behind_triangle img, #sewed_triangle').hide();
    var bannerWidth = $('.positioned').outerWidth();
    var aboutWidth = $('.about').outerWidth();
    var vw = $(window).width() / 100;
    var vh = $(window).height() / 100;
    var blogWidth = $('.blogPost').outerWidth();
    var canvasContainerWidth = Math.floor($('.col-md-4.bordered').outerWidth());
    $('#animatedLine').attr('width', canvasContainerWidth + Math.floor(canvasContainerWidth * 0.2)).attr('height', 180).css({
        'border': 'none',
        'top': '-40px'
    });
    var canvasContainerPercent = Math.floor(canvasContainerWidth / 100);
    if($('#sewed_triangle').length > 0){
        if ($('#sewed_triangle').get(0).getContext) {
            var sewed_triangle = $('#sewed_triangle').get(0).getContext('2d');
            sewed_triangle.lineWidth = 1;
            sewed_triangle.strokeStyle = "#402b0b";
            var ex = 55, why = 10;
            sewed_triangle.moveTo(ex, why);
            while (ex < 290) {
                ex += 10;
                if (ex >= 290) {
                    break;
                }
                sewed_triangle.lineTo(ex, why);
                ex += 10;
                if (ex >= 290) {
                    break;
                }
                sewed_triangle.moveTo(ex, why);
                sewed_triangle.stroke();
            }
        }else{
            //Do Nothing
        }
    }
    if($('#animatedLine').length > 0)
    {
        if ($('#animatedLine').get(0).getContext) {
            var canvas = $('#animatedLine').get(0).getContext('2d');
            canvas.lineWidth = 2.5;
            canvas.strokeStyle = "#e9e9e9";
            canvas.beginPath();
            var points = [];
            points.push({x: 0, y: 59});
            points.push({x: 80 * canvasContainerPercent, y: 59});
            points.push({x: 88 * canvasContainerPercent, y: 110});
            points.push({x: 95 * canvasContainerPercent, y: 25});
            points.push({x: 100 * canvasContainerPercent, y: 59});
            points.push({x: 120 * canvasContainerPercent, y: 59});
            var incrementingPoints = [];
            var quotient = 20;
            for (var i = 1; i < points.length; i++) {
                var beginX = points[i - 1].x;
                var endX = points[i].x;
                var beginY = points[i - 1].y;
                var endY = points[i].y;
                var divisorX = Math.abs(endX - beginX);
                var divisorY = Math.abs(endY - beginY);
                for (var j = 0; j < quotient; j++) {
                    var x, y;
                    if (beginX !== endX) {
                        if (beginX < endX) {
                            x = beginX + ((divisorX / quotient) * j);
                        }
                        else {
                            x = beginX - ((divisorX / quotient) * j);
                        }
                    }
                    else {
                        x = endX;
                    }
                    if (beginY !== endY) {
                        if (beginY < endY) {
                            y = beginY + ((divisorY / quotient) * j);
                        }
                        else {
                            y = beginY - ((divisorY / quotient) * j);
                        }
                    }
                    else {
                        y = endY;
                    }
                    incrementingPoints.push({x: x, y: y});
                }
            }
            var frames = 0;
            canvas.moveTo(points[0].x, points[0].y);
            var req;
            if (typeof requestAnimationFrame === "function") {
                function animate() {
                    if (frames < incrementingPoints.length - 1) {
                        req = requestAnimationFrame(animate);

                    }
                    canvas.lineTo(incrementingPoints[frames].x, incrementingPoints[frames].y);
                    canvas.stroke();
                    frames++;
                }

                req = requestAnimationFrame(animate);
                cancelAnimationFrame(req);

                var requestAnimateLine = setInterval(function () {
                    if ($('.nextContent').hasClass('darken')) {
                        animate();
                        clearInterval(requestAnimateLine);
                    }
                }, 700);
            }
            else {
                function intervalAnimate() {
                    var growingLineInterval = setInterval(function () {
                        if (frames >= incrementingPoints.length - 1) {
                            clearInterval(growingLineInterval);
                        }
                        canvas.lineTo(incrementingPoints[frames].x, incrementingPoints[frames].y);
                        canvas.stroke();
                        frames++;
                    }, 20);
                }

                var animateLine = setInterval(function () {
                    if ($('.nextContent').hasClass('darken')) {
                        intervalAnimate();
                        clearInterval(animateLine);
                    }
                }, 700);

            }

        }
        else {
            //Do Nothing
        }
    }
    $('.blogPost').outerHeight(blogWidth * 1.3);
    $('.positioned').css({
        'left': ($(window).width() / 2) + vw - (bannerWidth / 2),
        'top': (80 * vh) - $('.positioned').outerHeight()
    });
    $('.about').css({
        'left': ($(window).width() / 2) + vw - (aboutWidth / 2),
        'bottom': '15%'
    });

    $('div.ericItem .descriptiveText').each(function () {
        var percent = $(this).parent().outerHeight() / 100;
        var height = $(this).outerHeight() / 2;
        $(this).css({'top': (75 * percent) - height});
        var width = $(this).siblings('img.borderRadii').outerWidth();
        $(this).outerWidth(width);
    });
    $('.image .overlay').each(function () {
        var height = $(this).siblings('img.borderRadii').outerHeight();
        var width = $(this).siblings('img.borderRadii').outerWidth();
        $(this).outerHeight(height).outerWidth(width);
        var paddingLeft = parseInt($(this).parents('.image').css('padding-left'), 10) || 15;
        var percentWidth = $(this).parents('.image').outerWidth() / 100;
        $(this).css('left', paddingLeft + (5 * percentWidth) - 1);
    });
    var videoHeight = $(window).width() / 1.745;
    $('#fullScreen').outerHeight(videoHeight);
    $('.inlineBackground').each(function () {
        var attr = $(this).attr('eric-background');
        $(this).css({
            'background-image': attr,
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
        });
    });
    $('.triangleBackground').each(function () {
        var imageHeight = $(this).outerHeight();
        $(this).siblings('.triangle').css('border-top-width', imageHeight);
        $(this).parents('.skewed').outerHeight(imageHeight);
    });
    $('.nextContent').outerHeight($('.nextContent').outerHeight() + (25 * vh));
    var readMoreCount = 0;
    $('a.readMore').click(function (event) {
        event.preventDefault();
        readMoreCount += 1;
        var orijinalHeight = $(this).siblings('p').get(0).scrollHeight;
        if (readMoreCount % 2 === 1) {
            $(this).siblings('p').outerHeight(orijinalHeight).addClass('readable');
            $(this).html("Read less");
        }
        else {
            $(this).siblings('p').outerHeight(90).removeClass('readable');
            $(this).html("Read more");
        }

    });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var navigationOffset = $('.navigation.largeView').length > 0 ? $('.navigation.largeView').offset().top : 0;
        var testOffset = $('.skewed .triangle.down-right').length > 0 ? $('.skewed .triangle.down-right').offset().top : 0;
        var nextOffset = $('.nextContent').length > 0 ? $('.nextContent').offset().top : 0;
        var distance = navigationOffset - scrollTop;
        var fixed01Offset = $('#fixed01').length > 0 ? $('#fixed01').offset().top : 0;
        var fixed02Offset = $('#fixed02').length > 0 ? $('#fixed02').offset().top : 0;
        var threeColumns1Offset = $('#collage').length > 0 ? $('#collage').offset().top  : 0;
        var featuredProductsOffset = $('#featuredProducts').length > 0 ? $('#featuredProducts').offset().top : 0;
        if (scrollTop >= featuredProductsOffset) {
            $('.ericItem.left, .ericItem.right').addClass('rotate');
        }
        if (scrollTop >= fixed01Offset - 80) {
            $('#fixed01 .fixed01').css({'width': (75 * vw) - 30, 'left': 0});
            $('#fixed01 .fix01').addClass('fixed fixed01');
        }
        else {
            $('#fixed01 .fix01').removeClass('fixed fixed01');
        }
        if (scrollTop >= fixed02Offset - 80 && scrollTop < threeColumns1Offset - (100 * vh)) {
            $('#fixed02 .fixed01').css({'width': (75 * vw) - 30, 'right': 0, 'top': 80});
            $('#fixed02 .fix01').addClass('fixed fixed01');
            $('#fixed01 .fix01').show();
        }
        else if (scrollTop <= fixed02Offset - 80) {
            $('#fixed02 .fix01').removeClass('fixed fixed01');
        }
        else {
            $('#fixed01 .fix01').hide();
            $('#fixed02 .fixed01').css({top: 80 + ((threeColumns1Offset - (100 * vh)) - scrollTop)});
        }
        if (distance < 1) {
            $('.navigation.largeView').toggleClass('scrolled', scrollTop > 80);
        }
        if (scrollTop >= testOffset - (50 * vh) && scrollTop <= testOffset - (8 * vh)) {
            var alphaIncrement = (scrollTop + (50 * vh) - testOffset);
            var maxValue = 42 * vh;
            var alphaFactor = 90 / (maxValue / 2);
            $('.skewed .triangle.down-right').css({
                'border-right-width': 90 - (alphaIncrement * alphaFactor),
                'border-right-color': '#e9e9e9',
                'border-left-width': '90px',
                'border-left-color': 'transparent',
                'border-top-color': 'transparent'
            });
            if (scrollTop >= testOffset - (29 * vh)) {
                $('.skewed .triangle.down-right').css({
                    'border-right-width': '0px',
                    'border-top-color': '#e9e9e9',
                    'border-right-color': 'transparent',
                    'border-left-width': (alphaIncrement * alphaFactor) / 2
                });
            }
        }
        if (scrollTop >= nextOffset - ($('.navigation.scrolled').outerHeight() + (25 * vh))) {
            $('.nextContent').addClass('darken');
            setTimeout(function () {
                $('.horizontal_bar').addClass('lengthen');
                $('.fadeInOnScroll').addClass('fadeIn');
                $('#image_behind_triangle, #image_behind_triangle img, canvas#sewed_triangle').fadeIn(800);
                $('.nextContent').find('.ericItem').css({'visibility': 'visible'});
            }, 400);
        } else if (scrollTop <= nextOffset - ($('.navigation.scrolled').outerHeight() + (25 * vh)) - 1) {
            $('.nextContent').removeClass('darken');
            setTimeout(function () {
                $('.horizontal_bar').removeClass('lengthen');
                $('.fadeInOnScroll').removeClass('fadeIn');
                $('#image_behind_triangle, #image_behind_triangle img, canvas#sewed_triangle').fadeOut(800);
                $('.nextContent').find('.ericItem').css({'visibility': "hidden"});
            }, 400);

        }
    });


});

$(window).bind('load', function () {
    //Functions for the next and previous buttons of the carousel controller.
    var carr = ericCarousel($('.ericCarousel'));
    $('#carouselControl').find('.next').click(function () {
        carr.nexxt();
    });
    $('#carouselControl').find('.previous').click(function () {
        carr.previous();
    });
    //Pauses the carousel on hover.
    $('.ericItem').hover(function () {
        carr.pauuse();
    }, function () {
        carr.resume();
    });
    //Put the current index on the carousel indicator
    $('#carouselIndicator').find('.totalIndexes').html(carr.totalIndexes());
    backgroundPicture();
    $('[data-toggle="tooltip"]').tooltip();

    //Product carousel
    ericSweetView($('#featuredCarousel'));
});