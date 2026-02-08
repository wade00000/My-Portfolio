import App from './App'
import Content from './components/Content'
import SpotifyProject from "./projects/SpotifyProject"

const routes = [
  {
    path: "/",
    element: <App />, // parent
    children: [
      {
        index: true, // renders at "/"
        element:  <Content/>
      },
      {
        path: "about" ,
        element:  <Content/>
      },
      {
        path: "projects", 
        element:  <Content/>,
      },
      {
        path: "skills", 
        element:  <Content/>
      },
      {
        path: "experience", 
        element:  <Content/>
      },
      {
        path: "education", 
        element:  <Content/>
      },
      {
        path: "contact",
        element: <Content/>
      },
      {
        path: "projects/spotify-analytics",
        element: <SpotifyProject/>
      },
    ]
  }
]

export default routes