import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersPage from "./pages/UsersPage.jsx";
import BlogPostsPage from "./pages/BlogPostsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UsersPage />,
      },
    ],
  },
  {
    path: "/blog-posts",
    element: <BlogPostsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
