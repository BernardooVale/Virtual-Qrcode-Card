import QRCode from 'react-qr-code';
import QRCodeImage from 'qrcode';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [url, setUrl] = useState('http://localhost:3000/person');
  const [Qrcode, setQrcode] = useState('');

  function GenerateQrcodeImage(Qrcode_link){

    QRCodeImage.toDataURL(Qrcode_link,{
      width:600,
      margin:3
      },
      function (err,url){

        setQrcode(url);
      });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='col1'>
          <input 
            onChange={(element) => {
              setName(element.target.value);
              setUrl(
                `http://localhost:3000/person/${element.target.value.replace(/ /g, "_")}/${aboutMe.replace(/ /g, "_")}/${linkedin.replace("https://www.linkedin.com/", "").replace("/", "_")}/${github.replace("https://github.com/", "")}`);
              GenerateQrcodeImage(`http://localhost:3000/person/${element.target.value.replace(/ /g, "_")}/${aboutMe.replace(/ /g, "_")}/${linkedin.replace("https://www.linkedin.com/", "").replace("/", "_")}/${github.replace("https://github.com/", "")}`);
              }}
            value={name}
            type='text'
            placeholder='Name'
            class='input'
          />
          <br></br>
          <input 
            onChange={(element) => {
              setAboutMe(element.target.value);
              setUrl(
                `http://localhost:3000/person/${name.replace(/ /g, "_")}/${element.target.value.replace(/ /g, "_")}/${linkedin.replace("https://www.linkedin.com/", "").replace("/", "_")}/${github.replace("https://github.com/", "")}`)
              GenerateQrcodeImage(`http://localhost:3000/person/${name.replace(/ /g, "_")}/${element.target.value.replace(/ /g, "_")}/${linkedin.replace("https://www.linkedin.com/", "").replace("/", "_")}/${github.replace("https://github.com/", "")}`);
              }}
            value={aboutMe}
            type='text'
            placeholder='About me'
            class='input'
          />
          <br></br>
            <input 
              onChange={(element) => {
                setLinkedin(element.target.value);
                setUrl(
                  `http://localhost:3000/person/${name.replace(/ /g, "_")}/${aboutMe.replace(/ /g, "_")}/${element.target.value.replace("https://www.linkedin.com/", "").replace("/", "_")}${github.replace("https://github.com/", "")}`)
                GenerateQrcodeImage(`http://localhost:3000/person/${name.replace(/ /g, "_")}/${aboutMe.replace(/ /g, "_")}/${element.target.value.replace("https://www.linkedin.com/", "").replace("/", "_")}${github.replace("https://github.com/", "")}`);
                }}
              value={linkedin}
              placeholder='Linkedin link'
              className='input-link'
              type='text'
              class='input'
            />
          <br></br>
            <input 
              onChange={(element) => {
                setGithub(element.target.value);
                setUrl(`http://localhost:3000/person/${name.replace(/ /g, "_")}/${aboutMe.replace(/ /g, "_")}/${linkedin.replace("https://www.linkedin.com/", "").replace("/", "_")}${element.target.value.replace("https://github.com/", "")}`)
                GenerateQrcodeImage(`http://localhost:3000/person/${name.replace(/ /g, "_")}/${aboutMe.replace(/ /g, "_")}/${linkedin.replace("https://www.linkedin.com/", "").replace("/", "_")}${element.target.value.replace("https://github.com/", "")}`);
              }}
              value={github}
              placeholder='Github link'
              className='input-link'
              type='text'
              class='input'
            />
        </div>
        <div className='col2'>
          <p>{name}</p>
          <QRCode value={url}/>
          <br></br>
            <a href={Qrcode} downLoad={`mineQrcode.png`}>
              <button class="cta">
                <span>Download</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </a>
        </div>
      </header>
    </div>
  );
}

export default App;
