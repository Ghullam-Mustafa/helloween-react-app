import React from 'react'
import ArrivalsCards from '../arrivalsCards/ArrivalsCards'
import img01 from '../../assets/img/new1-img.png'
import img02 from '../../assets/img/new2-img.png'
import img03 from '../../assets/img/new3-img.png'
import img04 from '../../assets/img/new4-img.png'



export default function NewArrivals() {
  return (
    <section className="section new" id="new">
    <h2 className="section__title">New Arrivals</h2>

    <div className="new__container container">
        <div className="swiper new-swiper">
            <div className="swiper-wrapper">
                 <ArrivalsCards src={img01} title="Witch Broom" price="7.99" newprice="14.99" />
                 <ArrivalsCards src={img02} title="Haunted House" price="14.99" newprice="29.99" />
                 <ArrivalsCards src={img03} title="Halloween Candle" price="11.99" newprice="21.99" />
                 <ArrivalsCards src={img04} title="Witch Hat" price="4.99" newprice="9.99" />
            </div>
        </div>
    </div>
</section>
  )
}
