import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Select from "react-select";

const HistorySearchBar = () => {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedPayer, setSelectedPayer] = useState(null);


  const options = [
    { value: "invoiced", label: "Invoiced" },
    { value: "inactive", label: "inactive" },
    { value: "Complete", label: "Complete" },
    { value: "Cancled", label: "Cancled" },
    { value: "Rejected", label: "Rejected" },
  ];
const payers = [
  { value: "Danny", label: "Danny" },
  { value: "Tea", label: "Tea" },
  { value: "Start", label: "Start" },
  
];



// const handleChange = (selected) => {
//   setSelectedOption(selected);
// };
  const handleSearch = (value: string) => {
    setSearch(value);
    //   if (!value.trim()) {
    //     setSelectedMember(members); // Show all members if input is empty
    //     return;
    //   }
    //   const member = members.filter(
    //     (m) =>
    //       m.name.toLowerCase().includes(value.toLowerCase()) ||
    //       m.memberId.toString().includes(value) ||
    //       m.email.toLowerCase().includes(value.toLowerCase()) ||
    //       m.phoneNumber.toString().includes(value) ||
    //       m.scheme.toLowerCase().includes(value.toLowerCase())
    //   );
    //   setSelectedMember(member); // If no match, set null
  };

  return (
    <div className="search-bar">
      <form className="flex  justify-evenly flex-wrap gap-2 pt-2">
        <div className="flex flex-col gap-1 text-gray-500">
          <span>Search</span>
          <input
              type="text"
              placeholder="Search member details"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-52 h-10 rounded-md border border-gray-400 px-4 min-w-44 max-w-xs "
            ></input>
         
        </div>
        <div className="flex flex-col gap-1 text-gray-500 ">
          <span>Status</span>
          <div className="min-w-44 max-w-xs">
            {" "}
            <Select
              options={options}
              value={selectedOption}
              // onChange={handleChange}
              placeholder="Select an option"
            />
            {/* {selectedOption && <p>You selected: {selectedOption.label}</p>} */}
          </div>
        </div>
        <div className="flex flex-col gap-1 text-gray-500 ">
          <span>Payers</span>
          <div className="min-w-52 max-w-xs">
            {" "}
            <Select
              options={payers}
              value={selectedPayer}
              // onChange={handleChange}
              placeholder="Select a payer"
            />
            {/* {selectedOption && <p>You selected: {selectedOption.label}</p>} */}
          </div>
        </div>

        <div className="flex flex-col gap-1 text-gray-500">
          <span> start Date</span>
          <input
            type="date"
            id="date"
            className="w-52 h-10 rounded-md border border-gray-400 px-4"
            //   value={selectedDate}
            //   onChange={handleDateChange}
          />
        </div>
        <div className="flex flex-col gap-1 text-gray-500">
          <span> End Date</span>
          <input
            type="date"
            id="date"
            className="w-52 h-10 rounded-md border border-gray-400 px-4"
            //   value={selectedDate}
            //   onChange={handleDateChange}
          />
        </div>
      </form>
    </div>
  );
};
export default HistorySearchBar;


  



