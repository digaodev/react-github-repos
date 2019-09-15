import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
import api from '../../services/api';

import { Form, SubmitButton, List, Input, ErrorMessage } from './styles';

const Main = () => {
  const [repos, setRepos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState(null);
  const [hasInputError, setHasInputError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const savedRepos = localStorage.getItem('repos');

    if (savedRepos) {
      setRepos(JSON.parse(savedRepos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repos));
  }, [repos]);

  function handleInputChange({ target }) {
    setInputValue(target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setHasInputError(false);
    setErrors(null);

    if (inputValue === '') {
      setIsSubmitting(false);
      setHasInputError(true);
      inputRef.current.focus();
      return;
    }

    try {
      const repoExists = repos.find(repo => repo.name === inputValue);

      if (repoExists) {
        throw new Error('Repo já existe na lista');
      }

      const res = await api.get(`/repos/${inputValue}`);

      const newRepo = {
        id: res.data.id,
        name: res.data.full_name,
      };

      setRepos(currentRepos => [newRepo, ...currentRepos]);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrors('Repo não encontrado');
      } else {
        setErrors(error.message);
      }
    }

    setIsSubmitting(false);
    setInputValue('');
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Adicionar repositório"
          value={inputValue}
          onChange={handleInputChange}
          hasError={hasInputError}
          ref={inputRef}
        />

        <SubmitButton disabled={isSubmitting}>
          {isSubmitting ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>
      {errors && (
        <ErrorMessage>
          <p>{errors}</p>
        </ErrorMessage>
      )}
      <List>
        {repos.map(repo => (
          <li key={repo.id}>
            <span>{repo.name}</span>
            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
              Detalhe
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Main;
