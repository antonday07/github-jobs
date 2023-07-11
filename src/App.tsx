import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ChildRoutes } from "./routes";
import Home from "./views/home";
import DefaultLayout from "./views/layout/default-layout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header />}>
//       <Route index element={<Home />} />
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      {ChildRoutes.map((route: any) => {
        return <Route path={route.path} element={route.element} />;
      })}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
