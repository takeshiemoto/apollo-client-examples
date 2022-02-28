import { useGetMonsterQuery } from '@apollo-client-examples/gql-hooks';
import { useParams } from 'react-router-dom';
import { NotFound } from '../components/NotFound';

export const Monster = () => {
  const params = useParams<{ id: string }>();

  const { data, error, loading } = useGetMonsterQuery({
    skip: !params.id,
    variables: {
      id: Number(params.id),
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!! {JSON.stringify(error)}</div>;

  if (!data?.monsters_by_pk) {
    return <NotFound />;
  }

  return <div>Monster</div>;
};
