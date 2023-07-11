import React from 'react'
import CardImg from "../../assets/img/trick-treat1-img.png"
import CardImg2 from "../../assets/img/trick-treat2-img.png"
import CardImg3 from "../../assets/img/trick-treat3-img.png"
import CardImg4 from "../../assets/img/trick-treat4-img.png"
import CardImg5 from "../../assets/img/trick-treat5-img.png"
import CardImg6 from "../../assets/img/trick-treat6-img.png"

import ProductCard from '../productCard/ProductCard'

export default function TrickSection() {
  return (
    <section  className="section trick" id='trick'>
         <h2 className="section__title">Trick Or Treat</h2>
        <div className="trick__container container grid">
                <ProductCard src={CardImg} title="Toffee" name="Candy" price="11.99" />
                <ProductCard src={CardImg2} title="Bone" name="Accessory" price="8.99" />
                <ProductCard src={CardImg3} title="Scarecrow" name="Accessory" price="15.99" />
                <ProductCard src={CardImg4} title="Candy Cane" name="Candy" price="11.99" />
                <ProductCard src={CardImg5} title="Pumpkin" name="Candy" price="19.99" />
                <ProductCard src={CardImg6} title="Ghost" name="Accessory" price="17.99" />
            </div>
    </section>
  )
}
