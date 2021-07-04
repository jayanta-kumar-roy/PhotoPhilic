import './App.css';
import Post from './Post'
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
      </div>
      <h1>Lets Build our photophilic app</h1>
      <Post username="Jayanta" caption="this is so cool" imageUrl="https://images.unsplash.com/photo-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" />
      <Post username="Touqeer" caption="I'm loving this" imageUrl="https://images.unsplash.com/photo-1625231066641-7ab5b9c234d3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
      <Post username="Kundan" caption="This is beautiful" imageUrl="https://images.unsplash.com/photo-1625325544162-3951bfdf8831?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
      
      </div>
  );
}

export default App;
