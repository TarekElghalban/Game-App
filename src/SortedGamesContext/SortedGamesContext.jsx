
import { createContext} from 'react';
import axios from 'axios';
import { useState } from 'react';








 export let SortedGamesContext = createContext();
 export default function SortedGamesContextProvider(props){








let [alphapetical , setAlphapetical] = useState([])
let [releaseDate , setreleaseDate] = useState([])
let [popularity , setpopularity] = useState([])
let [relevance , setrelevance] = useState([])
    async function getSortedGames(sortType , callback){
      const config = {
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        }
      };
      
      let {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sortType}` ,config )
    callback(data)
      

    };
   

    return <SortedGamesContext.Provider value={{alphapetical,setAlphapetical , getSortedGames , popularity , setpopularity , releaseDate , setreleaseDate , relevance , setrelevance}}>
        {props.children}
    </SortedGamesContext.Provider>
  }