import styles from '../page.module.css';
import { createClient } from '../../../utils/supabase/server';
import Modal from '../newProjectModal/modal';
import AddButton from './addProjectButton';
import SmallProject from './smallProject';

export default async function LandingPage({ user, searchParams }) {
  const { show } = searchParams;
  console.log(show);
  const supabase = createClient();
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('owner', user.user.id);
  return (
    <div>
      <AddButton />
      <div className={styles.center}>
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {data.map((project) => {
            return <SmallProject project={project} />;
          })}
        </div>
      </div>
      {show && <Modal />}
    </div>
  );
}
