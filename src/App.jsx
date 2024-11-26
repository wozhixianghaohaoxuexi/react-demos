import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import SwiperPage from "./pages/SwiperPage";

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/swiper',
        element: <SwiperPage />,
      }
    ]
  }
]

function App() {
  // return <BrowserRouter>
  //   <Routes>
  //     {routes.map((route, index) => (
  //       <Route key={index} path={route.path} element={route.element} />
  //     ))}
  //   </Routes>
  // </BrowserRouter>
  return <div>
    {useRoutes(routes)}
  </div>
}

export default App;