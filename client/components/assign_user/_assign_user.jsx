import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../utils/auth_context';
import { ApiContext } from '../../utils/api_context';
import { Paper } from '../common/paper';
import { Input } from '../common/input';
import { Button } from '../common/button';

export const AssignUser = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [, setAuthToken] = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const api = useContext(ApiContext);
  const navigate = useNavigate();
  const{id} = useParams();

  const assign = async () => {
    if (email === '') {
      setErrorMessage('Email cannot be blank');
      return;
    }
    
    await api.put(`/projects/assignuser/${id}`, {
      id, 
    }); 
    navigate('/');
  };

  return (
    <>
      <Paper>
        <div>Enter Project Members Name That You Want to Assign This Task</div>
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="flex flex-row justify-end mt-2">
          <Button type="button" onClick={assign}>
            Send Invite
          </Button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </>
  );
};

// TODO: 
// Does the assignuser functionality work? -> does teh controller and service work too?