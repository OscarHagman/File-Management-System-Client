export const determineImageFormat = (fileType: string) => {
   switch (fileType) {
      case 'docx': return <img src={'pathwayToImage'} />
      case '.pdf': return <img src={'pathwayToImage'} />
      case '.dff': return <img src={'pathwayToImage'} />
      case '.exe': return <img src={'pathwayToImage'} />
      default: return <img src={'defaultImagePathway'} />
   }
}