import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import MyMessagesContainer from './components/Messages/MyMessagesContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import SettingsContainer from './components/Settings/SettingsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import LoginContainer from './components/Login/LoginContainer';
import ProfileContainer from './components/Profile/PofileContainer';
import { initializeApp } from './redux/app-reducer';
import { login, deleteErrors } from './redux/auth-reducer';
import { addFile, setCurrentFiles } from './redux/file-reducer';
import 'antd/dist/antd.css';

import { Button, Layout, Menu } from 'antd';
import { CameraOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/Common/Preloader/Preloader';
import LoginAntd from './components/Login/LoginAntd';
import FotoComp from './components/FilesComponent/FotoComp';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialaized) {
      return <Preloader />;
    }

    let location = this.props.history.location.pathname;
    let defaultMenuKey = '1';
    switch (location) {
      case '/profile':
        defaultMenuKey = '1';
        break;
      case '/messages':
        defaultMenuKey = '2';
        break;
      case '/users':
        defaultMenuKey = '3';
        break;
      case '/foto':
        defaultMenuKey = '4';
        break;
      case '/settings':
        defaultMenuKey = '5';
        break;
      default:
        console.log('wrong url');
    }

    return (
      <Layout>
        <Header className="header" style={{ padding: 0, minHeight: '7vh' }}>
          <HeaderContainer />
        </Header>
        <Layout>
          <Sider
            style={{ minHeight: '93vh' }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultMenuKey]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<MessageOutlined />}>
                <NavLink to="/messages">Messages</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<TeamOutlined />}>
                <NavLink to="/users">Users</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<CameraOutlined />}>
                <NavLink to="/foto">Foto</NavLink>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                <NavLink to="/settings">Settings</NavLink>
              </Menu.Item>
              {/* <Menu.Item key="4" icon={<UserOutlined />}>
                <NavLink to="/settings">Settings</NavLink>
              </Menu.Item> */}
            </Menu>
          </Sider>
          {/* <Header className="header" style={{ padding: 0 }} /> */}
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background">
              <Route path="/messages/:userId?" render={() => <MyMessagesContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer {...this.props} />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/settings" render={() => <SettingsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route
                path="/foto"
                render={() => (
                  <FotoComp
                    myID={this.props.myID}
                    currentFiles={this.props.currentFiles}
                    filesCount={this.props.filesCount}
                    setCurrentFiles={this.props.setCurrentFiles}
                  />
                )}
              />
              <Route path="/login" render={() => <LoginAntd {...this.props} />} />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  initialaized: state.app.initialaized,
  webdav: state.app.webdav,
  isAuth: state.auth.isAuth,
  redirectAddress: state.auth.redirectAddress,
  loginErrors: state.auth.errors,
  currentFiles: state.file.currentFiles,
  myID: state.auth.myID,
  filesCount: state.file.filesCount,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp, deleteErrors, login, addFile, setCurrentFiles }),
)(App);
