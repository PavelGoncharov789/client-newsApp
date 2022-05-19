import './App.css';
import {useDispatch,useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const stateValue = useSelector(state => state)
  return (
    <div>
      <h1>Текст</h1>
    </div>
  );
}

export default App;
