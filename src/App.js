import './App.css';
import Header from './components/Header/Header';
import MyMessages from './components/Messages/MyMessages';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/Pofile';
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from './components/Footer/Footer';


const App = (props) => {
    let myDataMessages = props.state.messages;
    let myDataPosts = props.state.profilePage;
    return (
        <BrowserRouter>
            <div style={{
                backgroundImage: `url("https://i.redd.it/c3uhsgo1vx541.jpg")`
            }}>
                <div className='app-wrapper'>
                    <Header />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path='/messages' render={ () => <MyMessages state={props.state} dispatch={props.dispatch} />} />
                        <Route path='/profile'  render={ () => <Profile state={props.state} dispatch={props.dispatch} />} />
                        <Route path='/news'  render={ () => <News />} />
                        <Route path='/music'  render={ () => <Music />} />
                        <Route path='/settings'  render={ () => <Settings />} />
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
