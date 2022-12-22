
import { createContext } from 'react';
import { useState } from 'react';
import axios from 'axios';

   

 

export let GamesDetailsContext = createContext();
 export default function GamesDetailsContextProvider(props){





let [gamesDetails , setGamesDetails] = useState([])
async function getGamesDetails(id){
  const config = {
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    }
  };
  
  let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` ,config )
  setGamesDetails(data)
}



    return <GamesDetailsContext.Provider value={{getGamesDetails , gamesDetails }}>
        {props.children}
    </GamesDetailsContext.Provider>
 }