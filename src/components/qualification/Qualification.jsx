import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Engineering</h3>

                <span className="qualification__subtitle">
                  Bachelor of Engineer
                </span>
                <span className="qualification__subtitle">
                  Chiang Rai Rajabhat University (CRRU)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2023
                </div>
                <div className="qualification__award">
                  <i className="bx bx-award"></i> GPAX 3.69/4.00
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">General-Arts (Arts) Program</h3>

                <span className="qualification__subtitle">High School</span>
                <span className="qualification__subtitle">
                  Maesaiprasitsart School (MPS)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2012 - 2018
                </div>
                <div className="qualification__award">
                  <i className="bx bx-award"></i> GPAX 3.67/4.00
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Back-End Developer</h3>

                <span className="qualification__subtitle">Internship</span>
                <span className="qualification__subtitle">
                  Dynamic Intelligence Asia (dIA)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2022 - Feb 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full-Stack Developer</h3>

                <span className="qualification__subtitle">
                  Internship & Mini Project
                </span>
                <span className="qualification__subtitle">
                  PTT Den Ha Petroleum Chiang Rai
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Dec 2020 - Feb 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
