/*import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact';
import Services from './pages/services';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/c' element={<Contact/>}/>
        <Route path='/s' element={<Services/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;


/*import Radium from 'radium';
import Appz from './radiumnew';
import './App.css';
import BasicButtons from './button';

function App(){
  return(
    <>
    <div className="class">
      <h1>Hello</h1>
      <BasicButtons/>
    </div>
</>
  );
}
export default Radium(App);*/



//import ErrorBoundary from './Errorboundary';
//import Counter from './Counter';
//import EnhancedLikes from './Like';
import MovieList from "./component/MovieList";
import Nav from "./component/navbar";
import './App.css';
import AddMovie from "./component/AddMovie.js";


import { MovieProvider } from "./component/MovieContext";
export function App()
{
      return (
        <MovieProvider>
          
          <div className="App">
        <Nav/>
       <AddMovie/>
        <MovieList/>
      
            </div>
            </MovieProvider>
             
            
      );
      }
 
   
export default App;