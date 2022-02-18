import { Project } from './project';
import { Button } from '../common/button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Input } from '../common/input';


export const Projects = ({ projects }) => {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate('/createproject');
  };
  
  const goToTask = (id) => {
      navigate(`/createtask/${id}`);
    };

  const invite = (id) => {    
      navigate(`/createinvite/${id}`);
  }

const [buttonText, setButtonText] = useState("Not done");

const changeText = (text) => setButtonText(text);




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
              <Button onClick={() => invite(project.id)}>Invite Member</Button>
            </div>
            <div> 
              {project.tasks.map((task)=>(
                <div className = "box">
                  <p>Title: {task.title}</p>
                  <p>Discription: {task.description}</p>
                  <p>Time Est: {task.timeEstimate}</p>
                  <div>
                  <p>Status: </p>
                  <Button onClick={() => setButtonText("Done")}>{buttonText}</Button>
                    </div>
                </div>
              ))} 

            </div>
          </div>
        ))}
      </div>
    </>
  );
};
