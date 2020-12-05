import React from 'react';

import { Form, Title } from './styles';
import logo from '../../assets/img/logo.svg';

const Home: React.FC = () => (
  <>
    <img src={logo} alt="Logo Github" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <input placeholder="Digite aqui" />
      <button type="submit"> Pesquisar </button>
    </Form>
  </>
);

export default Home;
