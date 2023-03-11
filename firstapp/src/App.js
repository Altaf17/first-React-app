import logo from './logo.svg';
// import './App.css';
import FirstComponents from './Components/FirstComponents';
import DigitalClock from './Components/DigitalClock';
import {Provider} from 'react-redux'
import store from './store'
import CounterRedux from './Components/CounterRedux';
import Bootstrap from './Components/Bootstrap/Bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Redux-toolkit-Project/Main';
import CrudMain from './CRUD Operations/CrudMain';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      {/* <DigitalClock/> */}
     {/* <FirstComponents/> */}
     {/* <CounterRedux/> */}
     {/* <Bootstrap/> */}
     {/* <Main/> */}
     <CrudMain/>
    </div>
    </Provider>
  );
}

export default App;
