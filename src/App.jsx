import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./store/movies";
import { setType, fetchUsers } from "./store/users";

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ id: 111 }))
      .unwrap()
      .then((res) => console.log(res))
      .catch((error) => {
        console.log("Ocurrió el error:");
        console.log(error);
      });
  }, []);

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
      <hr />
      {users.loading ? (
        <p>Loading ... </p>
      ) : (
        users.list.length > 0 &&
        users.list.map((user) => <p key={user.id}> {user.name} </p>)
      )}
      {/* <button onClick={() => dispatch(fetchUsers())}>
        Get a list of users
      </button> */}
      <button onClick={() => dispatch(fetchUsers({ id: 111 }))}>
        Get one user
      </button>
    </>
  );
};

export default App;
