<?php
/**
 * Created by PhpStorm.
 * User: Eric McWinNEr
 * Date: 9/5/2018
 * Time: 1:56 AM
 */

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Gallery | Fictional Fashion</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,800,900" rel="stylesheet">
        <!--<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700,800,900" rel="stylesheet">-->
        <link rel="stylesheet" href="css/bootstrap.min.min.css">
        <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/styles.min.css">
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/utilities.min.js"></script>
        <script src="js/necessary.min.js"></script>
        <script src="js/script.js"></script>
    </head>
    <body>
        <div id="fullScreen" class="gallery slideShow" data-delay="6s" data-transition-duration="2s">
            <?php include "partitions/navigation.php"; ?>
            <div class="text-center positioned">
                <h1 class="monster-bold">our gallery</h1>
                <p class="lead segoe">Our latest shots are here to be seen</p>
            </div>
            <div class="backgroundSlide">
                <div class="background">
                    <img src="assets/img/aboutCollage/4.jpg"/>
                </div>
                <div class="background">
                    <img src="assets/img/aboutCollage/14.jpg"/>
                </div>
                <div class="background">
                    <img src="assets/img/aboutCollage/11.jpg"/>
                </div>
                <div class="background">
                    <img src="assets/img/aboutCollage/6.jpg"/>
                </div>
            </div>
        </div>
        <div class="fullWidth darkBackground">
            <div class="galleryContainer fullWidth">
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/4.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/1.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/7.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/10.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/13.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/8.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>

                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/2.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/11.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/15.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>

                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/11.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/16.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
                <div class="galleryCard">
                    <img src="assets/img/aboutCollage/9.jpg" alt="Picture taken in Somalia">
                    <div class="description">
                        <div class="title">
                            Photo Shoot in Somalia
                        </div>
                        <div class="subTitle">
                            17-04-18
                        </div>
                    </div>
                </div>
            </div>
            <div class="fullWidth marginTop XXL text-center">
                <a href="#" id="loadMore" class="eButton noUnderline purple">Load More</a>
            </div>
        </div>
        <div id="imageModal" class="eModal">
            <div class="content imageContent text-center noPadding">

                <p class="caption">Please wait while your message sends...</p>
            </div>
            <div id="controls" class="controls">
                <div id="cancelButton">
                    Close
                </div>
                <div id="prevButton">
                    Prev
                </div>
                <div id="nextButton">
                    Next
                </div>
            </div>
        </div>
        <?php include 'partitions/footer.php'; ?>
        <script src="js/gallery.min.js"></script>
        <script>
            $('.navigation').find('li').each(function ()
            {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
            }).eq(2).addClass('selected');
        </script>
    </body>
</html>
