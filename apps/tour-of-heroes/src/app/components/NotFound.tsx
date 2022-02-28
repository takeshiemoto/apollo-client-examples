import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        このページはすでに削除されているか、URLが間違っている可能性があります。
      </p>
      <Link to={'/'}>トップへ</Link>
    </div>
  );
};
