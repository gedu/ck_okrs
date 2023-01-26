import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/networking/query-client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./home/home-page";
import { ErrorPage } from "./error-page/error-page";
import { DetailsPage } from "./details-page/details-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "details/:locationId",
    element: <DetailsPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
