import React from 'react'
import MainCardImg from '../../assets/img/category1-img.png'


export default function MainCard(props) {
  return (
    <div>
        <div class="category__data">
            <img src={props.src} alt="" class="category__img"/>
            <h3 class="category__title">{props.title}</h3>
            <p class="category__description">{props.description}</p>
        </div>
    </div>
  )
}
