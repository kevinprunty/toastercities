import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { 
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import './index.css'

// Routes
import Root from './routes/root';
import Construction from './routes/Construction';
import ErrorPage from './Error-Page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", 
        element: <Construction />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
