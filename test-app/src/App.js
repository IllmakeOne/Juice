import SideBarAndHeader from './components/SideBarAndHeader'
import MainBar , {BarScreen} from './components/bar/MainBar'
import MainRec from './components/rec/MainRec'
import StartScreen from './components/StartScreen'

const routes = {
  "/": () => <StartScreen />,
  "/bar": () => <MainBar />,
  "/rec": () => <MainRec />
};

function App() {

  return (
    <div>
      <SideBarAndHeader />
        <div>
        <MainBar startScreen = {BarScreen.ADDITEM}/>
        </div>
      {/* <h2>supp {name} </h2>
      <h2> subb {dicc ? 'yes': 'bio'} </h2> */}
    </div>
  );
}

export default App;

