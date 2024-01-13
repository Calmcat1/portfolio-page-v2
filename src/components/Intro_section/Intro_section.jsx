import React from 'react';
import code_dev_1 from '../../images/code-dev-1.png'
import './Intro_section.css'

const Intro_section = () => {
  return (
    <div>
      <div className="intro__section__content__container mt-5 mb-5">

          <div className="intro__section__left__side">
            <div className="intro__section__header__container mb-3">
              <h5 className="indicator__headings">Intro</h5>
              <h2 className="main__heading__text__styling">I am a full-stack developer</h2>
            </div>

            <div className="intro__section__body__text__container mb-2">
                <p className="custom__body__text__styling" id="tech__stack__heading">With knowledge in various  
                languages and frameworks</p>
            </div>

          </div>
        
          <div className="intro__section__right__side">
            <div className="intro__section__image__container"> 
              <img src={code_dev_1}></img>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Intro_section
