import React from "react";

function Chat(props) {
  
  return (
    <div>
      <div className="flex border-2 bg-slate-700 ">
        <div className="flex flex-col h-screen bg-slate-700 rounded-2xl max-w-sm">
          <div className="flex-grow overflow-y-auto px-4 py-6">
            {/* <!-- Chat messages --> */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/C5603AQETJF2ukl191g/profile-displayphoto-shrink_800_800/0/1651806632472?e=2147483647&v=beta&t=_aku5EJaXrSAJgUb9ZYaxp7OQ5ay6N1u4Mb4SjyESLE"
                    alt="User 1"
                  />
                </div>
                <div className="ml-4 p-3 bg-gray-200 rounded-lg">
                  <p className="text-sm">Hello {props.name1}!</p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="mr-4 p-3 bg-blue-500 rounded-lg">
                  <p className="text-sm text-white">Hi! {props.name2} How can I help you?</p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://media.licdn.com/dms/image/D5603AQExzdkPA66zdA/profile-displayphoto-shrink_800_800/0/1679496682480?e=2147483647&v=beta&t=BoHmuDFM7eNoqugAIXWR1WbP3E-AKvS360KmK1dSZ1o"
                    alt="User 2"
                  />
                </div>
              </div>
              {/* <!-- Additional chat messages --> */}
            </div>
          </div>
          <div className=" bg-slate-800 rounded-2xl px-4 py-2">
            {/* <!-- Chat input --> */}
            <div className="flex">
              <input id="inputmsg"
                type="text"
                placeholder="Type your message..."
                className="flex-grow rounded-full px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
