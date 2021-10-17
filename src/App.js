import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/navbar';
import Profile from './components/Pofile';


const App = () => {
  return (
    <div className='app-wrapper' >
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
