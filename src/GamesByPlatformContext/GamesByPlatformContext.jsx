
import { createContext } from 'react';

import axios from 'axios';
import { useState } from 'react';





export let GamesPlatformContext = createContext();
export default function GamesPlatformContextProvider(props){



let [Platform , setPlatForm] = useState([])
    async function getGamesByPlatform(platForm){
      const config = {
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        }
      };
      
    let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platForm=${platForm}` ,config )
      setPlatForm(data)
        };
   

    return <GamesPlatformContext.Provider value={{getGamesByPlatform , Platform}}>
        {props.children}
    </GamesPlatformContext.Provider>
}



