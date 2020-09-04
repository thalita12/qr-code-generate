import React, {useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode'

const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  width: 250,
  margin: 1
}

const QrCode = ({text}) => {
  const generateQR = useCallback(() => {
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
  }, [text])

  useEffect(() => {
    generateQR()
  }, [generateQR])

  return <img id="image" src="http" alt="QR code of a text link" />
}

QrCode.propTypes = {
  text: PropTypes.string
}

export default QrCode
