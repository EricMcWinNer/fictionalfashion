<?php
/**
 * Created by PhpStorm.
 * User: Eric McWinNEr
 * Date: 1/9/2018
 * Time: 1:44 PM
 */

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Home | Fictional Fashion</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900" rel="stylesheet">
        <!--<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700,800,900" rel="stylesheet">-->
        <link rel="stylesheet" href="css/bootstrap.min.min.css">
        <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/styles.min.css">
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/script.min.js"></script>
    </head>
    <body>
        <div id="fullScreen">
            <video id="backgroundVideo" loop autoplay muted>
                <source src="assets/vid/Background_Video.mp4" type="video/mp4">
            </video>
            <?php include 'partitions/navigation.php'; ?>
            <div class="text-center positioned">
                <h1 class="monster-bold">fictional fashion</h1>
                <p class="lead segoe">A FASHION COMPANY</p>
            </div>
        </div>
        <div class="full-container noPadding">
            <div class="row">
                <div class="col-md-3 blogPost">
                    <div class="background inlineBackground" eric-background="url('assets/img/img4(copy).jpg')">

                    </div>
                    <div class="overlay">
                        <h1 class="text-center">A Journey into the Life of Anna Selezneva...</h1>
                        <div class="date"><p><i class="fa fa-calendar"></i> Jan 11 2018</p></div>
                    </div>
                </div>
                <div class="col-md-3 blogPost">
                    <div class="background inlineBackground" eric-background="url('assets/img/img7(copy).jpg')">

                    </div>
                    <div class="overlay">
                        <h1 class="text-center">Using the right brush for the right occasion!</h1>
                        <div class="date"><p><i class="fa fa-calendar"></i> Jan 31 2018</p></div>
                    </div>
                </div>
                <div class="col-md-3 blogPost">
                    <div class="background inlineBackground" eric-background="url('assets/img/img6(copy).jpg')">

                    </div>
                    <div class="overlay">
                        <h1 class="text-center">Exclusive Interview with Scarlett Johansson.</h1>
                        <div class="date"><p><i class="fa fa-calendar"></i> Feb 14 2018</p></div>
                    </div>
                </div>
                <div class="col-md-3 blogPost">
                    <div class="background inlineBackground" eric-background="url('assets/img/img8(copy).jpg">

                    </div>
                    <div class="overlay">
                        <h1 class="text-center">Going green has never looked better...</h1>
                        <div class="date"><p><i class="fa fa-calendar"></i> Mar 09 2018</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="testcontent">
            <div class="full-container visible">
                <div class="row">
                    <div class="col-md-8 skewed">
                        <img src="assets/img/tests/test2.jpg" class="triangleBackground" alt="Scarlett Johansson" width="100%" height="100%">
                        <div class="triangle down-left"></div>
                        <div class="triangle down-right"></div>
                    </div>
                    <div class="col-md-4">
                        <h1 class="monster XL">Beauty Meets</h1>
                        <p class="monster title">Fashion</p>
                        <p>
                            Whether you're a model or a person looking to get some good good beauty; down here at Fictional Fashion we supply your needs perfectly. We give you an all round, gorgeous look that transcends just awesome clothes. We transmogrify you and give you an aphrodite look.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--This div will have about 6 color schemes that would be changed with javascript after each carousel cycle -->
        <div class="nextContent purple">
            <div class="triangle down large"></div>
            <canvas id="sewed_triangle"></canvas>
            <div id="image_behind_triangle"><img src="assets/img/tests/test17.jpg"
                        alt="Background Image behind triangle"/></div>
            <div class="row fadeInOnScroll row1">
                <div class="col-md-4 image">
                    <div class="ericCarousel" data-eric-transition="4000ms" data-eric-period="11500ms">
                        <div class="ericItem">
                            <img src="assets/img/tests/test9.jpg" alt="We took Pictures of Camila Cabello"
                                    class="borderRadii"/>
                            <div class="overlay"></div>
                            <div class="descriptiveText">
                                <p class="lead descriptiveHeader">Natural Photo shoot</p>
                                <p>You love nature? We do too, and we took some pictures with the perfect model so dear to our hearts; Mother Nature. You can take a look at all the awesome pictures we took there here.</p>
                            </div>
                        </div>
                        <div class="ericItem">
                            <img src="assets/img/tests/test6.jpg" alt="We took Pictures of Camila Cabello"
                                    class="borderRadii"/>
                            <div class="overlay"></div>
                            <div class="descriptiveText">
                                <p class="lead descriptiveHeader">Exclusive Photo shoot in Germany</p>
                                <p>We had fun taking awesome photo shoots for some of the top fashion magazines in Germany. We got to explore our fashion line and our best fashion photographers.</p>
                            </div>
                        </div>
                        <div class="ericItem">
                            <img src="assets/img/tests/test7.jpg" alt="We took Pictures of Camila Cabello"
                                    class="borderRadii"/>
                            <div class="overlay"></div>
                            <div class="descriptiveText">
                                <p class="lead descriptiveHeader">Vanity Magazine Photo Shoot</p>
                                <p>Vanity magazine contacted our company to take their latest photo shoots. These are our models having fun and feeling cool. You can see the full pictures here.</p>
                            </div>
                        </div>
                        <div class="ericItem">
                            <img src="assets/img/tests/test8.jpg" alt="We took Pictures of Camila Cabello"
                                    class="borderRadii"/>
                            <div class="overlay"></div>
                            <div class="descriptiveText">
                                <p class="lead descriptiveHeader">First Public Photo Shoot</p>
                                <p>Introducing our first ever public photo shoot, featuring the best models all over the country. We also hosted a meet and greet with some of the models' fans.</p>
                            </div>
                        </div>
                    </div>
                    <div id="carouselIndicator"><p>Showing page <span class="currentIndex index"></span> of <span
                                    class="totalIndexes index"></span></p></div>
                </div>
                <div class="col-md-4 noPadding bordered relative control_container">
                    <canvas id="animatedLine">
                        <div class="horizontal_bar"></div>
                    </canvas>
                </div>
            </div>
            <div class="row fadeInOnScroll row2">
                <div class="col-md-12">
                    <div class="fullWidth carouselControlContainer">
                        <div class="percentageProgress">
                            <div class="mask full">
                                <div class="fill"></div>
                            </div>
                            <div class="mask half">
                                <div class="fill"></div>
                                <div class="fill fix"></div>
                            </div>
                            <div id="carouselControl">
                                <div class="previous control"><i class="fa fa-angle-left"></i></div>
                                <div class="next control"><i class="fa fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="threeColumns1" class="fullWidth someSlide miniViewportHeight backgroundPicture" data-background-Picture="url('assets/img/tests/test3.jpg'), center 0%, fixed, no-repeat, cover">
            <div class="container">
                <div id="backgroundForegroundText01" class="fullWidth row">
                    <div class="col-md-6">
                        <h1 class="monster whiteForeground XL toUpperCase">Your Beauty</h1>
                        <h1 class="monster whiteForeground XXL toUpperCase">Our Priority</h1>
                        <div class="marginTop"></div>
                        <p class="whiteForeground higherLineHeight">
                            From the very beginning the aesthetics of our clients has been our priority. We live to make you beautiful. We've collaborated and grown our network to cut across all the best fashion minds in the world. You'll never look the same.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="featuredProducts" class="fullWidth">
            <div class="container">
                <div class="col-md-12">
                    <h1 class="monster XL text-capitalize text-center whiteForeground">Featured Products</h1>
                    <div id="featuredCarousel">
                        <div class="ericItem"><!--ericItem-->
                            <div class="clickEvent"></div>
                            <div class="product">
                                <div class="imageContainer">
                                    <img src="assets/img/products/CINNAMON_SLIPPERS.jpg" alt="Green Makeup Stuff" class="productImage"/>
                                </div>
                                <div class="bodyDiv">
                                    <div class="titleDiv">
                                        <h1 class="monster L">Vietpro Cinnamon Slippers</h1>
                                    </div>
                                    <div class="averageRating">
                                        <span class="numberRating monster">
                                            &#8358; 17 000
                                        </span>
                                        <span class="starRating">
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                        </span>
                                    </div>

                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quibusdam, recusandae? Corporis expedita hic impedit laudantium magnam pariatur porro possimus quod sit? Aliquam consectetur harum natus nemo numquam repellat voluptatem?</p>
                                        <a class="readMore monster hoverUnderline" href="#">Read more</a>
                                    </div>
                                    <div class="callsToAction">
                                        <a href="#" class="viewProduct whiteForeground monster noUnderline">View Product</a>
                                        <a href="#" data-toggle="tooltip" title="Add to Bag" class="addToBag"><i class="fa fa-shopping-bag"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Add to Wishlist" class="addToWishlist"><i class="fa fa-heart"></i></a>
                                        <a href="#" class="purchaseProduct monster whiteForeground noUnderline">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div><!--/ericItem-->
                        <div class="ericItem"><!--ericItem-->
                            <div class="clickEvent"></div>
                            <div class="product">
                                <div class="imageContainer">
                                    <img src="assets/img/products/ANEBA%20SACHEL.jpg" alt="Green Makeup Stuff" class="productImage"/>
                                </div>
                                <div class="bodyDiv">
                                    <div class="titleDiv">
                                        <h1 class="monster L">706 12 Travel Brush Set</h1>
                                    </div>
                                    <div class="averageRating">
                                        <span class="numberRating monster">
                                            &#8358; 13 000
                                        </span>
                                        <span class="starRating">
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                        </span>
                                    </div>
                                    <div class="description">
                                        <p>706 12 Piece Black and White Travel Brush Set contains a range of eye and face brushes perfect for crafting a multitude of looks. The inclusive matching black-and-white striped case allows you to take your brushes with you wherever you go whilst doubling up as a stylish brush holder.</p>
                                        <a class="readMore monster hoverUnderline" href="#">Read more</a>
                                    </div>
                                    <div class="callsToAction">
                                        <a href="#" class="viewProduct whiteForeground monster noUnderline">View Product</a>
                                        <a href="#" data-toggle="tooltip" title="Add to Bag" class="addToBag"><i class="fa fa-shopping-bag"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Add to Wishlist" class="addToWishlist"><i class="fa fa-heart"></i></a>
                                        <a href="#" class="purchaseProduct monster whiteForeground noUnderline">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div><!--/ericItem-->
                        <div class="ericItem"><!--ericItem-->
                            <div class="clickEvent"></div>
                            <div class="product">
                                <div class="imageContainer">
                                    <img src="assets/img/products/wilde%20glasses.jpg" alt="Green Makeup Stuff" class="productImage"/>
                                </div>
                                <div class="bodyDiv">
                                    <div class="titleDiv">
                                        <h1 class="monster L">Handmade Amber Wilde Glasses</h1>
                                    </div>
                                    <div class="averageRating">
                                        <span class="numberRating monster">
                                            &#8358; 77 000
                                        </span>
                                        <span class="starRating">
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star-half-o yellowStar"></i>
                                        </span>
                                    </div>
                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quibusdam, recusandae? Corporis expedita hic impedit laudantium magnam pariatur porro possimus quod sit? Aliquam consectetur harum natus nemo numquam repellat voluptatem?</p>
                                        <a class="readMore monster hoverUnderline" href="#">Read more</a>
                                    </div>
                                    <div class="callsToAction">
                                        <a href="#" class="viewProduct whiteForeground monster noUnderline">View Product</a>
                                        <a href="#" data-toggle="tooltip" title="Add to Bag" class="addToBag"><i class="fa fa-shopping-bag"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Add to Wishlist" class="addToWishlist"><i class="fa fa-heart"></i></a>
                                        <a href="#" class="purchaseProduct monster whiteForeground noUnderline">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div><!--/ericItem-->
                        <div class="ericItem"><!--ericItem-->
                            <div class="clickEvent"></div>
                            <div class="product">
                                <div class="imageContainer">
                                    <img src="assets/img/products/Wrap%20Bracelet.jpeg" alt="Green Makeup Stuff" class="productImage"/>
                                </div>
                                <div class="bodyDiv">
                                    <div class="titleDiv">
                                        <h1 class="monster L">MMBR199A063 Pack of 10</h1>
                                    </div>
                                    <div class="averageRating">
                                        <span class="numberRating monster">
                                            &#8358; 5 000
                                        </span>
                                        <span class="starRating">
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star-o yellowStar"></i>
                                        </span>
                                    </div>
                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quibusdam, recusandae? Corporis expedita hic impedit laudantium magnam pariatur porro possimus quod sit? Aliquam consectetur harum natus nemo numquam repellat voluptatem?</p>
                                        <a class="readMore monster hoverUnderline" href="#">Read more</a>
                                    </div>
                                    <div class="callsToAction">
                                        <a href="#" class="viewProduct whiteForeground monster noUnderline">View Product</a>
                                        <a href="#" data-toggle="tooltip" title="Add to Bag" class="addToBag"><i class="fa fa-shopping-bag"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Add to Wishlist" class="addToWishlist"><i class="fa fa-heart"></i></a>
                                        <a href="#" class="purchaseProduct monster whiteForeground noUnderline">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div><!--/ericItem-->
                        <div class="ericItem"><!--ericItem-->
                            <div class="clickEvent"></div>
                            <div class="product">
                                <div class="imageContainer">
                                    <img src="assets/img/products/Adidas%20Samoa.jpg" alt="Green Makeup Stuff" class="productImage"/>
                                </div>
                                <div class="bodyDiv">
                                    <div class="titleDiv">
                                        <h1 class="monster L">Adidas Samoa</h1>
                                    </div>
                                    <div class="averageRating">
                                        <span class="numberRating monster">
                                            &#8358; 27 000
                                        <span class="starRating">
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star-half-o yellowStar"></i>
                                            <i class="fa fa-star-o yellowStar"></i>
                                        </span>
                                    </div>
                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quibusdam, recusandae? Corporis expedita hic impedit laudantium magnam pariatur porro possimus quod sit? Aliquam consectetur harum natus nemo numquam repellat voluptatem?</p>
                                        <a class="readMore monster hoverUnderline" href="#">Read more</a>
                                    </div>
                                    <div class="callsToAction">
                                        <a href="#" class="viewProduct whiteForeground monster noUnderline">View Product</a>
                                        <a href="#" data-toggle="tooltip" title="Add to Bag" class="addToBag"><i class="fa fa-shopping-bag"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Add to Wishlist" class="addToWishlist"><i class="fa fa-heart"></i></a>
                                        <a href="#" class="purchaseProduct monster whiteForeground noUnderline">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div><!--/ericItem-->
                        <div class="ericItem"><!--ericItem-->
                            <div class="clickEvent"></div>
                            <div class="product">
                                <div class="imageContainer">
                                    <img src="assets/img/products/Matsuda%20Glasses.jpg" alt="Green Makeup Stuff" class="productImage"/>
                                </div>
                                <div class="bodyDiv">
                                    <div class="titleDiv">
                                        <h1 class="monster L">Black Matsuda Glasses</h1>
                                    </div>
                                    <div class="averageRating">
                                        <span class="numberRating monster">
                                            &#8358; 28 000
                                        </span>
                                        <span class="starRating">
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star yellowStar"></i>
                                            <i class="fa fa-star-o yellowStar"></i>
                                            <i class="fa fa-star-o yellowStar"></i>
                                        </span>
                                    </div>
                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quibusdam, recusandae? Corporis expedita hic impedit laudantium magnam pariatur porro possimus quod sit? Aliquam consectetur harum natus nemo numquam repellat voluptatem?</p>
                                        <a class="readMore monster hoverUnderline" href="#">Read more</a>
                                    </div>
                                    <div class="callsToAction">
                                        <a href="#" class="viewProduct whiteForeground monster noUnderline">View Product</a>
                                        <a href="#" data-toggle="tooltip" title="Add to Bag" class="addToBag"><i class="fa fa-shopping-bag"></i></a>
                                        <a href="#" data-toggle="tooltip" title="Add to Wishlist" class="addToWishlist"><i class="fa fa-heart"></i></a>
                                        <a href="#" class="purchaseProduct monster whiteForeground noUnderline">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div><!--/ericItem-->
                    </div>
                    <div class="fullWidth text-center marginTop XL">
                        <a href="#" class="callToShop noUnderline monster">Visit Our Store Now!</a>
                    </div>
                </div>
            </div>
        </div>

        <?php include 'partitions/footer.php'; ?>
    </body>
</html>
