import { graphql } from "react-apollo";
import gql from "graphql-tag";

import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";

function Repositories({ data: { loading, error, viewer } }) {
  if (error) {
    return <ErrorMessage message="Error loading repositories" />;
  }

  const { name, repositories: { nodes: repositories } } = viewer;

  if (repositories && repositories.length) {
    return (
      <section>
        <ul>
          {repositories.map(repository => (
            <li key={repository.id}>
              <a href={repository.url}>{repository.name}</a>
            </li>
          ))}
        </ul>
        <style jsx>{`
          section {
            padding: 0 2rem;
          }
          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style-type: decimal;
            margin: 0;
            padding: 0;
          }
          li {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            transition: transform 200ms ease-out;
            white-space: nowrap;
          }
          li:hover {
            transform: scale(2, 2);
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </section>
    );
  }

  return <LoadingMessage message="Loading repositories..." />;
}

export const repositories = gql`
  query($number_of_repos: Int!) {
    viewer {
      name
      repositories(last: $number_of_repos) {
        nodes {
          id
          name
          url
        }
      }
    }
  }
`;

export default graphql(repositories, {
  options: {
    variables: {
      number_of_repos: 5
    }
  },
  props: ({ data }) => ({
    data
  })
})(Repositories);
