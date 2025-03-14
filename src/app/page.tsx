import { Suspense } from 'react';

import Text from './components/Text';
import ClientComponent from './components/ClientComponent';
import ServerComponent from './components/ServerComponent';

const Home = async (props) => {
  const searchParams = await props.searchParams;
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <ServerComponent page={page} />
      </Suspense>
    </div>
  );
};

export default Home;
