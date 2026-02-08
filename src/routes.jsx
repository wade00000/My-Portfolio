import App from "./App";
const routes = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];


export default routes;