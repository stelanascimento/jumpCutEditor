import iconPlay from './assets/play.png'
import iconPlus from './assets/plus.png'
import iconFullScreen from './assets/fullScreen.png'
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
          <div className='tudoVideo'>
            <button className='btn btn-2'><img src={iconPlus} alt="icone de musica"/> </button>
            <p>Clique aqui para carregar</p>
            <p>Ou arraste e solte um arquivo aqui</p>
          </div>
        </div>
        <div className='container-1-child2'>
          <button className='btn'><img src={iconPlay} alt="icone de musica"/> </button>
          <p>00:00:00:00</p>
          <button className='btn'><img src={iconFullScreen} alt="icone de musica"/> </button>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
