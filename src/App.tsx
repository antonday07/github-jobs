import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./routes";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header />}>
//       <Route index element={<Home />} />
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//     </Route>
//   )
// )

const router = createBrowserRouter(publicRoutes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
