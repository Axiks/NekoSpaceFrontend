import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import { HeaderComponent } from './components/header/Header';
import {AnimePageComponent} from './components/anime/AnimePage';
import {NotFoundPageComponent} from './components/NotFound/NotFoundPage';

import { HomePageComponent } from './components/home/HomePage';
import { Container, VStack } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './app/store'

import LoginPageComponent from './components/oauth/LoginPage/LoginPage';
import SignUpPageComponent from './components/oauth/SignUp/SignUpPage';
import UserPageComponent from './components/user/UserPageComponent';
import UserLogOutPageComponent from './components/oauth/LogOut';
import ProvideAnimeSuggestionPage from './components/provideSuggestion/ProvideAnimeSuggestionPage';
import UserSettingPage from './components/user/userSetting/UserSettingPage';
import AdminPage from './components/admin/AdminPage';

function App() {

  return (
    <div className="App">
       <Provider store={store}>
        <Router>
          {/* <VStack> */}
            <Container maxW='container.2xl'><HeaderComponent /></Container>
            <Container maxW='container.xl'>
              <Routes>
                <Route exact path="/" element={<HomePageComponent />}/>
                <Route exact path="/anime/:anime_id" element={<AnimePageComponent />}/>
                <Route exact path="/me" element={<UserPageComponent />}/>
                <Route exact path="/me/setting" element={<UserSettingPage />}/>
                <Route exact path="/provideSuggestion/:anime_id" element={<ProvideAnimeSuggestionPage />}/>
                <Route exact path="/login" element={<LoginPageComponent />}/>
                <Route exact path="/signUp" element={<SignUpPageComponent />}/>
                <Route exact path="/logOut" element={ <UserLogOutPageComponent /> }/>
                <Route exact path="/admin" element={ <AdminPage /> }/>
                <Route path="*" element={<NotFoundPageComponent/>}/>
              </Routes>
            </Container>
          {/* </VStack> */}
        </Router>
       </Provider>
    </div>
  );
}
export default App;
