import React, { useState } from 'react';
import './experience.css';
import Exp1 from '../../assets/crrulogo.jpg';
import Exp2 from '../../assets/dialogo.png';
import Exp3 from '../../assets/pttlogo.png';

const Experience = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">
        This is the details of my experience work.
      </span>

      <div className="experience__container container grid">
        <div className="experience__content">
          <div>
            <img src={Exp1} alt="" className="experience__icon" />
            <h3 className="experience__title">
              Graduate <br /> Research
            </h3>
          </div>

          <span className="experience__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right experience__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'experience__modal active-modal'
                : 'experience__modal'
            }
          >
            <div className="experience__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times experience__modal-close"
              ></i>

              <h3 className="experience__modal-title">Graduate Research</h3>
              <p className="experience__modal-description">
                Solve the problem of Lanna heritage or information recorded on
                palm leaves and stone inscriptions being damaged. or decay over
                time By storing Lanna character information in digital form.
              </p>

              <ul className="experience__modal-experience grid">
                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    <br />
                    Developed and implemented a Histogram Matching, Logistic
                    Regression and Convolutional Neural Network model.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-wrench experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Technologies used: Python, OpenCV, TensorFlow.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience__content">
          <div>
            <img src={Exp2} alt="" className="experience__icon" />
            <h3 className="experience__title">
              Back-End <br /> Developer
            </h3>
          </div>

          <span className="experience__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right experience__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'experience__modal active-modal'
                : 'experience__modal'
            }
          >
            <div className="experience__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times experience__modal-close"
              ></i>

              <h3 className="experience__modal-title">Back-End Developer</h3>
              <p className="experience__modal-description">
                I have studied, learned numerous new skills, and applied them
                creatively in product development to meet the needs of both
                customers and companies.
              </p>

              <ul className="experience__modal-experience grid">
                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Develop a real-time CCTV data streaming system with an SSE
                    Hub Pub/Sub architecture.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Upgrade product's data service entity and APIs to a newer
                    version for improved optimization.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-wrench experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Technologies used: Python, FastAPI, TortoiseORM, Redis, API,
                    Docker and PostgreSQL.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Built data transform service for record data from databases
                    as CSV files.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Built a backup and retention service that regularly backed
                    up CSV files in blob storage.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-wrench experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Technologies used: TypeScript, NestJS, Prisma, Bull, API,
                    GraphQL, Docker and PostgreSQL.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience__content">
          <div>
            <img src={Exp3} alt="" className="experience__icon" />
            <h3 className="experience__title">
              Full-Stack <br /> Developer
            </h3>
          </div>

          <span className="experience__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right experience__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'experience__modal active-modal'
                : 'experience__modal'
            }
          >
            <div className="experience__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times experience__modal-close"
              ></i>

              <h3 className="experience__modal-title">Full-Stack Developer</h3>
              <p className="experience__modal-description">
                I apply the knowledge and skills gained from university
                education to create interesting, high-quality works that respond
                to the needs of both customers and companies.
              </p>

              <ul className="experience__modal-experience grid">
                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Receive requirements from clients for designing databases
                    and designing website.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Develop databases, web application (MVC) as per the clients
                    specifications.
                  </p>
                </li>

                <li className="experience__modal-service">
                  <i className="uil uil-wrench experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Technologies used: JavaScript, NodeJS, ExpressJS, Docker and
                    MySQL.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
