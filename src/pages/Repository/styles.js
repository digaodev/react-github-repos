import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 32px;
  font-weight: bold;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    border-radius: 50%;
    margin-top: 24px;
    width: 120px;
  }

  h1 {
    font-size: 24px;
    margin-top: 24px;
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 1.4;
    margin-top: 5px;
    max-width: 400px;
    text-align: center;
  }

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const IssueList = styled.ul`
  border-top: 1px solid #eee;
  list-style: none;
  margin-top: 32px
  padding-top: 32px;

  li {
    display: flex;

    border: 1px solid #eee;
    border-radius: 4px;
    padding: 16px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      border: 2px solid #eee;
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          border-radius: 4px;
          color: #333;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          line-height: 15px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        color: #666;
        font-size: 12px;
        margin-top: 8px;

      }
    }
  }
`;
