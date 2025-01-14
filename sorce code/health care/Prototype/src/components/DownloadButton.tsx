import { GoDownload } from "react-icons/go";

function DownloadButton() {
  return (
    <div className="flex gap-3">
      <button className="flex border-gray-900 text-gray-500">
        <GoDownload size={20} />
        <a
          href="../Desktop/Pre-AuthTrial.docx" // Replace with your file path or URL
          download="Pre-AuthTrial.docx" // Specifies the downloaded file name
        >
          Download pdf
        </a>
      </button>
      <button className="flex border-gray-900 text-gray-500">
        <GoDownload size={20} />
        <a
          href="../Desktop/pre AuthTrial.xlsx" // Replace with your file path or URL
          download="Pre-AuthTrial.docx" // Specifies the downloaded file name
        >
          Download exel
        </a>
      </button>
    </div>
  );
}

export default DownloadButton;

{
  /**import React from "react";
import { GoDownload } from "react-icons/go";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";

function WordToPdfConverter() {
  const handleDownload = async () => {
    // Step 1: Create a simple Word document
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "This is content from the Word document.",
                  bold: true,
                  size: 24,
                }),
              ],
            }),
            new Paragraph({
              children: [new TextRun("This content will be converted to a PDF.")],
            }),
          ],
        },
      ],
    });

    // Step 2: Generate a .docx blob
    const wordBlob = await Packer.toBlob(doc);

    // Step 3: Convert Word content to PDF using jsPDF
    const wordContent = await wordBlob.text(); // Get the text content of the Word file
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text(wordContent, 10, 10);

    // Step 4: Trigger PDF download
    pdf.save("Converted-Document.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center border-gray-900 text-gray-500 p-2 border rounded"
    >
      <GoDownload size={20} className="mr-2" />
      Download PDF
    </button>
  );
}

export default WordToPdfConverter;
 */
}