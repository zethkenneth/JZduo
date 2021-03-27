import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards() {
  return (
    <div className='cards'>
      <h1>Members of the Group</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
         
            <CardItem
              src='images/Profile2.jpg'
              text='Set Sail in asdasd hhkgasdjfhga kjsghdfkja shgdafkjsdkf ahgsdk gaskjdhgf'
              name='John ed Brilliantes'
              label='John Ed Brilliantes'
              path='/services'
            />
            <CardItem
              src='images/Profile.jpg'
              text='Experience asdfasdfaskdjfhlkashdg asdfhkashd fkasdhf asdkjfhas df s'
              name='Zeth Kenneth Pungtod'
              label='Zeth Kenneth Pungtod'
              path='/products'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
