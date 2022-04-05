import './App.css';
import WeatherInfo from './Components/WeatherInfo';
import Button from './Components/Button'


function App() {

  

  

    
  return (
    <div className="App content p-4 bg">
      <div className='row'>
        <div className="col-md-4 mx-auto card text-dark bg-info mb-3 items">
          
          <WeatherInfo />
          <Button/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
