import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MyMessages from './components/Messages/MyMessages';
import Navbar from './components/Navbar/navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import SettingsContainer from './components/Settings/SettingsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Profile from './components/Profile/Pofile';
import LoginContainer from './components/Login/LoginContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileInfoContainer';

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
          <Route path="/messages" render={() => <MyMessages />} />
          <Route path="/profile/:userId?" render={() => <Profile {...props} />} />
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
