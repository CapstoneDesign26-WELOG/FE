import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/routes/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
