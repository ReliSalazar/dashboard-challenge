import "./Home.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div className="Home bg-stone-50 flex">
      <Sidebar className="basis-1/6" />
      <div className="content basis-5/6">
        <Navbar />
        <p>Home</p>
      </div>
    </div>
  );
}

export default Home;

