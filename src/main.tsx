import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

import { router } from "./router";

const queryClient = new QueryClient();

// 👇 VERY IMPORTANT: give router its context
router.update({
  context: {
    queryClient,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
