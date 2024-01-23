import './App.css';
import CircleImage from './components/details/CircleImage';
import LandmakrDetails from './components/details/LandmarkDetail';
import MapView from './components/details/MapView';

function App() {
  return (
    <div className="App">
      <LandmakrDetails name="Turtle Rock" park="Joshua Tree National Park" state="California"/>
    </div>
  );
}

export default App;
