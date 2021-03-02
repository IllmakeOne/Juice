import SideBarAndHeader from './components/SideBarAndHeader'
import MainBar , {BarScreen} from './components/bar/MainBar'
import MainRec from './components/rec/MainRec'
import StartScreen from './components/StartScreen'
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import StockHandler from './components/bar/stockmanagement/StockHandler';
import OurScheduler from './components/rec/schedules/Scheduler';


const routes = {
  "/": () => <StartScreen />,

  "/bar": () => <MainBar />,
  "/newitem": () => <StockHandler />,
  
  "/rec": () => <MainRec />,
  "/rec/sche": () => <OurScheduler />,
};

function App() {


  return (
    <div>
      {/* <SideBarAndHeader /> */}
      <div>
                <Router>
                  <ul>
                    <li>
                      <Link to="/"><h2>StartScreent</h2></Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/bar"><h2>Bar</h2></Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/rec"><h2>Reception</h2></Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/newitem"><h2>New Item</h2></Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/rec/sche"><h2>Scheduler</h2></Link>
                    </li>
                  </ul>
                  
                  <Route path="/" component={StartScreen} />  
                  <Route path="/bar" component={MainBar} />  
                  <Route path="/rec" component={MainRec} />   
                  <Route path="/newitem" component={StockHandler} />  
                  <Route path='/rec/sche' component={OurScheduler} />  
                </Router>
              </div>
        <div>
        {/* <MainBar startScreen = {BarScreen.ADDITEM}/> */}
        </div>
      {/* <h2>supp {name} </h2>
      <h2> subb {dicc ? 'yes': 'bio'} </h2> */}
    </div>
  );
}

export default App;

