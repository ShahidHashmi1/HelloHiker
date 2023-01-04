import Carousel from 'react-bootstrap/Carousel';
import './testimonials.css';
import test1pic from '../../Images/testimonialPics/test1.jpg';
import test2pic from '../../Images/testimonialPics/test2.jpg';
import test3pic from '../../Images/testimonialPics/test3.jpg';

function TestCarousel() {
    return (
        <>

        <section id='aboutNcarousel' className='aboutNcarousel'>
            <div className="slides">

                <article className="aboutSlide">
                    <div className="content">
                        <div className="aboutPic">
                            <h2 className='aboutTitle'>About Us</h2>
                        </div>
                        <br/>
                        <div className="aboutContent">
                            <h5>Our story is a pretty simple one.</h5>
                            <br/>
                            <h5>We're all huge fans of hiking, and figured we would combine the best of both worlds we have here: Programming and the good ole' outdoors.</h5>
                            <br/>
                            <h5>It is our hope to facilitate a community of users to meet other hikers in their area, and say hello!</h5>
                            <br/>
                            <h5>We plan on continuing to develop and refine our application to help grow the community. If you have any input please reach out to us!</h5>
                        </div>
                    </div>
                </article>

                <article className="carouselSlide">
                    <Carousel className='bkg-carousel'>
                        <Carousel.Item interval={4125}>
                        <img className="img-size d-inline-block" src={test1pic} alt="First slide" />
                        <Carousel.Caption>
                            <h4>Mia</h4>
                            <p className='testiTxt'>
                            HelloHiker has been great! I've discovered some awesome trails, and
                            met some great friends to hike with!
                            </p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                        <img className="img-size d-inline-block" src={test2pic} alt="Second slide" />
                        <Carousel.Caption>
                            <h4>Nick</h4>
                            <p className='testiTxt'>
                            Huge fan of this app. I didn't realize that there was freeclimbing
                            rocks to traverse so close to the house. Keep up the great works
                            guys!
                            </p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3850}>
                        <img className="img-size d-inline-block" src={test3pic} alt="Second slide" />
                        <Carousel.Caption>
                            <h4>Brad</h4>
                            <p className='testiTxt'>
                            I used to like to hike. Now I LOVE it. Thanks to HelloHiker, I'm learning all the best places around! Can't wait to get outside again soon.
                            </p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </article>

            </div>
        </section>
        
        </>
    );
}

export default TestCarousel;
