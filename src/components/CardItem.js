import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Imag'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>Name: {props.name}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
