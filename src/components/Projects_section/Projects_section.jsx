import React from 'react'
import './Projects_section.css'

const Projects_section = () => {
  return (
    <div>
        <div className="project__section__projects">
          
          <h1 className="main__heading__text__styling text-center">Projects</h1>

          <div className="project__section_content_1 mb-5">
            <div className="project__section_content__subcontainer">
             <div className="project__section__header__container mb-3">
               <i class="fa-solid fa-code"></i>
               <h5 className="indicator__headings">Projects</h5>
               <h2 className="main__heading__text__styling">GraphixCentral-v2</h2>
             </div>
    
             <div className="project__section__body__text__container mb-2">
                 <p className="custom__body__text__styling">Framework React, Bootstrap version of GraphixCentral 
                   essentially the version 2, Frontend only, this was a first try at react to overhaul the 
                   graphixCentalv1 site</p>
             </div>
    
             <div className="hero__section__button__container">
               <button className="btn btn-primary hero__section__custom__btn__styling sub__heading__text__styling">Demo</button>
             </div>
            </div>
          </div>


          <div className="project__section_content_2 mb-5">
            <div className="project__section_content__subcontainer">
              <div className="project__section__header__container mb-3">
                <i class="fa-solid fa-code"></i>
                <h5 className="indicator__headings">Projects</h5>
                <h2 className="main__heading__text__styling">Portfolio-page-v1</h2>
              </div>

              <div className="project__section__body__text__container mb-2">
                  <p className="custom__body__text__styling">This is the first re-iteration of the my portfolio page, feel free to take a look here
                    
                  </p>
              </div>

              <div className="hero__section__button__container">
                <button className="btn btn-primary hero__section__custom__btn__styling sub__heading__text__styling">Demo</button>
              </div>
            </div>
          </div>


          <div className="project__section_content_3 mb-5">
            <div className="project__section_content__subcontainer">
              <div className="project__section__header__container mb-3">
                <i class="fa-solid fa-code"></i>
                <h5 className="indicator__headings">Projects</h5>
                <h2 className="main__heading__text__styling">Taracryptov2</h2>
              </div>

              <div className="project__section__body__text__container mb-2">
                  <p className="custom__body__text__styling">This site is an upgrade of Taracrypto-v1,
                  which can be found on my Github, 
                  its a full-stack website, utilizing django for backend, and bootstrap frontend</p>
              </div>

              <div className="hero__section__button__container">
                <button className="btn btn-primary hero__section__custom__btn__styling sub__heading__text__styling">Demo</button>
              </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Projects_section
