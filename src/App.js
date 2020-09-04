import React, {useState} from 'react'
import Printer from './components/printer'
import QrCode from './components/qr-code'

import './App.css'

function App() {
  const [text, setText] = useState('')
  const [showQrCode, setShowQrCode] = useState(false)
  const [showPrinterPDF, setShowPrinterPDF] = useState(false)
  const [showPrinterPNG, setShowPrinterPNG] = useState(false)

  const handleGenerateCode = () => {
    setShowQrCode(true)
  }

  const handleText = text => {
    setText(text)
  }

  const handleFileAsPDF = () => {
    setShowPrinterPDF(true)
  }

  const handleFileAsPNG = () => {
    setShowPrinterPNG(true)
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

      {showQrCode ? (
        <>
          <QrCode text={text} />

          <Printer showPrinterPDF={showPrinterPDF} showPrinterPNG={showPrinterPNG} />

          <p>Download as:</p>

          <div className="Download">
            <button className="Outline" onClick={handleFileAsPNG}>
              PNG
            </button>

            <button className="Outline" onClick={handleFileAsPDF}>
              PDF
            </button>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default App
