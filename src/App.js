import iconPlay from './assets/play.png'
// import iconPlus from './assets/plus.png'
import iconFullScreen from './assets/fullScreen.png'
import logo from './assets/logo2.png';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {
  
  const [ files, setFiles ] = useState(null);
  const [ progress, setProgress ] = useState({ started: false, pc: 0 });
  const [ msg, setMsg ] = useState(null);


  function handleUpload(){
    if(!files){
      setMsg("No file selected");
      return;
    }

    const fd = new FormData();
    for(let i = 0; i<files.length; i++){
      fd.append(files[i+1], files[i])
    }

    setMsg("Uploading ...");
    setProgress(prevState => {
      return{...prevState, started: true}
    })



  //   fetch('http://httpbin.org/post', {
  //     method: "POST",
  //     body: fd,
  //     headers: {
  //       "Custom-Header": "value",
  //     }
  //   })
  //  .then(res => {
  //     if(!res.ok){
  //       throw new Error("Bad response");
  //     }
  //     setMsg("Upload succcessful");
  //     return res.json();
  //   })
  //   .then(data => console.log(data))
  //   .catch(err => {
  //     setMsg("Upload failed");
  //     console.error(err);
  //   });

  //oi

    axios.post('http://httpbin.org/post', fd, {
      onUploadProgress: (progressEvent) => { setProgress(prevState => {
        return{ ...prevState, pc: progressEvent.progress*100 }
      })},
      headers: {
        "Custom-Header": "value",
      }
    })
    .then(res => {
      setMsg("Upload successful");
      console.log(res.data);
    })

    .catch(err => {
      setMsg("Upload failed");
      console.error(err)
    
    });

  }



  return (
    
    <div className="App">
      {/* <div className='initial-screen'>
        <div className='box-1'>
          <h1>JumpCut Smart Editor</h1>
          <p>Transformando sua visão em realidade,\<br />um corte de cada vez.</p>
          <button>Editar Agora</button>
        </div>
        <img src={logo} className="logo-initial-screen" alt="logo" />
      </div> */}

      <div className='header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>JumpCut Editor</p>
      </div>

      <div className='container-1'>
        <div className='container-1-child1'>
          <div className='tudoVideo'>
            <p className='text'>Clique aqui para carregar</p>
            <input  className="btn" onChange={ (e) => {setFiles(e.target.files)   }} type='file' multiple></input>
            <p>Ou arraste e solte um arquivo aqui</p>
            <button onClick={handleUpload}  className='btn-upload'>Upload</button>
          </div>
          {progress.started &&<progress max="100" value={progress.pc}></progress>}
          {msg && <span>{msg}</span>}
        </div>
        <div className='container-1-child2'>
          <button className='btn-play'><img src={iconPlay} alt="icone de musica"/></button>
          <p className='text'>00:00:00:00</p>
          <button className='btn'><img src={iconFullScreen} alt="icone de musica"/></button>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;