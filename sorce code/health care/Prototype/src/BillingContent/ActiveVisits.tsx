import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BillingFilters from "./BillingFilters";


const ActiveVisits = () => {
  const members = [
    {
      id: 1,
      visitNumber: 1,
      payerName: "Danny",
      memberId: "123456789-00",
      name: "Ann marie",
      age: 30,
      email: "annmarie@gmail.com",
      phoneNumber: "0727156401",
      scheme: "Cat A",
    },
    {
      id: 2,
      visitNumber: 2,
      payerName: "Danny",
      memberId: "123456789-01",
      name: "Jane Smith",
      age: 29,
      email: "jane@gmail.com",
      phoneNumber: "0727156402",
      scheme: "Cat B",
    },
    {
      id: 3,
      visitNumber: 3,
      memberId: "123456798-00",
      name: "Alice wain",
      age: 24,
      email: "alice@gmail.com",
      phoneNumber: "0727156403",
      scheme: "cat A",
    },
    {
      id: 4,
      visitNumber: 4,
      payerName: "Danny",
      memberId: "123456798-01",
      name: "Bob Brown",
      age: 41,
      email: "bob@gmail.com",
      phoneNumber: "0727156404",
      scheme: "Cat A",
    },
    {
      id: 5,
      visitNumber: 5,
      payerName: "Danny",
      memberId: "123456-00",
      name: "John willy",
      age: 31,
      email: "johnwilly@gmail.com",
      phoneNumber: "0727156405",
      scheme: "Cat C",
    },
  ];
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
              <div className="active-header">
                <table className="w-full">
                  <thead className="text-left">
                    <tr className="bg-gray-100 text-gray-800 ">
                      <th>Visit Number</th>
                      <th> Member Number</th>
                      <th>Member Name</th>
                      <th> Payer</th>
                      <th>Scheme</th>
                      <th>Benefit</th>
                      <th>Expiry</th>
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
  );
};
export default ActiveVisits;



