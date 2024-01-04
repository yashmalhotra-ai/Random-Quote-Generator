import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import BookMarker from './Components/BookMark';


const AppLayout = () => {
  return (
      <>
          <Header />
          <Outlet/>
      </>
  );
};


const Router = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout />,
      children: [
          {
              path: "/",
              element:<Body/>
          },
          {
              path: "bookmark",
              element: <BookMarker />,
          },
      ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);