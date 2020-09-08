import React, {useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {setText} from './reducers/action-creators'

import Printer from './components/printer'
import QrCode from './components/qr-code'

import './App.css'

const App = ({setTextAction}) => {
  const [showQrCode, setShowQrCode] = useState(false)
  const [showPrinterPDF, setShowPrinterPDF] = useState(false)
  const [showPrinterPNG, setShowPrinterPNG] = useState(false)

  const handleGenerateCode = () => {
    setShowQrCode(true)
  }

  const handleText = text => {
    setTextAction(text)
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
          <QrCode />

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

App.propTypes = {
  setTextAction: PropTypes.func
}

export default connect(null, {
  setTextAction: setText
})(App)
