
import SideBarAndHeader from './components/SideBarAndHeader'
import Header from './components/Header'
import MainBar , {BarScreen} from './components/bar/MainBar'


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
