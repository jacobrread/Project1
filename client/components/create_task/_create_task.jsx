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
  const [errorMessage, setErrorMessage] = useState('');
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const navigate = useNavigate();

  const signUp = async () => {
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

    const { token } = await api.post('/projects', {
      timeEstimate,
      description,
      title,
    });
    setAuthToken(token);
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
          <Button type="button" onClick={signUp}>
            Create Task
          </Button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </>
  );
};
