import pdfPNG from "../shared/images/format/pdf.png"
import imagePNG from "../shared/images/format/image.png"
import documentPNG from "../shared/images/format/documents.png"
import videoPNG from "../shared/images/format/video.png"
import docxPNG from "../shared/images/format/docx.png"
import unkownPNG from "../shared/images/format/unknownFileType.png"
import "./styles.css"

export const displayFormatImage = (fileType: string) => {
   if(fileType.includes("image/")) return <img className="fileTypeIcon" src={imagePNG} />
   else if (fileType.includes("text/")) return <img className="fileTypeIcon" src={documentPNG} />
   else if (fileType.includes("video/")) return <img className="fileTypeIcon" src={videoPNG} />
   else if (fileType == "application/pdf") return <img className="fileTypeIcon" src={pdfPNG} />
   else if (fileType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return <img className="fileTypeIcon" src={docxPNG} />
   }
   else return <img className="fileTypeIcon" src={unkownPNG} />
}