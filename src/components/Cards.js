import React from 'react';
import './Cards.css';
import Profile from './Profile';
import CardItem from './CardItem';


function Cards() {
  return (
    <div>
    <div className='cards'>
      <h1>Team Members</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
              <Profile
                src='images/Profile2.png'
                nickname='John'
                FullName='John Ed Brilliantes'
                Birthday='May 15, 1998'
                Nationality='Filipino'
                Languages='English,Tagalog,Visaya,Chavacano'
                Address='Tumaga,Zamboanga City,Phillippines'
              />
              <Profile
              src='images/Profile.png'
                nickname='Zeth'
                FullName='Zeth Kenneth Pungtod'
                Birthday='April 30, 1999'
                Nationality='Filipino'
                Languages='English,Tagalog,Chavacano'
                Address='Pasonanca,Zamboanga City,Phillippines'
              />
          </ul>
        </div>
      </div>
    </div>
    <div className='cards'>
      <h1>Services and Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem
              src='images/Social Media.jpg'
              text='We offer Social media marketing includes activities like posting text and image updates, videos, and and other content that drives audience engagement to your business.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Graphics.jpg'
              text='We offer Graphic Design such as infographic design. logo design and creation. social media banner and cover. PPC banner ads. that fits for your business.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Wesite.jpg'
              text='We offer web development services, from creating mobile web development solutions and responsive website designs that fits your business.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
