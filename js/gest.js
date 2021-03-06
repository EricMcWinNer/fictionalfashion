$(document).ready(function(){
    var initialValue = 0, currentValue;
    var percentageIncrease = setInterval(function(){
        var percentage = Math.floor(Math.random() * 100);
        currentValue = percentage;
        incrementPercent(1000, initialValue, currentValue);
        $('p').html(percentage + "%");

        $('.radialProgress').attr('dataProgressPercent', percentage);
        initialValue = currentValue;
    }, 2000);
    function incrementPercent(transitionDuration, initialValue, finalValue){
        var difference = Math.abs(finalValue - initialValue);
        var transit = Math.floor(transitionDuration / difference);
        var interval = setInterval(function(){
            if(finalValue > initialValue){
                initialValue += 1;
                $('p').html(initialValue + "%");
                if(initialValue >= finalValue){
                    clearInterval(interval);
                }
            }
            else{
                initialValue -= 1;
                $('p').html(initialValue + "%");
                if(initialValue <= finalValue){
                    clearInterval(interval);
                }
            }
        }, transit);
    }

});