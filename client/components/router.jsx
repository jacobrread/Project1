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

export const Router = () => {
  const [authToken] = useContext(AuthContext);

  //   <div className="p-4 bg-black text-white">
  //   <Routes>
  //     <Link to="createproject">Create Project</Link>
  //     <Route path="admin" element={'hello from the admin page'} />
  //   </Routes>
  //   <h1 className="">This is your taskbar</h1>
  // </div>
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
        <Route path="createtask" element={<CreateTask />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
