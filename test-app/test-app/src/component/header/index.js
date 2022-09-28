import React from "react";

function Header () {
    return (
        <header id="header" class="transparent-header dark no-sticky" data-responsive-class="dark">
        <div id="header-wrap">
            <div class="container">
                <div class="header-row">

                    <div id="logo">
                        <a href="index.html" class="standard-logo"><img src="demos/spa/images/logo.png" alt="Canvas Logo" /></a>
                        <a href="index.html" class="retina-logo"><img src="demos/spa/images/logo.png" alt="Canvas Logo" /></a>
                    </div>

                    <div id="primary-menu-trigger">
                        <svg class="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
                    </div>

                    <nav class="primary-menu not-dark">

                        <ul class="menu-container one-page-menu" data-easing="easeInOutExpo" data-speed="1250" data-offset="0">
                            <li class="menu-item current"><a class="menu-link" href="#" data-href="#slider"><div>Home</div></a></li>
                            <li class="menu-item"><a class="menu-link" href="#" data-href="#section-about"><div>About</div></a></li>
                            <li class="menu-item"><a class="menu-link" href="#" data-href="#section-price"><div>Price</div></a></li>
                            <li class="menu-item"><a class="menu-link" href="#" data-href="#section-testimonials"><div>Testimonials</div></a></li>
                            <li class="menu-item"><a class="menu-link" href="#" data-href="#section-contact"><div>Contact</div></a></li>
                        </ul>

                    </nav>

                </div>
            </div>
        </div>
        <div class="header-wrap-clone"></div>
    </header>
    )
}

export default Header