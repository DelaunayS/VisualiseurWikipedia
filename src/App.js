import 'bootstrap/dist/css/bootstrap.css'
import './css/app.scss'
import SearchBox from './components/searchBox';
import AleatoireWiki from './components/aleatoireWiki';

function App() {
  return (
    <div className="App" >
      <AleatoireWiki></AleatoireWiki>
      <SearchBox></SearchBox>      
    </div>
  );
}

export default App;
