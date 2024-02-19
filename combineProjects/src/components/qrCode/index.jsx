import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCodeGen = () => {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  const handleGenerateQRcode = ()=>{
     setQrcode(input);
  }
  return (
    <div>
      <h1>QR GENERATOR</h1>
      <div>
          <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Enter your value here'/>
          <button disabled={input && input.trim()!==''? false: true} onClick={handleGenerateQRcode}>Generate</button>
      </div>
      <div>
          <QRCode value={qrcode} size={400} bgColor='#fff'/>
      </div>
    </div>
  )
}

export default QrCodeGen
