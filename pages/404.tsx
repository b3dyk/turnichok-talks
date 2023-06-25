import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { NotFoundFeature } from 'src/features/notFound';

type TNotFoundPage = NextPage & {
  getLayout?: (page: NextPage) => ReactNode;
};

const NotFound: TNotFoundPage = () => <NotFoundFeature />;

NotFound.getLayout = (page: NextPage) => <>{page}</>;

export default NotFound;
