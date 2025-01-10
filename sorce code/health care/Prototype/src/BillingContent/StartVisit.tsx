import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import BillingFilters from "./BillingFilters";

const StartVisit = () => {
    return (
      <>
        <section className="flex  ">
          <Sidebar />
          <div className="container ">
            <Header />

            {/* Content */}
            <div>
              <BillingFilters />
              <div className="border space-y-4 max-h-96 border-gray-300 rounded-lgshadow-lg overflow-y-scroll p-4 bg-gray-100 ">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};
 export default StartVisit;