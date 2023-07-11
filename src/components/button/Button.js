import React from 'react'

export default function Button(props) {
  return (
    <div class="home__buttons">
        <a href="#" class="button">{props.title}</a>
        {/* <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a> */}
    </div>
  )
}
