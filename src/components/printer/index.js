import React, {forwardRef, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {
  exportComponentAsPDF,
  exportComponentAsPNG
} from 'react-component-export-image'
import QrCode from '../qr-code'

// eslint-disable-next-line react/display-name
const ComponentToPrint = forwardRef((props, ref) => (
  <div ref={ref}>
    <h1>Aqui será uma impressão do QR Code:</h1>
    {/*<QrCode text={props} />*/}
  </div>
))

const Printer = ({showPrinterPDF, showPrinterPNG, text}) => {
  const componentRef = useRef()

  useEffect(() => {
    if (showPrinterPNG) {
      exportComponentAsPNG(componentRef)
    }

    if (showPrinterPDF) {
      exportComponentAsPDF(componentRef)
    }
  }, [showPrinterPDF, showPrinterPNG])

  return (
    <div className="Print">
      <ComponentToPrint ref={componentRef} />
    </div>
  )
}

Printer.propTypes = {
  showPrinterPDF: PropTypes.bool,
  showPrinterPNG: PropTypes.bool,
  text: PropTypes.string
}

export default Printer
