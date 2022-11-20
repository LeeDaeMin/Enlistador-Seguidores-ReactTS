import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Sub, SubsResponseFromApi} from './types'



interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}



function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);
  /* useRef  es un hook donde puede guardar un valor que se va a quedar guardado entre renderizados pero no va a causar un renderizado*/

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const fetchSubs = async () =>{
      return axios
      .get<SubsResponseFromApi>('http://localhost:3001/subs/all')
      .then(response => response.data)
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): 
      Array<Sub> => {
        return apiResponse.map(subsFromApi=>{
          const {
            months: subMonths,
            profileUrl: avatar,
            nick,
            description: descripcion
          } = subsFromApi
          
          return {
            nick,
            subMonths,
            avatar,
            descripcion
          }
        })
    }

    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void =>{
    setSubs(subs => ([...subs, newSub]))
    setNewSubsNumber(n => n + 1)
  }


  return (
    <div className="App" ref={divRef}>
      <h1>Luis Subs</h1>
      <List subs={subs}/>
        New subs: {newSubsNumber}
      <Form onNewSubs={handleNewSub}/>
    </div>

  );
}

export default App;
