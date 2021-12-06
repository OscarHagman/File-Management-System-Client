import pdfPNG from "../shared/images/format/pdf.png"
import imagePNG from "../shared/images/format/image.png"
import documentPNG from "../shared/images/format/documents.png"
import videoPNG from "../shared/images/format/video.png"
import docxPNG from "../shared/images/format/docx.png"
import unkownPNG from "../shared/images/format/unknownFileType.png"

export const displayFormatImage = (fileType: string) => {
   if(fileType.includes("image/")) return <img src={imagePNG} />
   else if (fileType.includes("text/")) return <img src={documentPNG} />
   else if (fileType.includes("video/")) return <img src={videoPNG} />
   else if (fileType == "application/pdf") return <img src={pdfPNG} />
   else if (fileType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return <img src={docxPNG} />
   }
   else return <img src={unkownPNG} />
}