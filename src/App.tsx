import Home from './components/home'
import './App.css'
import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navlayout from './layout/Navlayout';
import NotFound from './NotFound';

function App() {
 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Navlayout />}>
       <Route path="/" element={<Home />} />
       <Route path="/not-found" element={<NotFound />} />
     </Route>
   )
 );

 return (
   <div>
     <RouterProvider router={router}></RouterProvider>
   </div>
 );
}

export default App
