import styles from '../page.module.css';
import { createClient } from '../../../utils/supabase/server';

export default async function LandingPage({ user, projects }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('owner', user.user.id);
  return (
    <div>
      <button>Add</button>

      <div className={styles.center}>
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {data.map((project) => {
            return (
              <div
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
