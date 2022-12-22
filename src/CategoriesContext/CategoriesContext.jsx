
import { createContext } from 'react';


import { useState } from 'react';
import axios from 'axios';




export let CategoriesContext = createContext();

export default function CategoriesContextProvider (props) {





    let [category , setCategory] = useState([])
    const getGameCategory = async () => {
        const config = {
          headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          }
        };
        const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,config);
        setCategory(data)
    };

return <CategoriesContext.Provider   value={{getGameCategory ,category }}>
{props.children}

</CategoriesContext.Provider>

}


