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

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const H1 = styled.section`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-size: xx-large;
`;

const H2 = styled.section`
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const Footer = styled.section`
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

const App = () => {

  const [myVariable, setMyVariable] = useState('Robert Gripshover')
  const [characterList, setCharacterList] = useState(startingList)

  console.log('It looks like this is working', myVariable)

  useEffect(() => {
    setMyVariable('6 Great Characters!')
    console.log('this is sparta')

    axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        console.log(res.data)
        setCharacterList(res.data)
      })
      
  }, [])

  return (
    
     /*MAKE SURE STUFF DOES NOT LEAVE THIS DIV*/
    <div className="App">

      <header>

      <H1 className="Header">Character List Star Wars</H1>
      <H2>{myVariable}</H2>

      </header>
      <main>
        <Section>
          {
            characterList.map((person, index) => (
              <Character jedi={person} key={`${person.name}-${person.index}`}/>
            )
            )
}   
        </Section>
      </main>

<Footer>Robert Gripshover 2022</Footer>
    </div>
    //MAKE SURE STUFF DOES NOT LEAVE THIS DIV
    
  );
}

export default App;
