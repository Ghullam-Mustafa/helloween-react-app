import React from 'react'
import HeaderImg from '../../assets/img/home1-img.png'
import Button from '../button/Button'

export default function Header() {
    return (
        <section className="home container" id="home">
            <div className="swiper home-swiper">
                <div className="swiper-wrapper">
                    {/* /* <!-- HOME SLIDER 1 --> */ }
                    <section className="swiper-slide">
                        <div className="home__content grid">
                            <div className="home__group">
                                <img src={HeaderImg} alt="" className="home__img" />
                                <div className="home__indicator"></div>

                                <div className="home__details-img">
                                    <h4 className="home__details-title">The Labu “Reiza”</h4>
                                    <span className="home__details-subtitle">The Living Pumpkin</span>
                                </div>
                            </div>

                            <div className="home__data">
                                <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                                <h1 className="home__title">UOOOO <br /> TRICK OR <br /> TREAT!!</h1>
                                <p className="home__description">Hi, I'm Reiza, people call me "El Labu". I am currently trying to learn
                                    something new, building my own bike with parts made only in Malaysia.
                                </p>

                                <Button title="Book Now"/>
                                
                            </div>
                        </div>
                    </section>

                    {/* <!-- HOME SLIDER 2 --> */}
                    <section className="swiper-slide">
                        <div className="home__content grid">
                            <div className="home__group">
                                <img src="assets/img/home2-img.png" alt="" className="home__img" />
                                <div className="home__indicator"></div>

                                <div className="home__details-img">
                                    <h4 className="home__details-title">Adino & Grahami</h4>
                                    <span className="home__details-subtitle">No words can describe them</span>
                                </div>
                            </div>

                            <div classNameName="home__data">
                                <h3 className="home__subtitle">#2 top Best duo</h3>
                                <h1 className="home__title">BRING BACK <br /> MY COTTON <br /> CANDY</h1>
                                <p className="home__description">Adino steals cotton candy from his brother and eats them all in one bite,
                                    a hungry beast. Grahami can no longer contain his anger towards Adino.
                                </p>

                                <Button title="Book Now"/>
                            </div>
                        </div>
                    </section>
                    </div>
            </div>
        </section>
    )
}


                

