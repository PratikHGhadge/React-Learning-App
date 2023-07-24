import React from "react";
import { useEffect, useState } from "react";

const UseState = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(20);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      {
        document.title = `(${state}) employees data fetched`;
      }
      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();
  }, [state]);

  const handelIfDataIsCopying = ()=>{
    window.alert("Copy mat kar be!!!!!!")
  }


  return (
    <>
      
      <table className="mt-4 w-full border-collapse border-white  border-2">
        <thead>
          <tr>
            <th className="-white text-white  border-2 px-4 py-2">ID</th>
            <th className="border-white  border-2 text-white  px-4 py-2">Name</th>
            <th className="border-white  text-white border-2 px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody onCopy={handelIfDataIsCopying}>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="text-white  border-white  border-2 px-4 py-2">{item.id}</td>
              <td className="text-white border-white  border-2 px-4 py-2">{item.firstName+" "+item.lastName}</td>
              <td className="text-white border-white  border-2 px-4 py-2">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
      <button
        onClick={()=>setState(prevState => prevState + 5)}
        className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 align-center my-6 rounded"
      >
        Get data from api
      </button>
      </div>
    </>
  );
};

export default UseState;
