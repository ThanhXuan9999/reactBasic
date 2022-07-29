import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/myComponent';
import MainPageTodo from './ToDo/MainPageTodo';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUsers from './Users/ListUsers';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <Nav />

          <img src={logo} className="App-logo" alt="logo" />

          <Switch>

            <Route path={"/"} exact>
              <Home />
            </Route>

            <Route path={"/Todo"}>
              <MainPageTodo />
            </Route>

            <Route path={"/About"}>
              <MyComponent />
            </Route>

            <Route path={"/listUsers"} exact>
              <ListUsers />
            </Route>



          </Switch>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

      </div>

    </BrowserRouter>
  );
}

export default App;
