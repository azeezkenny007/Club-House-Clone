import React from 'react'
import Home from './Home';
import Explore from './Explore';
import Profile from './Profile';
import Activity from './Activity';
import Upcoming from './Upcoming';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AppLayouts from './layouts/AppLayouts';

function AppTwo() {
  return (
    <div>
      <BrowserRouter>

        <AppLayouts>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
        </AppLayouts>
      </BrowserRouter>
    </div>
  );
}

export default AppTwo