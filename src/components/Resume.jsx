import React from 'react'
import '../styles/Resume.css'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
function Resume(props) {

const pdfRef = useRef();

const downloadPDF = () => {
  const input = pdfRef.current;
  html2canvas(input).then((canvas)=> {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) /2;
    const imgY = 30;
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save('Resume.pdf');
  })
}


  return (
    <div>
      <div className='download-btn'>
        <button className='download' onClick={downloadPDF} >Downlaod PDF</button>
      </div>
    <div className='resume' ref={pdfRef}>
      <h3 className='name'>{props.name}</h3>
      <div className='emailPhone'>
      <p className='email'>{props.email}</p>
      <p className='phone'>{props.phone}</p>
      </div>
      <hr />
      <h4>Education</h4>
      <div className='education'>
      <p className='degree upper-case'>{props.degree}</p>
      <p className='cap'>{props.school}</p>
      <p className='date'>{props.start}</p>
      <p className='date'> - {props.end}</p>
      </div>
      <h4>Work Experience</h4>
      <div className='work-exp'>
      <p className='upper-case'>{props.job}</p>
      <p className='cap'>{props.company}</p>
      <p className='date'>{props.start1}</p>
      <p className='date'> - {props.end1}</p>
      <p>{props.description}</p>
      </div>
    </div>
    </div>
  )
}

export default Resume