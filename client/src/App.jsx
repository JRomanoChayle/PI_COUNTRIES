import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing/landing'
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getCountries, getActivities } from './redux/action';



function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCountries()); // Cuando el componente home se monta trae todas las card
    dispatch(getActivities()); // trae todas las actividades que necesita el filtro Actividades en el Home
}, []);

  return (
      <div>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/activity' element={<Form />} />;
        </Routes>
       </div>
  )
}

export default App
