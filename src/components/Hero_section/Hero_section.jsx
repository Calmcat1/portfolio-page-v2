import React from 'react'
import './Hero_section.css'

const Hero_section = () => {
  return (
    <div>
        <div className="hero__section__content__container mb-5">

          <div className="hero__section__left__side">
            <div className="hero__section__header__container mb-3">
              <h1 className="main__heading__text__styling main__mobile__heading__text__styling" id="intro__heading">Hey there, Welcome to my portfolio page</h1>
            </div>

            <div className="hero__section__body__text__container mb-2">
                <p className="custom__body__text__styling">Hey there, I am known as Tarafiki
                  but my real Name is Lee Gitonga</p>
            </div>

            <div className="hero__section__button__container">
              <a className="btn btn-primary hero__section__custom__btn__styling sub__heading__text__styling" href="mailto:tarafikicom@gmail.com">Contact me</a>
            </div>
          </div>
        
          <div className="hero__section__right__side">
            <div className="hero__section__image__container"> 
            
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero_section
