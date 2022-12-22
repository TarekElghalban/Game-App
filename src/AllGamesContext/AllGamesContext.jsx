import { createContext } from 'react';
import { useState } from 'react';
import axios from 'axios';

export let AllGamesContext = createContext();
export default function AllGamesContextProvider (props){

  let [count , setCount] = useState(20)
function getMoreGames(){
setCount(count+20)

};



let [allGames , setAllGames] = useState([])
    const getAllGames = async () => {
        const config = {
          headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          }
        };
        const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,config);
        setAllGames(data)
    };





return <AllGamesContext.Provider value={{getAllGames , allGames ,getMoreGames , count }} >
{props.children}

</AllGamesContext.Provider>

}