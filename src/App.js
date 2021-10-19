import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login/Login';
import Signup from './Components/Authentication/Signup/Signup';
import ServiceInfo from './Components/Home/Services/ServiceInfo/ServiceInfo';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* wraped the router with context here  */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceInfo></ServiceInfo>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
