import "./App.css";

import { increment, decrement, setDiff, reset } from "./actions";

import ButtonGroup from "./ButtonGroup";
import ShowCount from "./ShowCount";
import InputRange from "./InputRange";

import useStore from "./hooks/useStore";
import useSelector from "./hooks/useSelector";
import useDispatch from "./hooks/useDispatch";

function App({ store }) {
  const dispatch = useDispatch();
  const { count, diff } = useSelector();

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => dispatch(decrement());
  const onReset = () => dispatch(reset());

  const handleDiff = ({ target }) => dispatch(setDiff(target.valueAsNumber));

  return (
    <div className="App">
      <main className="App-main">
        <ShowCount count={count} diff={diff} />
        <InputRange handleDiff={handleDiff} diff={diff} />
        <ButtonGroup
          onDecrement={onDecrement}
          onReset={onReset}
          onIncrement={onIncrement}
        />
      </main>
    </div>
  );
}

export default App;
