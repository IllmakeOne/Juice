
import MainBar from './components/bar/MainBar'
import SideBarAndHeader from './components/SideBarAndHeader'


function App() {

  const name = ' Robz '
  const dicc = false


  return (
    <div>
      <SideBarAndHeader />
      <div>
      <MainBar />
      </div>
      {/* <h2>supp {name} </h2>
      <h2> subb {dicc ? 'yes': 'bio'} </h2> */}
    </div>
  );
}

export default App;
