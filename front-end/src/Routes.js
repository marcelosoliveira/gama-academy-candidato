import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Candidato from './pages/Candidato';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Cadastro} />
    <Route exact path="/cadastro" component={Cadastro} />
    <Route exact path="/candidato" component={Candidato} />
  </Switch>
);

export default Router;
