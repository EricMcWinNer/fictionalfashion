<?php
/**
 * Created by PhpStorm.
 * User: Eric McWinNEr
 * Date: 2/2/2018
 * Time: 6:33 PM
 */

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Radial Progress Indicator Test</title>
        <link href="css/gest.min.css" type="text/css" rel="stylesheet"/>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/gest.min.js"></script>
    </head>
    <body>
        <div class="radialProgress">
            <div class="circle">
                <div class="mask full">
                    <div class="fill"></div>
                </div>
                <div class="mask half">
                    <div class="fill"></div>
                    <div class="fill fix"></div>
                </div>
                <div id="carouselControl"></div>
                <p></p>
            </div>
        </div>

    </body>
</html>
