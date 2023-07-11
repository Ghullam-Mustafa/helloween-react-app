import React from 'react'
import Button from '../button/Button'
import DiscountImg from '../../assets/img/discount-img.png'

export default function Discount(props) {
  return (
    <section className="section discount">
    <div className="discount__container container grid">
        <div className="discount__data">
            <h2 className="discount__title">50% Discount <br/> On New Products</h2>
            {/* <a href="#" className="button">Go to new</a> */}
            <Button title="Go to now"/>
        </div>

        <img src={DiscountImg} alt="" className="discount__img"/>
    </div>
</section>
  )
}
