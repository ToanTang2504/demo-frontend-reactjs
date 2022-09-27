/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Contract = () => {
    return (
        <section id="section-contact" class="section m-0 pb-0 bg-transparent page-section">
            <div class="row clearfix">
                <div class="col-md-5 offset-md-1 col-10 col-offset-1">
                    <div class="heading-block border-bottom-0 bottommargin-sm">
                        <h3 class="cookie-font text-capitalize color">Reserve Now</h3>
                    </div>

                    <div class="form-widget">
                        <div class="form-result"></div>
                        <form class="row mb-0" id="template-contactform" name="template-contactform" action="include/form.php" method="post">

                            <div class="form-process">
                                <div class="css3-spinner">
                                    <div class="css3-spinner-scaler"></div>
                                </div>
                            </div>

                            <div class="col-md-6 form-group">
                                <label for="template-contactform-name">Name <small>*</small></label>
                                <input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="sm-form-control required" />
                            </div>

                            <div class="col-md-6 form-group">
                                <label for="template-contactform-phone">Phone</label>
                                <input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" class="sm-form-control" />
                            </div>

                            <div class="w-100"></div>

                            <div class="col-12 form-group">
                                <label for="template-contactform-email">Email <small>*</small></label>
                                <input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email sm-form-control" />
                            </div>

                            <div class="col-12 form-group">
                                <label for="template-contactform-message">Message <small>*</small></label>
                                <textarea class="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30"></textarea>
                            </div>

                            <div class="col-12 form-group d-none">
                                <input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
                            </div>

                            <div class="col-12 form-group">
                                <button class="button button-3d m-0" type="submit" id="template-contactform-submit" name="template-contactform-submit" value="submit">Send Message</button>
                            </div>

                            <input type="hidden" name="prefix" value="template-contactform-" />

                        </form>

                    </div>
                </div>
                <div class="col-md-6">
                    <img class="topmargin" src="demos/spa/images/others/3.jpg" alt="Image" />
                </div>
            </div>
        </section>
    )
}

export default Contract