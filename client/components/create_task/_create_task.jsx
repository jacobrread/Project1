import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../utils/auth_context';
import { ApiContext } from '../../utils/api_context';
import { Paper } from '../common/paper';
import { Input } from '../common/input';
import { Button } from '../common/button';
import { title } from 'process';

export const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');
  const [parentProjectId, setParentProjectId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const api = useContext(ApiContext);
  const navigate = useNavigate();

  const createTask = async () => {
    if (title === '') {
      setErrorMessage('Name cannot be blank');
      return;
    }
    if (description === '') {
      setErrorMessage('Name cannot be blank');
      return;
    }
    if (timeEstimate === '') {
      setErrorMessage('Name cannot be blank');
      return;
    }

    // setParentProjectId(props.location.state.parentProjectId);

    await api.post('/tasks', {
      timeEstimate,
      description,
      title,
      // how do we send in the parentProjectId? 
      // Do we get the parenProjectId from projects.jsx? If so, how?
    });
    navigate('/');
  };

  return (
    <>
      <Paper>
        <div>Enter Task Name</div>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div>Enter Description</div>
        <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div>Enter Time Estimate</div>
        <Input type="text" value={timeEstimate} onChange={(e) => setTimeEstimate(e.target.value)} />
        <div className="flex flex-row justify-end mt-2">
          <Button type="button" onClick={createTask}>
            Create Task
          </Button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </>
  );
};

// TODO:
// the post for tasks has Body for a parameter. Is that what is passed in via the post method (line 33)
// If so, do we need to pass in the rest of the fields in lines 41-46 of tasks.controller?
