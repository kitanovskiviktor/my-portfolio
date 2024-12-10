import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
// import AboutPage from './Pages/About/AboutPage';
// import CredentialsPage from './Pages/Credentials/CredentialsPage';
// import WorksPage from './Pages/Works Page/WorksPage';
// import ProjectPage from './Pages/Project Page/ProjectPage';
// import ContactPage from './Pages/Contact Page/ContactPage';
// import AdminPanel from './Pages/Admin Panel/AdminPanel';
// import Login from './Pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  // {
  //   path: "/about",
  //   element: <AboutPage/>
  // },
  // {
  //   path: '/credentials',
  //   element: <CredentialsPage/>
  // },
  // {
  //   path: "/works",
  //   element: <WorksPage/>
  // },
  // {
  //   path: "/project/:id",
  //   element: <ProjectPage/>
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage/>
  // },
  // {
  //   path: "/admin-panel",
  //   element: <AdminPanel/>
  // },
  // {
  //   path: "/login",
  //   element: <Login/>
  // }
]);


root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
