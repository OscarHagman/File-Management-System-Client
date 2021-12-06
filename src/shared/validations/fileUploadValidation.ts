import * as Yup from 'yup'

export const fileUploadValidation =
   Yup.object({
      author: Yup.string()
         .min(2, 'Ange ditt namn')
         .required('Detta fält är obligatoriskt.'),
   })
