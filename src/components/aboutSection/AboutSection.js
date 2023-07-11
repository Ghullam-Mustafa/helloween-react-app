import React from 'react'
import Button from '../button/Button'
import img from '../../assets/img/about-img.png'

export default function AboutSection() {
  return (
    <div>
           <section class="section about" id="about">
                <div class="about__container container grid">
                    <div class="about__data">
                        <h2 class="section__title about__title">About Halloween <br/> Night</h2>
                        <p class="about__description">Night of all the saints, or all the dead, is celebrated on October 31 and it is a 
                            very fun international celebration, this celebration comes from ancient origins, and is already 
                            celebrated by everyone.
                        </p>
                        <Button title = "Know More"/>
                    </div>

                    <img src={img} alt="" class="about__img"/>
                </div>
            </section>
    </div>
  )
}
