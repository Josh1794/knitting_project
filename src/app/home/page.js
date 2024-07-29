import { createClient } from '../../../utils/supabase/server';
import Modal from '../newProjectModal/modal';
import AddButton from './addProjectButton';
import SmallProject from './smallProject';
import { redirect } from 'next/navigation';

export default async function LandingPage({ user, searchParams }) {
  const { show } = searchParams;
  console.log(searchParams);
  const supabase = createClient();
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('owner', user.user.id);

  if (searchParams.projectPage) {
    redirect(`/projectPage/?id=${searchParams.projectPage}`);
  }
  return (
    <div>
      {show && <Modal />}
      <div
        style={{
          marginTop: '100px',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <AddButton />

        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {data.map((project) => {
            return <SmallProject project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
