import styles from '../page.module.css';
import { createClient } from '../../../utils/supabase/server';
import Modal from '../newProjectModal/modal';
import AddButton from './addProjectButton';

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
            return (
              <div
                key={project.id}
                style={{
                  borderRadius: '4px',
                  height: '200px',
                  width: '200px',
                  backgroundColor: 'white',
                  margin: '10px',
                  padding: '10px',
                }}
              >
                <p style={{ color: 'black' }}>{project.name}</p>
                <p style={{ color: 'black' }}>{project.description}</p>
                <p style={{ color: 'black' }}>
                  Completed Rows: {project.completedRows}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {show && <Modal />}
    </div>
  );
}
