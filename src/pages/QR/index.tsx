import Page from '../../layouts/Page';
import QrReader from 'react-qr-reader';
import './QR.scss';
import { useEffect, useRef, useState } from 'react';

const QR: React.FC = () => {
  const [data] = useState<any>(false)
  const qrRef = useRef() as any
  const [scanResultFile, setScanResultFile] = useState('');

  useEffect(() => {
    console.log(data, scanResultFile)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleScanFile = (result: any) => {
    if (result) {
      setScanResultFile(result);
    }
  }

  const handleErrorFile = (error: any) => {
    console.log(error);
  }
  return (
    <Page name="Escanear código">
      <div>
        <QrReader
          ref={qrRef}
          onScan={handleScanFile}
          onError={handleErrorFile}
        />
      </div>
    </Page>
  );
};

export default QR;
