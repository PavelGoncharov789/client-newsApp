// import {useDispatch,useSelector} from 'react-redux';
import { AllNews } from './components/allNews/AllNews';
import './App.css';
import { Header } from './components/header/Header';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  // const dispatch = useDispatch()
  // const stateValue = useSelector(state => state)
  return (
    <Provider store={store}>
      <Header/>
      <AllNews/>
    </Provider>
  );
}

export default App;
