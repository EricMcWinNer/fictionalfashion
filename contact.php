<?php
/**
 * Created by PhpStorm.
 * User: Eric McWinNEr
 * Date: 9/3/2018
 * Time: 3:46 AM
 */

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Contact | Fictional Fashion</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,800,900" rel="stylesheet">
        <!--<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700,800,900" rel="stylesheet">-->
        <link rel="stylesheet" href="css/bootstrap.min.min.css">
        <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/styles.min.css">
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/script.js"></script>
        <style>
            .poppins {
                font-family: "Poppins", sans-serif
            }
        </style>
    </head>
    <body>
        <div id="halfScreen" class="contactScreen">
            <?php include 'partitions/navigation.php'; ?>
            <div class="text-center about">
                <h1 class="monster-bold">contact us</h1>
                <p class="lead segoe">WANT TO REACH OUT TO US? IT'S REALLY EASY...</p>
            </div>
        </div>
        <div class="fullWidth marginTop XL">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.798147063326!2d8.338372548221896!3d4.949549476260621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf5f22765a37544c!2sMr+Fans!5e0!3m2!1sen!2sng!4v1469405594979" width="100%" id="contactMap" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="fullWidth marginTop XL">
            <div class="container">
                <div class="col-md-12">
                    <div class="fullWidth">
                        <div class="row">
                            <div class="col-md-4 contactCol">
                                <div class="leftRight"><span><i class="fa fa-home fa-fw"></i></span></div>
                                <div class="contactText">Calabar, Cross River</div>
                                <div class="subText">Nigeria.</div>
                            </div>
                            <div class="col-md-4 contactCol">
                                <div class="leftRight"><span><i class="fa fa-phone fa-fw"></i></span></div>
                                <div class="contactText">+234-(0)-8012345678</div>
                                <div class="subText">Mon to Sat 8am to 9pm</div>
                            </div>
                            <div class="col-md-4 contactCol">
                                <div class="leftRight"><span><i class="fa fa-envelope fa-fw"></i></span></div>
                                <div class="contactText">contact@ericmcwinner.com</div>
                                <div class="subText">We'll respond within 24 hours!</div>
                            </div>
                        </div>
                        <hr />
                        <h3 id="messageH3" class="poppins marginTop XL">Drop a message, we'll get back to you shortly...</h3>
                        <form action="" id="contactForm" method="">
                            <div class="fullWidth marginTop">
                                <input type="text" name="fullName" placeholder="Full Name">
                            </div>
                            <div class="fullWidth">
                                <input type="email" name="emailAddress" placeholder="Email Address">
                            </div>
                            <div class="fullWidth">
                                <input type="text" name="phoneNumber" placeholder="Phone Number">
                            </div>
                            <div class="fullWidth">
                                <input type="text" name="subject" placeholder="Subject">
                            </div>
                            <div class="fullWidth textarea">
                                <textarea name="message" placeholder="Type a message"></textarea>
                            </div>
                            <button type="submit" id="submitButton"><i class="fa fa-envelope-"></i> Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="marginTop XL"></div>
        <?php include 'partitions/footer.php'; ?>
        <script>
            $('.navigation').find('li').each(function ()
            {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
            }).eq(3).addClass('selected');

        </script>
    </body>
</html>
