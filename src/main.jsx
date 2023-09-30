import React from 'react'
import ReactDOM from 'react-dom/client'


import { 
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";
import './index.css'

// Routes
import Root from './routes/root';
import Construction from './routes/Construction';
import ErrorPage from './Error-Page';
import BattleScreen from './routes/BattleScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", 
        element: <Construction />
      }, 
      {
        path: "/fight", 
        element: <BattleScreen />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
