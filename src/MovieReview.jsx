import Movie from "./Components/Movie";
import Movies from "./Components/movies.json";
import { Header, Footer } from "./header";
import Heading from "./Components/Heading";


function MovieReview() {
  return (
    <div className="App bg-slate-700 border-8 h-screen w-screen overflow-y-auto">
      <Header></Header>
      <Heading text={"Movie review Project"}></Heading>
      <div className="App-header grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-stretch">
        {Movies.map((element, index) => {
          return (
            <Movie
              className="grid-rows-4"
              key={index}
              Title={element.Title}
              Year={element.Year}
              Poster={element.Poster}
            ></Movie>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default MovieReview;
