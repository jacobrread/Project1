import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';

export const Home = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    setLoading(false);
  }, []);

  const logout = async () => {
    const res = await api.del('/sessions');
    if (res.success) {
      setAuthToken(null);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-4">
        <h1>Welcome {user.firstName}</h1>
        <Button type="button" onClick={logout}>
          Logout
        </Button>
        <Button type="button">Create Project</Button>
        {/* or you could do it this way???
        <Link to="createproject">Create Project</Link> */}
        {roles.includes('admin') && (
          <Button type="button" onClick={() => navigate('/admin')}>
            Admin
          </Button>
        )}
      </div>

      <div>
        <h2>Your Projects</h2>
        {roles.includes('admin') && <p>Projects you created go here</p>}
      </div>

      <div>
        <h2>Other Projects</h2>
      </div>
    </>
  );
};
