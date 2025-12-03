import { useState } from "react";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import AddJob from "./pages/AddJob";

function App() {
  const [page, setPage] = useState("home");

  const navigate = (pagetitle) => setPage(pagetitle);

  if (page == "home") {
    return <Home navigate={navigate} page={page} />;
  } else if (page == "jobs") {
    return <Jobs navigate={navigate} page={page}/>;
  } else {
    return <AddJob navigate={navigate} page={page}/>;
  }
}

export default App;
