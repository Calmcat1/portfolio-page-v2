import React from 'react'
import './Footer_section.css'

const Footer_section = () => {
  return (
    <div>
       <footer class="white-top-border text-light mt-4 py-3">
        <div class="container text-center">
          <h4 class="logo custom__logo__styling">Contact Me</h4>
              <nav class="nav justify-content-center">
                <i class="fa-brands fa-github fa-brand-override"></i>
                <a class="nav-link custom__navigation__links clickable__links" href="https://github.com/calmcat1">Github</a>

                <i class="fa-brands fa-linkedin fa-brand-override"></i>
                <a class="nav-link custom__navigation__links clickable__links" href="https://www.linkedin.com/in/lee-gitonga-3a5921242/">LinkedIn</a>

                <i class="fa-regular fa-envelope fa-brand-override"></i>
                <a class="nav-link custom__navigation__links clickable__links" href="mailto:tarafikicom@gmail.com">Email</a>
              </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer_section
