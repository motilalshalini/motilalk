import{ BrowserRouter,Route, Routes } from 'React-router-dom';
import './App.css';
import Home from './component/Home';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>               
   </BrowserRouter>
   </>
  );
}

export default App;
