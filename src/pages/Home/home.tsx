import React, { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Form, RepositoryContainer, Title, Error } from './styles';
import logo from '../../assets/img/logo.svg';
import apiClient from '../../services/apiClient';

interface RepositoryData {
  description: string;
  full_name: string;
  owner: {
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [isInputError, setIsInputError] = useState(false);
  const [repositorySearch, setRepositorySearch] = useState('');
  const [repositories, setRepositories] = useState<RepositoryData[]>(() => {
    const repositoriesStorage = localStorage.getItem('@GithubExplorer');

    if (repositoriesStorage) {
      return JSON.parse(repositoriesStorage);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer', JSON.stringify(repositories));
  }, [repositories]);

  async function handleSearchRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const repository = await apiClient.get<RepositoryData>(
        `/repos/${repositorySearch}`,
      );
      setRepositorySearch('');
      setRepositories([...repositories, repository.data]);
      setIsInputError(false);
    } catch (error) {
      setIsInputError(true);
    }
  }

  return (
    <>
      <img src={logo} alt="Logo Github" />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={isInputError} onSubmit={handleSearchRepository}>
        <input
          value={repositorySearch}
          onChange={event => setRepositorySearch(event.target.value)}
          placeholder="ex: usuario/repositório"
        />
        <button type="submit" disabled={!repositorySearch}>
          Pesquisar
        </button>
      </Form>
      {isInputError && (
        <Error>
          Ops, repositório não encontrado!
          <FiXCircle size={16} />
        </Error>
      )}

      <RepositoryContainer>
        {repositories.map(repository => (
          <Link to={`repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.full_name} />
            <div>
              <h3>{repository.full_name}</h3>
              <h5>{repository.description}</h5>
            </div>
            <FiChevronRight size={24} />
          </Link>
        ))}
      </RepositoryContainer>
    </>
  );
};

export default Home;
