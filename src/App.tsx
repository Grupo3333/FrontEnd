import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Contato from './paginas/contato/Contato';
import './App.css';
import DeletarTema from './components/temas/deletarTema/deletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/deletarPostagem';
import CadastroTema from './components/temas/cadastroTema/cadastroTema';
import CadastroPost from './components/postagens/cadastroPost/cadastroPost';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Feed from './paginas/feed/Feed';


function App() {
  return (
    <Provider store={store } >
      <ToastContainer />
      <Router >

        <Navbar />

        <Switch >

          <div style={{ minHeight: '100vh' }} className="caixa">

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/feed'>
              <Feed />
            </Route>

            <Route path='/cadastrousuario' >
              <CadastroUsuario />
            </Route>

            <Route path='/temas' >
              <ListaTema />
            </Route>

            <Route path='/posts'>
              <ListaPostagem />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
            <Route path='/contato'>
              <Contato />
            </Route>
            

          </div>

        </Switch>

        <Footer />

      </Router>
    </Provider>

  );
}

export default App;