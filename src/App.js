import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Platforms from './Components/Platforms/Platforms';
import Categories from './Components/Categories/Categories';
import Logout from './Components/Logout/Logout';
import Register from './Components/Register/Register';
import SortBy from './Components/SortBy/SortBy';
import UserDataContextProvider from './UserDataContext/UserDataContext';
import All from './Components/All/All';
import Pc from './Components/Pc/Pc';
import Browser from './Components/Browser/Browser';
import AllGamesContextProvider from './AllGamesContext/AllGamesContext';
import GamesDetailsContextProvider from './GamesDetailsContext/GamesDetailsContext';
import GamesDetails from './Components/GamesDetails/GamesDetails';
import ReleaseDate from './Components/ReleaseDate/ReleaseDate';
import Popularity from './Components/Popularity/Popularity';
import Alphapetical from './Components/Alphapetical/Alphapetical';
import Relevance from './Components/Relevance/Relevance';
import Action from './Components/Action/Action';
import Racing from './Components/Racing/Racing';
import Social from './Components/Social/Social';
import Sports from './Components/Sports/Sports';
import Shooter from './Components/Shooter/Shooter';
import OpenWorld from './Components/OpenWorld/OpenWorld';
import Zombie from './Components/Zombie/Zombie';
import Fantasy from './Components/Fantasy/Fantasy';
import ActionRbg from './Components/ActingRbg/ActionRbg';
import Flight from './Components/Flight/Flight';
import BattleRoyal from './Components/BattleRoyal/BattleRoyal';
import GamesPlatformContextProvider from './GamesByPlatformContext/GamesByPlatformContext';
import SortedGamesContextProvider from './SortedGamesContext/SortedGamesContext';
import CategoriesContextProvider from './CategoriesContext/CategoriesContext';
import LogOutContextProvider from './LogOutContext/LogOutContext';
import Login from './Components/Login/Login';





let routers = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {path:'platforms' , element:<Platforms/> , children:[
      {path:'pc' , element:<Pc/>},
      {path:'browser' , element:<Browser/>},
    ]} , 
    {path:'categories' , element:<Categories/> , children:[
      {path:'action' , element:<Action/>},
      {path:'racing' , element:<Racing/>},
      {path:'social' , element:<Social/>},
      {path:'sports' , element:<Sports/>},
      {path:'shooter' , element:<Shooter/>},
      {path:'openworld' , element:<OpenWorld/>},
      {path:'zombie' , element:<Zombie/>},
      {path:'fantasy' , element:<Fantasy/>},
      {path:'actionrbg' , element:<ActionRbg/>},
      {path:'flight' , element:<Flight/>},
      {path:'battleroyal' , element:<BattleRoyal/>},
    ]} , 
    {path:'all' , element:<All/>} , 
    {path:'gamesdetails/:id' , element:<GamesDetails/>} , 
    {index:true , element:<Home/>} , 
    {path:'register' , element:<Register/>} , 
    {path:'logout' , element:<Logout/>} , 
    // {path:'login' , element:<Login/>} , 
    {path:'sortby' , element:<SortBy/> , children:[
      {path:'releasdate' , element:<ReleaseDate/>},
      {path:'populariry' , element:<Popularity/>},
      {path:'alphapetical' , element:<Alphapetical/>},
      {path:'relevance' , element:<Relevance/>},
    ]} , 

  ] }
])







function App() {



  return <>
  <UserDataContextProvider>
    <LogOutContextProvider>
    <AllGamesContextProvider>
      <GamesDetailsContextProvider>
        <GamesPlatformContextProvider>
          <SortedGamesContextProvider>
            <CategoriesContextProvider>
  <RouterProvider router={routers}/>
  </CategoriesContextProvider>
  </SortedGamesContextProvider>
  </GamesPlatformContextProvider>
  </GamesDetailsContextProvider>
  </AllGamesContextProvider>
  </LogOutContextProvider>
  </UserDataContextProvider>
  </>
}

export default App;
