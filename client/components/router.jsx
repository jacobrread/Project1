import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './home/_home';
import { AuthContext } from '../utils/auth_context';
import { SignIn } from './sign_in/_sign_in';
import { SignUp } from './sign_up/_sign_up';
import { Admin } from './admin/_admin';
import { CreateProject } from './create_project/_create_project';
import { CreateTask } from './create_task/_create_task';
import { Home } from './home/_home';
import { CreateInvite } from './create_invite/_create_invite';
import { AssignUser } from './assign_user/_assign_user';

export const Router = () => {
  const [authToken] = useContext(AuthContext);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authToken ? <Home /> : <Navigate replace to="signin" />} // no token means not logged in
        />
        <Route path="admin" element={<Admin />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="createproject" element={<CreateProject />} />
        <Route path="createtask/:id" element={<CreateTask />} />   
        <Route path="createinvite/:id" element={<CreateInvite />} />
        <Route path="assignuser" element={<AssignUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
