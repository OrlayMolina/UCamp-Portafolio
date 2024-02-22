import { createBrowserRouter } from "react-router-dom";
import Inicio from "./views/Inicio";

const  router = createBrowserRouter([

    {
        path: '/',
        element: <Inicio />
    }
]);

export default router;