import {useRef,useState,useEffect} from 'react'
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file,fileState]=useState('');
  const [result, setResult]=useState('');

  useEffect(()=>{
    const getImage = async()=>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response= await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  const fileRef = useRef();
  const uploadClick = () =>{
    fileRef.current.click();
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Share File through Link hey hey hey hey</h1>
        <p>Sharing file</p>
        <button onClick={()=>uploadClick()}>Click here</button>
        <input type='file' ref={fileRef} style={{display:'none'}} onChange={(e)=>fileState(e.target.files[0])}/>
        <a href={result} target='__blank'>{result}</a>
      </div>
    </div>
  );
}

export default App;
