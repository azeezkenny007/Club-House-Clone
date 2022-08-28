import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Website from './pages/Website';
import PlanLayouts from './pages/layouts/PlanLayouts';
import Phoneconfirmation from './pages/Phoneconfirmation';
import Confirm from './pages/Confirm';
import AllowNotification from './pages/AllowNotification';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import AppLayouts from './pages/layouts/AppLayouts';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from '../src/pages/Profile'
import Activity from './pages/Activity';
import Upcoming from './pages/Upcoming';




function App() {
  const planLayoutPath=[<Website/>,<Phoneconfirmation/>,<Confirm/>,<AllowNotification/>]
  const appLayoutsPath = [<Home />,<Profile/>,<Upcoming/>,<Activity/>,<Explore/>];
  const planLayoutName=['Website',"PhoneConfirmation","Confirm","AllowNotification"]
  let appElementPath={...appLayoutsPath}
  let elementPath={...planLayoutPath}
  const element=elementPath
  console.log(element)
  console.log(appLayoutsPath)
  let books=[]
  
   
  const elementName=()=>{
    for(let i=0;i<planLayoutName.length;i++){
       books.push(planLayoutName[i].toString())
    }
     console.log(books);
  }

  elementName()
 
  return (
    <div className="text-lg ">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Website />} />
            <Route path="/invite" element={<Phoneconfirmation />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/allow_notification" element={<AllowNotification />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="*" element={<Navigate replace to="/"/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
