
import Navbar from "./components/NavBar/NavBar.js";
import './components/NavBar/NavBar.css'
import './App.css'
import Banner from "./components/Banner/Banner.js";
import Rowpost from "./components/RowPost/RowPost.js";
import { comedy,action,originals } from './urls'
function App() {
  return (
  <div>
    <Navbar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals' />
    <Rowpost url={action} title='Action' isSmall />
    <Rowpost url={comedy} title='ComedyMovies' isSmall />

  </div>
  );
}

export default App;
