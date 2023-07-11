import React from 'react'

export default function Discount() {
  return (
    <section class="section discount">
    <div class="discount__container container grid">
        <div class="discount__data">
            <h2 class="discount__title">50% Discount <br/> On New Products</h2>
            {/* <a href="#" class="button">Go to new</a> */}
            
        </div>

        <img src="assets/img/discount-img.png" alt="" class="discount__img"/>
    </div>
</section>
  )
}