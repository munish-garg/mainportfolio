import './App.css';

//NavBar
import Navbar from './Components/Navbar/Navbar';

//Header
import Header from './Components/Header/Header';

//Particles
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles
      params={{
        particles:{
          number:{
            value:60,
            density:{
              enable:true,
              value_area:1000
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width: 10,
              color: "#ff0000"
            }
          }
        }
      }}
      />
      <Navbar/>
      <Header/>
    </>
  );
}

export default App;
