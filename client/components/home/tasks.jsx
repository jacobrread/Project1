import { Project } from './project';
import { Button } from '../common/button';
import { useNavigate } from 'react-router';

export const Projects = ({ projects }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate('/createproject');
  };


  return (
    <>
      <div>
        <Button onClick={routeChange}>Click to create new project</Button>
      </div>
      <div className="flex-1">
        {projects.map((project) => (
          <div key={project.id} className="border-2 rounded p-4">
            {project.name}
            <div>
              <Button onClick={() => deleteNote(note)}>Create Task</Button>
            </div>
            <div>
              <Button onClick={() => deleteNote(note)}>Invite Member</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
