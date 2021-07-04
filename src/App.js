import './App.css';
import Post from './Post'
function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>
      <h1>Lets Build our photophilic app</h1>
      <Post/>
      </div>
  );
}

export default App;
