import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Container from '../../components/Container';

import { Loading, Owner, IssueList } from './styles';

const Repository = ({ match }) => {
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepo() {
      try {
        const repoName = decodeURIComponent(match.params.repo);

        const [resRepo, resIssues] = await Promise.all([
          api.get(`/repos/${repoName}`),
          api.get(`/repos/${repoName}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ]);

        setRepo(resRepo.data);
        setIssues(resIssues.data);
      } catch (error) {
        setErrors(error.message);
      }

      setIsLoading(false);
    }

    fetchRepo();
  }, [match.params.repo]);

  if (isLoading) return <Loading>Carregando...</Loading>;

  if (errors) return <Loading>{errors}</Loading>;

  return (
    <Container>
      <Owner>
        <Link to="/">Voltar aos repositórios</Link>
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />

        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>

      <IssueList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={issue.html_url}
                >
                  {issue.title}
                </a>

                {issue.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssueList>
    </Container>
  );
};

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repo: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Repository;
