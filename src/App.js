import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Character from './components/Character';
import styled from 'styled-components';

const startingList = [
  {
    id: 1001,
    name: 'Robert Grips',
    url: 'https://swapi.dev/api/people/1/'
  },
  {
    id: 1002,
    name: 'Abby Grips',
    url: 'https://swapi.dev/api/people/2/'
  },
  {
    id: 1003,
    name: 'Stella Grips',
    url: 'https://swapi.dev/api/people/3/'
  },
  {
    id: 1004,
    name: 'Mom Grips',
    url: 'https://swapi.dev/api/people/4/'
  },
  {
    id: 1005,
    name: 'Ellie Grips',
    url: 'https://swapi.dev/api/people/5/'
  },
  {
    id: 1006,
    name: 'Chuck Grips',
    url: 'https://swapi.dev/api/people/6/'
  }
]

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
