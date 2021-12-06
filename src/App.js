import './App.css';
import Header from './components/Header/Header';
import MyMessages from './components/Messages/MyMessages';
import Navbar from './components/Navbar/navbar';
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/PofileContainer';


const App = (props) => {
    return (
        <div style={{
            backgroundImage: `url("https://i.redd.it/c3uhsgo1vx541.jpg")`
        }}>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() => <MyMessages />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default App;
