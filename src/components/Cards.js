import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>View My Personal Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Created using MERN-MongoDb/Express/React/Node'
              path='/projects'
            />
            <CardItem
              src='images/1.jpg'
              text='Created using Php/Laravel'
              path='/projects'
            />
            <CardItem
              src='images/1.jpg'
              text='Created using React/AlanApi'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/b1.jpg'
              text='Created using MERN-MongoDb/Express/React/Node'
              path='/projects'
            />
            <CardItem
              src='images/b1.jpg'
              text='Created using Php/Laravel'
              path='/projects'
            />
            <CardItem
              src='images/b1.jpg'
              text='Created using React/AlanApi'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/b.jpg'
              text='Created using MERN-MongoDb/Express/React/Node'
              path='/projects'
            />
            <CardItem
              src='images/b.jpg'
              text='Created using Php/Laravel'
              path='/projects'
            />
            <CardItem
              src='images/b.jpg'
              text='Created using React/AlanApi'
              path='/projects'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;