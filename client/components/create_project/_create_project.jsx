import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../utils/auth_context';
import { ApiContext } from '../../utils/api_context';
import { Paper } from '../common/paper';
import { Input } from '../common/input';
import { Button } from '../common/button';

export const CreateProject = () => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const navigate = useNavigate();

  const signUp = async () => {
    if (name === '') {
      setErrorMessage('Name cannot be blank');
      return;
    }

      await api.post('/projects', {
      name,
    });
    navigate('/');
  };

  return (
    <>
      <Paper>
        <div>Enter Project Name</div>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="flex flex-row justify-end mt-2">
          <Button type="button" onClick={signUp}>
            Create Project
          </Button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </>
  );
};
