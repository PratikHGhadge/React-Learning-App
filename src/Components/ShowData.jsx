import React from "react";

function ShowData(props) {
  const handleButtonClick = () => {
    props.remove(props.index);
  };
  return (
    <>
      <div className="flex justify-center mb-4 mt-0">
        <tr className="bg-white shadow-lg w-7/12 rounded px-10  flex items-center justify-evenly">
          <td className = "px-10 py-2">{props.name}</td>
          <td className= "px-10 py-2">{props.email}</td>
          <td className= "px-4 py-2">
            <button
              onClick={handleButtonClick}
              className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </td>
        </tr>
      </div>
    </>
  );
}

export default ShowData;
