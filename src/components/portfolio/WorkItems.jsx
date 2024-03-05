import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className='fill'>
      <img src={item.image} alt="" className="work__img" />
      </div>

      <h3 className="work__title">{item.role}</h3>
      <p className="work__title">{item.title}</p>

      <a href={item.link} target="_blank" className="work__button">
        {item.link != null ? 'View More' : ''}
        <i
          className={
            item.link != null ? 'uil uil-arrow-right work__button-icon' : ''
          }
          style={{ visibility: item.link != null ? 'visible' : 'hidden' }}
        ></i>
      </a>
    </div>
  );
};

export default WorkItems;
