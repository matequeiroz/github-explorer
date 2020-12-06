import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import apiClient from '../../services/apiClient';
import {
  ContentProfile,
  Header,
  ContentProfileInformation,
  IssueContainer,
} from './styles';

interface ParamsProps {
  name: string;
}

interface RepositoryData {
  description: string;
  full_name: string;
  open_issues_count: number;
  stargazers_count: number;
  forks_count: number;
  owner: {
    avatar_url: string;
  };
}

interface IssueData {
  title: string;
  user: {
    login: string;
  };
  html_url: string;
  created_at: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<ParamsProps>();
  const [repository, setRepository] = useState<RepositoryData>();
  const [repositoryIssues, setRepositoryIssues] = useState<IssueData[]>();

  useEffect(() => {
    async function fetchRepository(): Promise<void> {
      const [repositoryData, issues] = await Promise.all([
        apiClient.get<RepositoryData>(`/repos/${params.name}`),
        apiClient.get<IssueData[]>(`/repos/${params.name}/issues`),
      ]);
      setRepository(repositoryData.data);
      setRepositoryIssues(issues.data);
    }

    fetchRepository();
  }, [params.name]);

  return (
    <>
      <Header>
        <img src={logo} alt="Logo Github" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <ContentProfile>
        <img src={repository?.owner.avatar_url} alt="" />
        <div className="profile">
          <h3>{repository?.full_name}</h3>
          <h5>{repository?.description}</h5>
        </div>
      </ContentProfile>

      <ContentProfileInformation>
        <div className="information-item">
          <span>{repository?.stargazers_count}</span>
          <h5>Stars</h5>
        </div>
        <div className="information-item">
          <span>{repository?.forks_count}</span>
          <h5>Forks</h5>
        </div>
        <div className="information-item">
          <span>{repository?.open_issues_count}</span>
          <h5>Issues abertas</h5>
        </div>
      </ContentProfileInformation>
      <IssueContainer>
        {repositoryIssues?.map(issue => (
          <a href={issue.html_url}>
            <div>
              <h3>{issue.title}</h3>
              <h5>
                {issue.user.login} -{' '}
                {new Date(issue.created_at).toLocaleDateString('pt-br')}
              </h5>
            </div>
            <FiChevronRight size={24} />
          </a>
        ))}
      </IssueContainer>
    </>
  );
};

export default Repository;
