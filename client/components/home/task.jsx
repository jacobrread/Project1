import { Button } from '../common/button';
import { useContext, useState}  from 'react';
import { Project } from './project';
import { Button } from '../common/button';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { useContext, useState}  from 'react';
import { ApiContext } from '../../utils/api_context';


export const Task = ({ task }) => {
  const api = useContext(ApiContext);
  const [buttonText, setButtonText] = useState('change me');

  const getStatus = () => {
    if(task.status) {
      setButtonText("Completed");
    } else{
      setButtonText("Incomplete");
    }
  }

  const updateStatus = async (task) => {
    task.status = await api.put(`/tasks/${task.id}`);

    const routeChange = () => {
      navigate('/createproject');
    };
    
    console.log(task.status);
    
    getStatus();
  }

  return (
    <div className = "box">
      <p>Title: {task.title}</p>
      <p>Discription: {task.description}</p>
      <p>Time Est: {task.timeEstimate}</p>
      <div>
        <Button onClick={() => updateStatus(task)}>{buttonText}</Button>
      </div>
    </div>
  );
}