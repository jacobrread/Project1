import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ApiContext } from '../../utils/api_context';
import { AuthContext } from '../../utils/auth_context';
import { RolesContext } from '../../utils/roles_context';
import { Button } from '../common/button';
import { Projects } from './projects';

export const Home = () => {
  const [, setAuthToken] = useContext(AuthContext);
  const api = useContext(ApiContext);
  const roles = useContext(RolesContext);
  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(async () => {
    const res = await api.get('/users/me');
    setUser(res.user);
    setLoading(false);

    const { projects } = await api.get('/projects');
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
      <div className="top-bar">
        <div className="p-4">
          <h1>Welcome {user.firstName}</h1>
          <Button type="button" onClick={logout}>
            Logout
          </Button>
          {roles.includes('admin') && (
            <Button type="button" onClick={() => navigate('/admin')}>
              Admin
            </Button>
          )}
        </div>
      </div>

      <div className="spacer"></div>
      <div classname="rounded project">
        <h1>Here are a list of your projects:</h1>
        <Projects projects={projects} />
      </div>

      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
      <div>ask;jfhaskjhf a;sjhfa;s jhjfa;lskdhjfl ajshf ajks;fa jslka sljk hfas khas hal</div>
    </>
  );
};
