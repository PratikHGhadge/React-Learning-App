function Movie(props) {
  return (
    <>
    <div className="bg-white m-4 rounded-lg shadow-md  p-4 drop-shadow-2xl w-64 inline-block">
      <img src={props.Poster} alt="" className="h-80 w-auto object-cover rounded"/>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{props.Title}</h3>
        <p className="text-gray-500">{props.Year}</p>
      </div>
    </div>
    </>
  );
}

export default Movie;
