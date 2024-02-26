import iconMusic from './assets/musicIcon.png'
import logo from './assets/logo2.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>JumpCut Editor</p>
      </div>

      <div className='container-1'>
        <div className='container-1-child1'>
          <button className='btn'><img src={iconMusic} alt="icone de musica"/> </button>

        </div>
        <div className='container-1-child2'>
          <button><img src={iconMusic} alt="icone de musica"/> </button>
          <p>Clique aqui para carregar</p>
        </div>
        <div className='container-1-child3'>
        <button><img src={iconMusic} alt="icone de musica"/> </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
