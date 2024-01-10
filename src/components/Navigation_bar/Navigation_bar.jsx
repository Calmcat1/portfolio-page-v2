import React from 'react'
import './Navigation_bar.css'

const Navigation_bar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light custom-white-bg-color-black-border d-none d-lg-block mb-5">
        <div class="container ">
            <a class="navbar-brand" href="/"><h4 class="custom__logo__styling">Tarafiki</h4></a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link custom__navigation__links" href="/">Intro</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link custom__navigation__links" href="/Solutions">Tech Stack</a>
              </li>
                <li class="nav-item">
                    <a class="nav-link custom__navigation__links" href="/Contact">Projects</a>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation_bar
