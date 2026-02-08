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
        path: "projects/spotify-analytics",
        element: <SpotifyProject />
      }
    ]
  }
]

export default routes