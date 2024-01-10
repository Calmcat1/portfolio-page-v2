import React from 'react'
import django_img from '../../images/tech_stack_2_imgs/django-logo.png';
import react_img from '../../images/tech_stack_2_imgs/react-logo.png';
import './Tech_stack_section_2.css'

const Tech_stack_section_2 = () => {
  return (
    <div>
        <div className="tech__s__2__section__content__container mb-5 mt-5">

          <div className="tech__s__2__section__left__side pl-5">
            <div className="tech__s__2__section__header__container mb-3">
              <h5 className="indicator__headings">Tech-stack</h5>
              <h2 className="main__heading__text__styling">Frameworks i work with</h2>
            </div>

            <div className="tech__s__2__section__body__text__container mb-2">
                
                <p className="custom__body__text__styling">
                Currently have these frameworks
                on board as of now
                </p>
            </div>

          </div>
        
          <div className="tech__s__2__section__right__side">
            <div className="tech__s__2__section__image__container"> 
              <i class="fa-brands fa-react"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tech_stack_section_2
