const Heading = (props) => {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-xl text-white font-bold ">{props.text}</h1>
        </div>
      </header>
    );
  };

  export default Heading;