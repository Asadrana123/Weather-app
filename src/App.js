import './App.css';
import Details from './Components/Details';
import Navbar from './Components/Navbar';
import Middle from './Components/Middle';
function App() {
  return (
    <div className='main-container'>
    <div className='sub-container'><Navbar/></div>
    <div className='sub-container'><Middle/></div>
    <div className='sub-container'><Details/></div>
    </div>
  );
}
export default App;
