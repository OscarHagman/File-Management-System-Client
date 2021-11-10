import React, { useState, useEffect } from "react"
import Button from "./components/buttons/Button"
import { UploadButton } from "./components/buttons/Upload.Button"
import FieldInput from "./components/inputs/Field.Input"
import FileCardList from "./components/file-cards/File.Card.List"
import Categories from "./components/inputs/Categories"
import Constants from "./shared/global/Constants"
import * as http from "./shared/api/BackendAPI"


function App() {
  const [searchField, setSearchField] = useState<string>("")
  const [searchResult, setSearchResult] = useState<any>()
  const [uploadedFile, setFile] = useState<File>()
  const [category, setCategory] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  
  const log = () => {
    console.log("Search Result:", searchResult)
  }

  //useEffect(() => {console.log("Used effect")}, [searchResult, setSearchResult])

  const checkFormValid = (): boolean => {
    return (uploadedFile && category && author) ? true : false
  }

  const submitFile = () => {
    if(checkFormValid()) {
      http.uploadFile(author, category, uploadedFile)
      .catch((error) => console.log(error))

      setFile(undefined)
      setCategory("")
      setAuthor("")
    }
    else {
      alert("All fields has to be filled")
    }
  }

  const search = () => {
    http.fuzzySearchFiles(searchField)
    .then((response) => {
      setSearchResult(response.data)
    })
    .catch((error) => {
      console.log("ERROR:", error)
      alert('There are no files that match ' + '"' + searchField + '"')
    })
  }

  const deleteFileFromResult = (fileId: string) => {
    //Delete API has to be called on the FileCard, otherwise weird bugs appear...
    for (let i = 0; i < searchResult.length; i++) {
      if (searchResult[i]._id === fileId) {
        let updatedResult = searchResult
        delete updatedResult[i]
        setSearchResult(updatedResult.filter((n: any) => n))
      }
    }
  }

  return (
    <div className="App">
      <h1>File Manager</h1>
      <FieldInput text="Search for files" searchChange={
        (e: React.FormEvent<HTMLInputElement>) => {
          setSearchField(e.currentTarget.value.toLocaleLowerCase())
        }
      }/>
      <UploadButton text="Upload file" handleFile={(file: File) => {setFile(file)}}/>
      <Button text="Search" action={search}/>
      <Button text="log search results" action={log}/>

      {uploadedFile && <>
        <Categories
          title={uploadedFile.name}
          categories={Constants.CATEGORIES}
          categoryChange={
            (e: React.ChangeEvent<HTMLInputElement>): void => {
              setCategory(e.currentTarget.value)
            }
        }/>
        <FieldInput text="Author" searchChange={
          (e: React.FormEvent<HTMLInputElement>) => {
            setAuthor(e.currentTarget.value.toLocaleLowerCase())
          }
        }/>
        <Button text="Upload" action={submitFile}/>
      </>}

      {searchResult && <FileCardList
        files={searchResult}
        deleteFileCard={(fileId: string) => deleteFileFromResult(fileId)}/>}
      

    </div>
  );
}

export default App;
