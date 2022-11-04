import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Docs from './components/Docs'
import Demo from './components/Demo'
import Poop from './components/Poop'
import Pee from './components/Pee'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App key="app" />,
    errorElement: <Error />,
    children: [
      { path: "",
        element: <App /> },
      { path: "docs",
        element: <Docs /> },
      { path: "demo",
        element: <Demo /> },
      { path: "poop",
        element: <Poop /> },
      { path: "pee",
        element: <Pee /> } 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
