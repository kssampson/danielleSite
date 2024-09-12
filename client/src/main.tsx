import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Ensembles from './pages/menu/Ensembles.tsx'
import Booking from './pages/menu/Booking.tsx'
import config from './assets/assets.config.ts'
import Home from './pages/Home.tsx'
import Pages from './pages/Pages.tsx'
import Landing from './pages/Landing.tsx'
import Gallery from './pages/menu/Gallery.tsx'
import { SpeedInsights } from '@vercel/speed-insights/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        // path: "landing",
        element: <Landing {...config.assets}/>,
      },
      {
        path: "pages",
        element: <Pages />,
        children: [
          {
            path: "home",
            element: <Home danielleHomeGradient={config.assets.danielleHomeGradient} heading={config.headingAssets.heading} subHeading={config.headingAssets.subHeading} />,
          },
          {
            path: "ensembles",
            element: <Ensembles />,
          },
          {
            path: "booking",
            element: <Booking />,
          },
          {
            path: "gallery",
            element: <Gallery images={config.images}/>,
          },
        ]
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <><RouterProvider router={router} /><SpeedInsights /></>
  );
} else {
  throw new Error('Cannot find root element with id "root".');
}