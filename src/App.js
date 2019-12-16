import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation"
import MainPic from "./components/MainPic/MainPic";
import Avengers from "./components/Avengers/Avengers";
import AgeOfUltron from "./components/AgeOfUltron/AgeOfUltron";
import InfinityWar from "./components/InfinityWar/InfinityWar";
import Endgame from "./components/Endgame/Endgame";
import Gallery from "./components/Gallery/Gallery";

const App = () => (
    <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route path='/' exact component={MainPic}/>
            <Route path='/avengers' exact component={Avengers}/>
            <Route path='/age-of-ultron' exact component={AgeOfUltron}/>
            <Route path='/infinity-war' exact component={InfinityWar}/>
            <Route path='/endgame' exact component={Endgame}/>
            <Route path='/gallery' exact component={Gallery}/>
            <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default App;