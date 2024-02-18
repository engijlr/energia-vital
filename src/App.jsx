import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPosts from "./pages/BlogPosts";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<BlogPosts />}>
          <Route path="/:postid" element={<SinglePost />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
