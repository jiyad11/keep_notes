import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";     
          
import './App.css';
import './MyStyle.css';
import Header from './components/Header';
import Notepage from "./pages/Notepage";
import Noteslistpage from "./pages/Noteslistpage";
        
function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
      <Header />
        <Routes>
          <Route path="/" exact element={<Noteslistpage />} />
          <Route path="/note/:noteId" element={<Notepage />}/>
        </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;