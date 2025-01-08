import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Home: React.FC = () => {
  return (
    <>
      <section className="flex ">
        <Sidebar />
        <div className="container ">
          <Header />
        </div>
      </section>
    </>
  );
};
export default Home;
