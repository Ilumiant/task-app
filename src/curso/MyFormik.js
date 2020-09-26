import React from 'react'
import {withFormik, Field} from 'formik'
const MyFormik = (props) => {

  const {
    handleSubmit,
    isSubmitting,
    errors,
  }= props

  return (
    <>
      <h1>Formulario tipo Formik </h1>
      <form 
        onSubmit={handleSubmit}
      >
        <Field
              type="text"
              name="nombre"
        />
        {errors.nombre}

        <Field
              type="text"
              name="apellido"
        />

        <button type="submit" disabled={isSubmitting}>subir</button>
      </form>
    </>
  )
}

export default withFormik({

  validate(values) {
    const errors ={};

      if(!values.nombre) {
        errors.nombre = "se requiere el rellenar el campo nombre";
      } else if(values.nombre.length >5){
        errors.nombre = "solo deben colocarse mas de 5 caracteres";
      }
    
    return errors;
  },

handleSubmit(values,formikBag){
  formikBag.setSubmitting(false)
  console.log(values)
}

})(MyFormik) 
