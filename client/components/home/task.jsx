import { Button } from '../common/button';
import { useContext, useState, useEffect}  from 'react';
import { Button } from '../common/button';
import { ApiContext } from '../../utils/api_context';
import { useContext, useState}  from 'react';
import { ApiContext } from '../../utils/api_context';
import { useNavigate } from 'react-router';



export const Task = ({ task }) => {
  const api = useContext(ApiContext);
  const [buttonText, setButtonText] = useState(task.status);
  const navigate = useNavigate();


  const updateStatus = async (task) => {
    await api.put(`/tasks/${task.id}`);
    
    if(task.status == 'Incomplete') {
      setButtonText("Completed");
    } else{
      setButtonText("Incomplete");
    }
    window.location.reload(false);
  }


  const getUser = async () =>{
    // todo make this get the user name of the assigned user.
  }

  const assignUser = (id) => {    
    navigate(`/assignuser`);
}

  return (
    <div className = "box">
      <Button onClick={() => assignUser(task.parentProjectId)}>Assign User</Button>
      <p>User Assigned: {task.assignUser}</p>
      <p>Title: {task.title}</p>
      <p>Discription: {task.description}</p>
      <p>Time Est: {task.timeEstimate}</p>
      <div>
        <Button onClick={() => updateStatus(task)}>{buttonText}</Button>
      </div>
    </div>
  );
}

// TODO: figure out how to display the user's name on line 41