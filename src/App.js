import { version } from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{`Welcome to sightseenings of Germany`}</h2>
        </div>
        <p className="App-intro">
          In this app you will find only the best images of different german cities.
        </p>
        <div className="ImagesOne">
          <p><img src="1.jpg" width="350px" height="350px"/></p>
          <br/>
          <p><img src="2.jpg" width="350px" height="350px"/></p>
          <br/>
          <p><img src="3.jpg" width="350px" height="350px"/></p>
          <br/>

        </div>
        <h3>What is important for you in Berlin?</h3>
        <div className="BerlinName">
        <ul>
          <li>Berlin is a big city</li>
          <li>Berlin is very international</li>
          <li>Berlin welcomes you</li>
        </ul>
    </div>
      </div>

    );
  }
}

export default App;
