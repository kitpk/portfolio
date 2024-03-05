import React from 'react';

const Backend = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Front-End Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">HTML</h3>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">VueJS</h3>
                <span className="skills__level">Beginer</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">CSS</h3>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Beginer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="skills__content">
        <h3 className="skills__title">Tools</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Redis</h3>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Docker</h3>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Postman</h3>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Dbeaver</h3>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Linux</h3>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Git</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
