import React, { useState } from "react";
import { FaSort, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ClientNavbar from "./components/ClientNavbar";
import { useNavigate } from "react-router-dom";

const callData = Array(10).fill({
  contactNo: "980000000000",
  date: "01-01-2000",
  timeDuration: "10:10:10",
  conversationTopics: "issue",
  conversationRaw: "View Full Chat",
  conversationSummary: "View Summary",
  keyPoints: "Key points",
  conversationType: "Unsatisfied",
  feedback: "Angry",
  transferToAuthority: "Free",
});

const OutgoingCalls = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate=useNavigate();
  const handleMessageHistory=()=>{
    navigate('/outgoing-messages');
}
  // const [currentPage, setCurrentPage] = useState(1);
  // const rowsPerPage = 5;

  // const sortedData = [...callData].sort((a, b) => 
  //   sortOrder === "asc"
  //     ? a.contactNo.localeCompare(b.contactNo)
  //     : b.contactNo.localeCompare(a.contactNo)
  // );

  // const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  // const paginatedData = sortedData.slice(
  //   (currentPage - 1) * rowsPerPage,
  //   currentPage * rowsPerPage
  // );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Navbar */}
   <ClientNavbar/>

      <h2 className="text-2xl font-bold mt-6">OUTGOING</h2>

      {/* Filters */}
      <div className="flex items-center justify-between mt-4">
      <div className="space-x-4">
        <button className="bg-pink-700 hover:bg-pink-800 px-4 py-2 rounded-md cursor-pointer">Call History</button>
        <button
        onClick={handleMessageHistory}
        className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md cursor-pointer">Message History</button>
      </div>
        <select className="bg-gray-700 px-4 py-2 rounded-md">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>

      <h3 className="text-xl font-bold mt-6">Call History</h3>

      {/* Table Container */}
      <div className="bg-gray-800 p-4 mt-4 rounded-lg overflow-x-auto overflow-y-auto admin-scroll">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="bg-gray-700">
        {[
          "Contact No",
          "Date (d-y-m)",
          "Time Duration",
          "Conversation Topics/Purpose",
          "Conversation (RAW)",
          "Conversation Summary",
          "Conversation Key Points",
          "Conversation Type(AI Analyzed)",
          "Contact’s Feedback on the Conversation",
          "Transfer to Authority",
        ].map((header, index) => (
          <th key={index} className="px-4 py-3 border border-gray-600 min-w-[150px]">
            {header}
            {index === 0 && (
              <button
                className="ml-2"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                <FaSort className="inline" />
              </button>
            )}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {callData.map((row, index) => (
        <tr key={index} className="border border-gray-700">
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.contactNo}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.date}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.timeDuration}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.conversationTopics}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600 text-blue-400 cursor-pointer">
            {row.conversationRaw}
          </td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600 text-blue-400 cursor-pointer">
            {row.conversationSummary}
          </td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.keyPoints}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.conversationType}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.feedback}</td>
          <td className="px-4 py-2 min-w-[150px] border border-gray-600">{row.transferToAuthority}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Pagination */}
      {/* <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          className="p-2 bg-gray-700 rounded-md disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <FaArrowLeft />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1 ? "bg-pink-600 text-white" : "bg-gray-700"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="p-2 bg-gray-700 rounded-md disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FaArrowRight />
        </button>
      </div> */}
    </div>
  );
};

export default OutgoingCalls;
