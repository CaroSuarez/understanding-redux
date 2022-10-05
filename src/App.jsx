import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./store/movies";
import { setType } from "./store/users";

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Movies</h1>
      {movies && movies.map((movie) => <p key={movie.id}> {movie.title} </p>)}
      <button onClick={() => dispatch(addMovie({ id: 555, title: "Batman" }))}>
        Add movie
      </button>
      <hr />
      <p> the current user type is: {users.type} </p>
      <button onClick={() => dispatch(setType("Administrator"))}>
        Change type of user
      </button>
    </>
  );
};

export default App;
