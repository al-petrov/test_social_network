import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/Pofile';


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
