import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/48067346?v=4"
            alt="Profile"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Graduando em Sistemas para Internet </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/48067346?v=4"
            alt="Profile"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Graduando em Sistemas para Internet </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/48067346?v=4"
            alt="Profile"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Graduando em Sistemas para Internet </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
