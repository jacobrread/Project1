import { Project } from './project';
import { Button } from '../common/button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Input } from '../common/input';


export const Projects = ({ projects }) => {
  // const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const goToProject = () => {
    navigate('/createproject');
  };
  
  const goToTask = (id) => {
      navigate(`/createtask/${id}`);
    };

  const invite = () => {    
      navigate('/createinvite');
  }

  // for testing purposes
  console.log(projects);
  
  return (
    <>
      <div>
        <Button onClick={goToProject}>Click to create new project</Button>
      </div>
      <div className="flex-1">
        {projects.map((project) => (
          <div key={project.id} className="border-2 rounded p-4">
            {project.name}
            <div>
              <Button onClick={() => goToTask(project.id)}>Create Task</Button>
              <Button onClick={() => invite()}>Invite Member</Button>
            </div>
            <div> 
              {project.tasks.map((task)=>(
                <div>
                  <p>Title: {task.title}</p>
                </div>
              ))} 

            </div>
          </div>
        ))}
      </div>
    </>
  );
};
