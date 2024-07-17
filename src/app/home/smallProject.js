'use client';

export default function SmallProject({ project }) {
  console.log(project);
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
      <p style={{ color: 'black' }}>Completed Rows: {project.rowsCompleted}</p>
      <p style={{ color: 'black' }}>Total Rows: {project.totalRows}</p>
    </div>
  );
}
