import { Project } from './project';
import { Button } from '../common/button';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { useContext, useState}  from 'react';
import { ApiContext } from '../../utils/api_context';
import { Task } from './task';


export const Tasks = ({ project }) => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Incomplete");
  const api = useContext(ApiContext);

  const updateStatus = async (task) => {
    task.status = await api.put(`/tasks/${task.id}`);
  
    if(task.status) {
      setButtonText("Completed");
    } else{
      setButtonText("Incomplete");
    }
  };

  return (
    <>
      <div> 
        {project.tasks.map((task)=>(
          <Task task={task} />
        ))} 
      </div>
    </>
  );
};
