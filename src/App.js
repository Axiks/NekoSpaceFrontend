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
import LoginPageComponent from './components/oauth/LoginPage/LoginPage';
import SignUpPageComponent from './components/oauth/SignUp/SignUpPage';
import UserPageComponent from './components/user/UserPageComponent';
import UserLogOutPageComponent from './components/oauth/LogOut';

import { Provider } from 'react-redux'
import store from './app/store'

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
                <Route exact path="/login" element={<LoginPageComponent />}/>
                <Route exact path="/signUp" element={<SignUpPageComponent />}/>
                <Route exact path="/logOut" element={ <UserLogOutPageComponent /> }/>
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
