import React from "react";
import ShowData from "./Components/ShowData";
import { useState } from "react";
import Heading from "./Components/Heading";
import { Header, Footer } from "./header";

function RecordKepping() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handelData = (event) => {
    setData((prevData) => [...prevData, { name, email }]);
    setName("");
    setEmail("");
    console.log(data);
  };
  const handelName = (event) => {
    setName(event.target.value);
    // console.log(name);
  };

  const handelEmail = (event) => {
    setEmail(event.target.value);
    // console.log(email);
  };

  const handleRemoveData = (index) => {
    setData((prevData) => {
      return prevData.filter((d, i) => {
        return i !== index;
      });
    });
  };

  const handelIFPaste = () => {
    window.alert("paste mat kar be!!!");
  };

  return (
    <div className="bg-slate-700 border-8 h-screen w-screen overflow-y-auto">
      <Header></Header>
      <Heading text={"Record Kepping Project"}></Heading>

      <div className="flex justify-center">
        <input
          onPaste={handelIFPaste}
          className="w-96 my-24 mx-2 appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          type="text"
          name="name"
          value={name}
          onChange={handelName}
          placeholder="Enter your name"
        />
        <input
          onPaste={handelIFPaste}
          value={email}
          onChange={handelEmail}
          className="w-96 my-24 mx-2 appearance-none border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <button
          onClick={handelData}
          className="bg-green-500 w-32 my-24 m-2 text-white  border border-gray-300 rounded py-2 px-4  hover:outline-none hover:border-blue-500 hover:text-black"
          type="submit"
        >
          Submit
        </button>
      </div>
      <div>
        <div className="flex justify-center mb-4 mt-0">
          <tr className="bg-white shadow-lg w-7/12 rounded px-10  flex items-center justify-evenly">
            <td className="px-10 py-2">{"Name"}</td>
            <td className="px-10 py-2">{"Email"}</td>
            <td className="px-4 py-2"></td>
          </tr>
        </div>
      </div>
      <div>
        {data.map((element, index) => {
          return (
            <ShowData
              remove={handleRemoveData}
              name={element.name}
              email={element.email}
              index={index}
            ></ShowData>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RecordKepping;
