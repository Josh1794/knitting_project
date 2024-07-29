import { createClient } from '../../../utils/supabase/server';
import RowCount from './rowCount';
import styles from './project.module.css';
export default async function Project({ searchParams }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('Projects')
    .select('*')
    .eq('id', searchParams.id);

  console.log(data);
  return (
    <div className={styles.projectPage}>
      <div className={styles.projectCard}>
        <h4
          style={{
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '2rem',
          }}
        >
          {data[0].name}
        </h4>
        <h4
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
        >
          Completed Rows
        </h4>
        <RowCount data={data} />
        <h4
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '1.5rem',
          }}
        >
          Total Rows: {data[0].totalRows}
        </h4>
        <h4
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '1.5rem',
          }}
        >
          Percent Completed:{' '}
          {((data[0].rowsCompleted / data[0].totalRows) * 100).toFixed(1)}%
        </h4>
      </div>
    </div>
  );
}
