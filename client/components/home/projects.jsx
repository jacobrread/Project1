import { Project } from './project';

export const Projects = ({ projects }) => {
  return (
    <>
      <div>
        <h2>Create New Project</h2>
        <Button>Click to create new project</Button>
      </div>
      <div className="flex-1">
        {projects.map((project) => (
          <div key={project.id} className="border-2 rounded p-4">
            {project.name}
            <div>
              <Button onClick={() => deleteNote(note)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
