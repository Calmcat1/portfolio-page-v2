import React from 'react'

const mobile_nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light primary__blue d-block d-lg-none mb-5 fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/home"><h4 class="custom__logo__styling">Tarafiki</h4></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobileNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mobileNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link custom__navigation__links" href="#intro__heading">Intro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom__navigation__links" href="#tech__stack__heading">Tech Stack</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom__navigation__links" href="#projects__heading">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      
    </div>
  )
}

export default mobile_nav
