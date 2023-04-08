import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import Root from './routes/root';
import { Header } from './components/Header/Header';
import { Details } from './components/Details/Details';
import { About } from './components/About/About';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <Root />,
        errorElement: <div>404</div>
      },
      {
        path: '/crypto-tracker/about',
        element: <About />,
        errorElement: <div>404</div>
      },
      {
        path: '/crypto-tracker/details/:cryptoId',
        element: <Details />,
      }
    ]
  }
  

])

root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
