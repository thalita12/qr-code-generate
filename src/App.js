import React, {forwardRef, useRef, useState} from 'react'
import {
  exportComponentAsPDF,
  exportComponentAsPNG
} from 'react-component-export-image'
import QRCode from 'qrcode'
import './App.css'

const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  width: 250,
  margin: 1
}

const ImageQrCode = () => {
  return <img id="image" src="http" alt="QR code of a text link" />
}

const ComponentToPrint = forwardRef((props, ref) => (
  <div ref={ref} className="Print">
    <p>{props.text}</p>
    <ImageQrCode />
  </div>
))

function App() {
  const [text, setText] = useState()

  const componentRef = useRef()

  const generateQR = async () => {
    try {
      QRCode.toDataURL(text, opts, function (err, url) {
        if (err) throw err

        const img = document.getElementById('image')
        if (img.src !== url) {
          img.src = url
        }
      })
    } catch (err) {
      console.error(`Error QR code generate: ${err}`)
    }
  }

  const handleGenerateCode = async () => {
    try {
      await generateQR()
    } catch (e) {
      console.log(`Error function handle: ${e}`)
    }
  }

  const handleText = text => {
    setText(text)
  }

  const handleFileAsPNG = () => {
    exportComponentAsPNG(componentRef)
  }

  const handleFileAsPDF = () => {
    exportComponentAsPDF(componentRef)
  }

  return (
    <div className="App">
      <h1 className="Title">QR Code Generate</h1>

      <div className="Form">
        <input
          className="Input"
          placeholder="Enter with url or text"
          data-testid="text"
          onBlur={value => handleText(value.target.value)}
          autoFocus={true}
        />
        <button className="Button" onClick={handleGenerateCode}>
          Generate
        </button>
      </div>

      {text ? (
        <div>
          <ComponentToPrint ref={componentRef} text={text} />
          {/*<ImageQrCode />*/}
          <p>Download as:</p>
          <div className="Download">
            <button className="Outline" onClick={handleFileAsPNG}>
              PNG
            </button>
            <button className="Outline" onClick={handleFileAsPDF}>
              PDF
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
