import './App.css';
import Feedback from './feed/Feedback';
import Footer from './Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import FeedNav from './navcompo/Feedbacknav';
import EmpNav from './navcompo/EmpNav';



function App() {
  return (
    <div className="App">
     <Router>
     <EmpNav/>
     {/* <FeedNav/> */}
      <Routes>
        <Route path='/' element={<Footer/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        
      </Routes>

     </Router>
     
     <Footer/>
      
    </div>
  );
}

export default App;
