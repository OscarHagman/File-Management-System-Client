import pdfFormat from '../images/format/pdf.png'
import documentFormat from "../images/format/documents.png"
import docxFormat from "../images/format/docx.png"
import mp4Format from "../images/format/mp4.png"
import imageFormat from "../images/format/photo.png"
import unknownFormat from "../images/format/unknown-mail.png"

const fileFormats: any = {
	docx: {
        formatString: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        formatImage: docxFormat
    },
	document: {
        formatString: "text/",
        formatImage: documentFormat
    },
	mp4: {
        formatString: "video/mp4",
        formatImage: mp4Format
    },
	image: {
        formatString: "image/png",
        formatImage: imageFormat
    },
	pdf: {
        formatString: "application/pdf",
        formatImage: pdfFormat
    }
}

export const getFileFormatPNG: any = (fileType: string) => {
    console.log("FILE TYPE:", fileType)
    const fileTypesKeys = Object.keys(fileFormats)
    fileTypesKeys.forEach((key, index) => {
        if(fileType == fileFormats[key]["formatString"]){
            return fileFormats[key]["formatImage"]
        }
        else return unknownFormat
    })
}
