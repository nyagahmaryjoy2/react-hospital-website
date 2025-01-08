import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const members = [
  {
    id: 1,
    memberId: "123456789-00",
    name: "John Doe",
    age: 30,
    email: "john@gmail.com",
    phoneNumber: "0727156401",
    scheme: "Cat A",
  },
  {
    id: 2,
    memberId: "123456789-01",
    name: "Jane Smith",
    age: 29,
    email: "jane@gmail.com",
    phoneNumber: "0727156402",
    scheme: "Cat B",
  },
  {
    id: 3,
    memberId: "123456798-00",
    name: "Alice Johnson",
    age: 24,
    email: "alice@gmail.com",
    phoneNumber: "0727156403",
    scheme: "cat A",
  },
  {
    id: 4,
    memberId: "123456798-01",
    name: "Bob Brown",
    age: 41,
    email: "bob@gmail.com",
    phoneNumber: "0727156404",
    scheme: "Cat A",
  },
  {
    id: 1,
    memberId: "123456-00",
    name: "John willy",
    age: 31,
    email: "johnwilly@gmail.com",
    phoneNumber: "0727156405",
    scheme: "Cat C",
  },
];

const Search = () => {
    const [search, setSearch] = useState("");
    const [selectedMember, setSelectedMember] = useState(members);
    
    
    const handleSearch = (value) => {
      setSearch(value);
       if (!value.trim()) {
      setSelectedMembers(members); // Show all members if input is empty
      return;
       }
      const member = members.filter(
        (m) => m.name.toLowerCase() === search.toLowerCase()||
         m.memberId.toString() === search ||
       m.email.toLowerCase() === search.toLowerCase() ||
         m.phoneNumber.toString() === search ||
         m.scheme.toLowerCase() === search.toLowerCase()
      );
      setSelectedMember(member); // If no match, set null
    };

  return (
    <>
      <div
        className={`flex items-center  border border-cyan-700  p-2 rounded-md 
            `}
      >
        <BiSearch size={20} className="text-gray-400 ml-1" />
        <input
          type="text"
          placeholder="Search member details"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="bg-transparent outline-none text-black px-2 w-full"
        />
      </div>
      {/* Display Member Details */}
      {selectedMember.length > 0
        ? selectedMember.map((member) => (
            <div className="container">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="   mt-5 p-4 bg-gray-100 rounded-md shadow-md w-80">
                  <h2 className="text-lg font-bold">Member Details</h2>
                  <p>
                    <span className="font-semibold">Name:</span> {member.name}
                  </p>
                  <p>
                    <span className="font-semibold">Member ID:</span>{" "}
                    {member.memberId}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {member.email}
                  </p>
                  <p>
                    <span className="font-semibold">Scheme: </span>{" "}
                    {member.scheme}
                  </p>

                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md ml-2 flex items-center justify-between p-4">
                    <FaRegArrowAltCircleRight />
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))
        : search && (
            <p className="mt-5 text-red-500">No member found with that name.</p>
          )}
    </>
  );
}

export default Search;
