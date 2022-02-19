import { useGetMonstersQuery } from '@apollo-client-examples/gql-hooks';

export const Monsters = () => {
  const { data, error, loading } = useGetMonstersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!! {JSON.stringify(error)}</div>;

  return (
    <ul>
      {data &&
        data.monsters.map((monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
    </ul>
  );
};
