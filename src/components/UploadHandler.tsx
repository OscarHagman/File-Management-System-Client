import { useState } from "react"
import BackendAPIService from "../shared/api/service/BackendAPIService"
import Constants from "../shared/global/Constants"
import Button from "./buttons/Button"
import { UploadButton } from "./buttons/Upload.Button"
import Categories from "./inputs/Categories"
import FieldInput from "./inputs/Field.Input"

export const UploadHandler = () => {
   const [uploadedFile, setFile] = useState<File | undefined>(undefined)
   const [category, setCategory] = useState<string>('')
   const [author, setAuthor] = useState<string>('')

   const checkFormValid = (): boolean => {
      return (uploadedFile && category && author) ? true : false
   }

   const submitFile = () => {
      if (checkFormValid()) {
         BackendAPIService.uploadFile(author, category, uploadedFile)
            .catch((error) => console.log(error))
         setFile(undefined)
         setCategory('')
         setAuthor('')
      }
      else {
         alert('All fields has to be filled')
      }
   }

   return (
      <div>
         <UploadButton text="Upload file" handleFile={(file: File) => { setFile(file) }} />
         {uploadedFile && <>
            <Categories
               title={uploadedFile.name}
               categories={Constants.CATEGORIES}
               categoryChange={
                  (e: React.ChangeEvent<HTMLInputElement>): void => {
                     setCategory(e.currentTarget.value)
                  }
               } />
            <FieldInput text="Author" searchChange={
               (e: React.FormEvent<HTMLInputElement>) => {
                  setAuthor(e.currentTarget.value.toLocaleLowerCase())
               }
            } />
            <Button text="Upload" action={submitFile} />
         </>}
      </div>
   )
}
