import { useReducer } from "react";
import "../components/Count.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return { count: state.count + 1 };
    case "DECREMENTAR":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mas = () => dispatch({ type: "INCREMENTAR" });

  const restar = () => dispatch({ type: "DECREMENTAR" });

  return (
    <div className="center">
      <h2>Countado Reducer: {state.count} </h2>
      <button onClick={mas}>+</button>
      <button onClick={restar}>-</button>
    </div>
  );
};
export default Count;
