/* eslint-disable react/style-prop-object */
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

const Service = () => {
    const serviceList = [
        {
            category: 'Spa',
            title: 'Construction Process Organized',
            desc: 'Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse.',
            link: '/',
            image: 'demos/spa/images/others/2.jpg'
        },
        {
            category: 'Spa',
            title: 'Construction Process Organized',
            desc: 'Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse.',
            link: '/',
            image: 'demos/spa/images/others/2.jpg'
        },
        {
            category: 'Spa',
            title: 'Construction Process Organized',
            desc: 'Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse.',
            link: '/',
            image: 'demos/spa/images/others/2.jpg'
        }]

    return (
        <div class="section m-0 clearfix" style="background: #FFF url('demos/spa/images/others/2.jpg') no-repeat top left;">

            <div class="container clearfix">
                <div class="row">
                    <div class="col-lg-7 offset-lg-5">
                        <div class="heading-block border-0 bottommargin-sm">
                            <h3>Beautiful Service.</h3>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cupiditate, libero pariatur aliquam vitae deserunt esse assumenda, tenetur veritatis, nihil consectetur facilis!</p>

                        <div class="row justify-content-center col-mb-30 mt-4 mb-0">
                            <div class="col-sm-6 col-md-4 text-center">
                                <i class="spa-leaves i-plain i-large mx-auto mb-0" style="color: #D2D2D2;"></i>
                                <div class="counter ls1 fw-semibold" style="color: #777; margin-top: 10px;"><span data-from="10" data-to="21" data-refresh-interval="50" data-speed="2000"></span></div>
                                <h5>Spa Branches</h5>
                            </div>

                            <div class="col-sm-6 col-md-4 text-center">
                                <i class="spa-woman i-plain i-large mx-auto mb-0" style="color: #D2D2D2;"></i>
                                <div class="counter ls1 fw-semibold" style="color: #777; margin-top: 10px;"><span data-from="100" data-to="8514" data-refresh-interval="50" data-speed="2500"></span></div>
                                <h5>Employees</h5>
                            </div>

                            <div class="col-sm-6 col-md-4 text-center">
                                <i class="spa-meditation i-plain i-large mx-auto mb-0" style="color: #D2D2D2;"></i>
                                <div class="counter ls1 fw-semibold" style="color: #777; margin-top: 10px;"><span data-from="100" data-to="458" data-refresh-interval="50" data-speed="3500"></span></div>
                                <h5>Happy Clients</h5>
                            </div>
                        </div>

                    </div>

                    <div class="row justify-content-center col-mb-50">
                        {serviceList?.map((item, index) => <ServiceCard service={item} />)}
                    </div>
                </div>
            </div>
            <div class="video-wrap d-block d-lg-none d-xl-none">
                <div class="video-overlay" style="background: rgba(255,255,255,0.9);"></div>
            </div>
        </div>
    )
}

export default Service