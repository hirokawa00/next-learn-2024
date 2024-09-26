import { Client } from './client';
import { getServerSideData } from './server';

export default async function Page() {
  const data = await getServerSideData();
  return (
    <div>
      <Client user={data} />
    </div>
  );
}
