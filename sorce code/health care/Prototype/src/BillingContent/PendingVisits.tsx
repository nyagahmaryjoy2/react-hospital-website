
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BillingFilters from "./BillingFilters";

const  PendingVisits = () => {
    return(
         <>
      <section className="flex  ">
        <Sidebar />
        <div className="container ">
          <Header />

          {/* Content */}
          <div>
            <BillingFilters />
            <div className="border space-y-4 max-h-96 border-gray-300 rounded-lgshadow-lg overflow-y-scroll p-4 bg-gray-100 ">
              <div className="pending-header">
                <table className="w-full">
                  <thead className="text-left">
                    <tr className="bg-gray-100 text-gray-800 ">
                      <th>Visit Number</th>
                      <th> Member Number</th>
                      <th>Member Name</th>
                      <th> Payer</th>
                      <th>Scheme</th>
                      <th>Benefit</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-gray-50">
                      {/* <td>{members.visitNumber}</td>
                      <td>{memberId}</td>
                      <td>{memberNumber}</td>
                      <td>{name}</td>
                      <td>{payerName}</td>
                      <td>{scheme}</td>
                      <td>{benefit}</td>
                      <td>-</td>
                      <td>{action}</td> */}
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
    )
};
export default PendingVisits;









