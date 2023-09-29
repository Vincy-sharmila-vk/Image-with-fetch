import './App.css';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Person from './Components/Person';
import Register from './Components/Register';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Person/>}/>
            <Route path='register' element={<Register/>}/>
  
        </Route>
    )
  )
  return (
    <div className="App">
               <RouterProvider router={router}/>

    </div>
  );
}

export default App;
