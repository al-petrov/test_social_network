import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MyMessagesContainer from './components/Messages/MyMessagesContainer';
import Navbar from './components/Navbar/navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import SettingsContainer from './components/Settings/SettingsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import ProfileContainer from './components/Profile/PofileContainer';

const App = props => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.redd.it/c3uhsgo1vx541.jpg")`,
      }}
    >
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/messages/:userId?" render={() => <MyMessagesContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer {...props} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <SettingsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
