import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Latest } from "./pages/Latest.tsx";
import Movie from "./pages/Movie.tsx";
import Search from "./pages/Search.tsx";
import NotFound from "./pages/NotFound.tsx";
import Playground from "./pages/Playground.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Latest />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
  {
    path: "/home",
    element: <Latest />,
  },
]);
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
