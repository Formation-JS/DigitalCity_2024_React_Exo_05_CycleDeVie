import './App.css'
import DisplayDate from './components/display-date/display-date';
import DisplayTime from './components/display-time/display-time';
import Toggeler from './components/toggeler/toggeler';

function App() {

  return (
    <>
      <h1>Exo 04 - Effect</h1>

      {/* <Toggeler renderA={() => <DisplayDate />}  /> */}

      <Toggeler 
        renderA={() => <DisplayDate />} 
        renderB={() => <DisplayTime />}
      />
    </>
  )
}

export default App
