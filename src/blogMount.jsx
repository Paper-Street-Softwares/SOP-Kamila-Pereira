import React from "react";
import ReactDOM from "react-dom/client";
import BlogPosts from "@/components/sections/BlogPosts";

import "@/index.css"; // 👈 IMPORTANTE

const el = document.getElementById("blog-react");

if (el) {
  ReactDOM.createRoot(el).render(<BlogPosts colorMode="light" />);
}
