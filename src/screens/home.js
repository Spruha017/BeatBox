import React from 'react'
import Library  from './library'
import Feed from './feed'
import Favorites from './favorites'
import Trending from './trending'
import Player from './player'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <Router>
         <Routes>
            <Route  path="/" element={<Library to="" />} />
            <Route  path="/feed" element={<Feed to="" />} />
            <Route  path="/favorites" element={<Favorites  to=""/>} />
            <Route  path="/trending" element={<Trending to="" />} />
            <Route  path="/player" element={<Player to=""  />} />
         </Routes>
    </Router>
   
  )
}
