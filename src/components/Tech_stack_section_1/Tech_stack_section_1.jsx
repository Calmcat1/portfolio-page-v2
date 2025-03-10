import React from 'react';
import './Tech_stack_section_1.css'



const Tech_stack_section_1 = () => {
  return (
    <div>
        <div className="tech__s__1__section__content__container mb-5 mt-5">

          <div className="tech__s__1__section__left__side">
            <div className="tech__s__1__section__header__container mb-3">
              <h5 className="indicator__headings">Tech-stack</h5>
              <h2 className="main__heading__text__styling">I am skilled in these languages</h2>
            </div>

            <div className="tech__s__1__section__body__text__container mb-2">
                <p className="custom__body__text__styling">
                    I have a strong foundation in Software Engineering<br></br>
                    specializing in Java and Spring Boot for backend development<br></br>
                    and React for building dynamic front-end applications.</p>
            </div>

          </div>
        
          <div className="tech__s__1__section__right__side">
            <div className="tech__s__1__section__image__container"> 
              <div className='tech__s__1__section__image__container__top'>
                <i class="fa-brands fa-css3-alt color__white tech__stack__s1__imgs"></i>
                <i class="fa-brands fa-python color__white tech__stack__s1__imgs"></i><br></br>
              </div>

              <div className='tech__s__1__section__image__container__btm'>
                <i class="fa-brands fa-html5 color__white tech__stack__s1__imgs"></i>
                <i class="fa-brands fa-square-js color__white tech__stack__s1__imgs"></i>
              </div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tech_stack_section_1
