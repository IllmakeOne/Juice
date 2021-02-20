import Header from './components/Header'
import MainBar from './components/bar/MainBar'


function App() {

  const name = ' Robz '
  const dicc = false


  return (
    <div className="container">
      <Header />

      <div>
      <MainBar />
      </div>
      {/* <h2>supp {name} </h2>
      <h2> subb {dicc ? 'yes': 'bio'} </h2> */}
    </div>
  );
}

export default App;
