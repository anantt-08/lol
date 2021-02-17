import React, {useState} from 'react';
import PdfViewer from './PdfViewer';
import {Button} from "react-bootstrap";
import pdf from './test.pdf';
function View() {
   const [showPdf, setShowPdf] = useState(false)
   return (
      <div className="App">
         <PdfViewer pdf={pdf} 
                    onCancel={()=>setShowPdf(false)}
                    visible={showPdf}
         />
         <Button onClick={()=>setShowPdf(!showPdf)}>
           Show PdfViewer
         </Button>
      </div>
   );
}
export default View;