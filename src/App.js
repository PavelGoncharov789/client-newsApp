// import {useDispatch,useSelector} from 'react-redux';
import { AllNews } from './components/allNews/AllNews';
import './App.css';
import { Header } from './components/header/Header';

function App() {
  // const dispatch = useDispatch()
  // const stateValue = useSelector(state => state)
  return (<div>
    <Header/>
    <AllNews/>
  </div>
  );
}

export default App;
