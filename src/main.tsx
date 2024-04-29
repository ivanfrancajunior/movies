import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";
import Search from "./pages/Search.tsx";
import NotFound from "./pages/NotFound.tsx";
import Plauground from "./components/Plauground.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Spinner from "./components/Spinner.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => <Spinner />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/adm/playgound",
        element: <Plauground />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
