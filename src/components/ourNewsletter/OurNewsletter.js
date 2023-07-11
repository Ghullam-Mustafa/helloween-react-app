import React from 'react'
import Button from '../button/Button'

export default function OurNewsletter() {
  return (
    <section class="section newsletter">
                <div class="newsletter__container container">
                    <h2 class="section__title">Our Newsletter</h2>
                    <p class="newsletter__description">
                        Promotion new products and sales. Directly to your inbox
                    </p>

                    <form action="" class="newsletter__form">
                        <input type="text" placeholder="Enter your email" class="newsletter__input"/>
                        <Button title="Subscribe" />
                    </form>
                </div>
            </section>
  )
}
