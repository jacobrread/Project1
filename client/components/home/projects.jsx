import { Project } from './project';
import { Button } from '../common/button';
import { useNavigate } from 'react-router';
import react, { useState } from 'react';


export const Projects = ({ projects }) => {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();
  const goToProject = () => {
    navigate('/createproject');
  };
  const goToTask = () => {
      navigate('/createtask');
    };
  // const goToTask = (id) => {
  //   navigate('/createtask', {
  //     // will this be passed to create_task.jsx?
  //     parentProjectId: id,
  //   });
  // };

  const getAllTasks = async () => {
    const res = await api.get(); // finish this
  }

  const invite = async () => {
    if (email === '') {
      setErrorMessage('Email cannot be blank');
      return;
    }
    // make sure email has an account
    const users = await api.get('/users');
    if(!email in users.email){
      setErrorMessage('Email has not account')
    }
    
    const res = await api.post('/projects/:id/invite', {
      id, 
      email,
    });
    if (res.success) {
      setAuthToken(null);
    }
    
    // const { token } = await api.post('/projects', {
    //   id,
    //   email,
    // });
    // setAuthToken(token);
  }

  // put this in before the invite button
  // <Input type="text" placeholder="Enter the person's email" value={email} onChange={(e) => setEmail(e.target.value)} />

  const ht = () =>{
    console.log("hello there")
  }
  
  return (
    <>
      <div>
        <Button onClick={goToProject}>Click to create new project</Button>
      </div>
      <div className="flex-1">
        {projects.map((project) => (
          <div key={project.id} className="border-2 rounded p-4">
            {project.name}
            <div>
              <Button onClick={goToTask}>Create Task</Button>
              <Button onClick={ht}> click me</Button>
            </div>
            <div>
              <Button onClick={() => invite(id, email)}>Invite Member</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// TODO: 

// To get all the tasks for a project we need to create a new getter method in projects.controller.ts to do that, correct?

// Why is the input field not working?
// lines 38 - 50: which one do we use?
// line 16: can we pass something into the goToTask funciton? We need the parentProjectId in create_task.jsx

// Could we instead open a form (or something like that) when we click on the create task button and then create a new task
// using the project.id from each project we are mapping through? That way we don't have to access the parentProjectId in any
// other .jsx file (specifically create_task.jsx)