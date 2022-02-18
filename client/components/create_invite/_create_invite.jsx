import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../utils/auth_context';
import { ApiContext } from '../../utils/api_context';
import { Paper } from '../common/paper';
import { Input } from '../common/input';
import { Button } from '../common/button';

export const CreateInvite = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [, setAuthToken] = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const api = useContext(ApiContext);
  const navigate = useNavigate();
  const{id} = useParams();

  const sendInvite = async () => {
    if (email === '') {
      setErrorMessage('Email cannot be blank');
      return;
    }
    
        const res = await api.post(`/projects/${id}/invite`, {
          id, 
          email,
        }); 
        navigate('/');
  };

  return (
    <>
      <Paper>
        <div>Enter Team Members Email</div>
        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="flex flex-row justify-end mt-2">
          <Button type="button" onClick={sendInvite}>
            Send Invite
          </Button>
        </div>
        <div className="flex">{errorMessage}</div>
      </Paper>
    </>
  );
};