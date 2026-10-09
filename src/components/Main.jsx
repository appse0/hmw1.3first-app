import React from 'react';

const Main = () => {
    return (
        <main>
            <div className="main-content">
                <div className="main-text">
                    <h1 className="main-title">Your everyday tasks, automated.</h1>
                    <p className="main-description">Whirl lets you design and streamline your everyday tasks and workflows in just a few clicks.</p>
                    <div className="main-buttons">
                        <button className="btn btn-primary">Book a demo</button>
                        <a href="#" className="btn btn-secondary">Learn more</a>
                    </div>
                </div>
                <img src="./public/main-content_img.png" alt="Stickers" />
            </div>

            <div className="trusted-companies">
                <h1 className="trusted-companies_name">Trusted by companies of all sizes</h1>
                <img src="./public/company-logos.svg" alt="Company Logos" />
                <img src="./public/benefits.svg" alt="Benefits" />
            </div>

            <div className="care-frames_container">
                <div className="care-frames">
                    <h1>We will take care of everything,<br />so you can get back to relaxing.</h1>

                    <div className="care-frame_frame">
                        <div className="care-frame_frame-choice">

                            <div className="care-frame_frame-choice-title">
                                <img src="./public/care-frame1_logo.svg" alt="Care Frame" />
                                <h3 className="care-frame-title">Anti-loss technology</h3>
                                <img className="care-frame-arrow" src="./public/care-frame_arrow.svg" alt="Care Frame Arrow" style={{ width: '14.5px', height: '7px' }} />
                            </div>

                            <p className="care-frame-description" style={{ marginLeft: '60px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                    </div>

                    <div className="care-frame_frame">
                        <img src="./public/care-frame2_logo.svg" alt="Care Frame" />
                        <h3 className="care-frame-title">Exchange easily</h3>
                        <img className="care-frame-arrow" src="./public/care-frame_arrow.svg" alt="Care Frame Arrow" style={{ width: '14.5px', height: '7px' }} />
                    </div>

                    <div className="care-frame_frame">
                        <img src="./public/care-frame3_logo.svg" alt="Care Frame" />
                        <h3 className="care-frame-title">Fully encrypted</h3>
                        <img className="care-frame-arrow" src="./public/care-frame_arrow.svg" alt="Care Frame Arrow" style={{ width: '14.5px', height: '7px' }} />
                    </div>

                    <div className="care-frame_frame">
                        <img src="./public/care-frame4_logo.svg" alt="Care Frame" />
                        <h3 className="care-frame-title">Plenty of options</h3>
                        <img className="care-frame-arrow" src="./public/care-frame_arrow.svg" alt="Care Frame Arrow" style={{ width: '14.5px', height: '7px' }} />
                    </div>
                </div>
                <img src="./public/care-frame_image.svg" alt="Care Frame Background" />
            </div>

            <div className="information">
                <h1 className="information-title">What's Whirl <br />all about?</h1>
                <div className="information-content">

                    <div className="information-item1">
                        <h2 className="information-item-title">All on one place.</h2>
                        <p className="information-item-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>

                    <div className="information-item2">
                        <img className="information-logo2" src="./public/information-logo1.svg" alt="Information Logo" style={{ height: 55, width: 55 }} />
                        <h2 className="information-item-title">Get daily alerts.</h2>
                        <p className="information-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

                    </div>

                    <div className="information-item3">
                        <img className="information-logo2" src="./public/information-logo2.svg" alt="Information Logo" style={{ height: 55, width: 55 }} />
                        <h2 className="information-item-title">Safe and secure.</h2>
                        <p className="information-item-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div className="demo">
                <img src="./public/demo-image.svg" />
                <div className="demo-information">
                    <h1 className="demo-title">Set, forget, and then track.</h1>
                    <p className="demo-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="demo-sub">
                        <img src="./public/tick.svg" />
                        <h3>Understand your options</h3>
                    </div>
                    <div className="demo-sub">
                        <img src="./public/tick.svg" />
                        <h3>No lock-ins</h3>
                    </div>
                    <div className="demo-sub">
                        <img src="./public/tick.svg" />
                        <h3>You own the shares</h3>
                    </div>
                    <h3 className="demo-button">Book a Demo</h3>
                </div>
            </div>
            <div className="automation">
                <h1 className="automation-title">Your tasks, automated.</h1>
                <p className="automation-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="automation-content">
                    <div className="automation-item">
                        <img className="automation-icon" src="./public/auto-icon1.svg" alt="Automation Icon" />
                        <h2 className="automation-item-title">Learn your options.</h2>
                        <p className="automation-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="automation-item">
                        <img className="automation-icon" src="./public/auto-icon2.svg" alt="Automation Icon" />
                        <h2 className="automation-item-title">Stay informed.</h2>
                        <p className="automation-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloretro.</p>
                    </div>
                    <div className="automation-item">
                        <img className="automation-icon" src="./public/auto-icon3.svg" alt="Automation Icon" />
                        <h2 className="automation-item-title">Automate it all.</h2>
                        <p className="automation-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum.</p>
                    </div>
                    <div className="automation-item">
                        <img className="automation-icon" src="./public/auto-icon2.svg" alt="Automation Icon" />
                        <h2 className="automation-item-title">Stay informed.</h2>
                        <p className="automation-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et consectetur.</p>
                    </div>
                </div>
            </div>

            <div className="blog">
                <div className="blog-title">
                    <h1>Get smarter, with our blog.</h1>
                    <p>See All Posts</p>
                </div>
                <div className="blog-content">
                    <div className="blog-block">
                        <img src="./public/blog-image1.svg" />
                        <div className="blog-content-text">
                            <div className="blog-category">Improvements</div>
                            <h3 className="blog-title">Automating Daily Tasks from Your Phone</h3>
                            <p className="blog-description">Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
                            <p className="blog-date">April 24, 2022</p>
                        </div>
                    </div>
                    <div className="blog-block">
                        <img src="./public/blog-image2.svg" />
                        <div className="blog-content-text">
                            <div className="blog-category">Tips & Tricks</div>
                            <h3 className="blog-title">Can You Automate Group Learning?</h3>
                            <p className="blog-description">Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
                            <p className="blog-date">April 24, 2022</p>
                        </div>
                    </div>
                    <div className="blog-block">
                        <img src="./public/blog-image3.svg" />
                        <div className="blog-content-text">
                            <div className="blog-category">News</div>
                            <h3 className="blog-title">Our $3,000,000 B Round Investors</h3>
                            <p className="blog-description">Eos ipsum et est quis neque cum. Quis autem est eligendi amet animi eaque. Itaque minus illo delectus vel vitae dolores minus.</p>
                            <p className="blog-date">April 24, 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="book-demo">

                <div className="book-demo-block">
                    <h1>Get started with Whirl</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button className="btn-primary">Book a Demo</button>
                    <div className="book-demo-details">
                        <div className="book-demo-detail">
                            <img src="./public/demo-tick.svg" />
                            <p>Free 30-day trial</p>
                        </div>
                        <div className="book-demo-detail">
                            <img src="./public/demo-tick.svg" />
                            <p>No credit-card required</p>
                        </div>
                    </div>
                </div>
                
            </div>


        </main >
    )
}


export default Main;