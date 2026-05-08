import { Routes, Route } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import Home from "./Home";
import Header from "./Header";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

function App() {
  return (
    <>
      <PageWrapper>
        <Header
          home="/"
          destination="/destination"
          crew="/crew"
          technology="/technology"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
