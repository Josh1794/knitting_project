'use client';
import Link from 'next/link';
import styles from './home.module.css';

export default function SmallProject({ project }) {
  console.log(project);
  return (
    <div>
      <Link href={`/?project=${project.id}`}>
        <div key={project.id} className={styles.smallProjectCard}>
          <p>{project.name}</p>
          <p>{project.description}</p>
          <p>Completed Rows: {project.rowsCompleted}</p>
          <p>Total Rows: {project.totalRows}</p>
        </div>
      </Link>
    </div>
  );
}
