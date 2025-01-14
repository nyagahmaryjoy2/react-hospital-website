import { useState } from "react";
import { GoDownload } from "react-icons/go";

import Select from "react-select";

const PreAuthSearch = () => {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState();
  const [selectedPayer, setSelectedPayer] = useState();
  const [selectedScheme, setSelectedScheme] = useState();

  const options = [
    { value: "ActiveAdm", label: "ActiveAdm" },
    { value: "inactive", label: "inactive" },
    { value: "approved", label: "approved" },
    { value: "Declined", label: "Declined" },
    { value: "Claimed", label: "Claimed" },
    { value: "Cancled", label: "Cancled" },
    { value: "pending", label: "pending" },
    { value: "notification", label: "notification" },
    { value: "expired", label: "Withdrawn" },
  ];
  const payers = [
    { value: "Danny", label: "Danny" },
    { value: "Tea", label: "Tea" },
    { value: "Start", label: "Start" },
  ];
  const scheme = [
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
            className="  w-52 h-10 rounded-md border border-gray-400 px-4 min-w-44 max-w-xs "
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
              placeholder="All Status"
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
              placeholder="All Payers"
            />
            {/* {selectedOption && <p>You selected: {selectedOption.label}</p>} */}
          </div>
        </div>
        <div className="flex flex-col gap-1 text-gray-500 ">
          <span>Scheme</span>
          <div className="min-w-52 max-w-xs">
            {" "}
            <Select
              options={scheme}
              value={selectedScheme}
              // onChange={handleChange}
              placeholder="All Payers"
            />
            {/* {selectedOption && <p>You selected: {selectedOption.label}</p>} */}
          </div>
        </div>
      </form>

      <div className="flex  items-center justify-between p-4 ">
        <div className="flex  gap-1 text-gray-500 ">
          <div className="flex flex-col gap-1 text-gray-500">
            <span>
              {" "}
              start Date<span className="text-red-700">* </span>
            </span>
            <input
              type="date"
              id="date"
              className="w-36 rounded-md border border-gray-400 px-4 "
              //   value={selectedDate}
              //   onChange={handleDateChange}
            />
          </div>
          <div className="flex flex-col gap-1 text-gray-500">
            <span>
              {" "}
              End Date <span className="text-red-700">* </span>
            </span>
            <input
              type="date"
              id="date"
              className="w-36 rounded-md border border-gray-400 px-4 "
              //   value={selectedDate}
              //   onChange={handleDateChange}
            />
          </div>
        </div>
        {/**export button */}
        <button className="flex  justify-center    rounded-md border border-gray-400 px-4">
          <GoDownload size={20} />
          <a
            href="../Desktop/pre AuthTrial.xlsx" // Replace with your file path or URL
            download="Pre-AuthTrial.docx" // Specifies the downloaded file name
          >
            EXPORT
          </a>
        </button>
      </div>
    </div>
  );
};
export default PreAuthSearch;
