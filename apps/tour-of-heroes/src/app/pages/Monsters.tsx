import { useGetMonstersQuery } from '@apollo-client-examples/gql-hooks';

import { Link } from 'react-router-dom';

export const Monsters = () => {
  const { data, error, loading } = useGetMonstersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!! {JSON.stringify(error)}</div>;

  return (
    <ul>
      {data &&
        data.monsters.map((monster) => (
          <li key={monster.id}>
            <Link to={`/monster/${monster.id}`}>{monster.name}</Link>
          </li>
        ))}
    </ul>
  );
};
