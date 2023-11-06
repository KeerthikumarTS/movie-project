import { useFormik } from "formik"; 
import { object, string,} from 'yup';

const formvalidationSchema=object({
  username : string().required("Why not fill this username?").min(5, "Username must be atleast 5 characters"),
  password : string().required("Why not fill this Password?").min(8,"Password be atleast 8 characters").max(12, "Password should be within 12 characters")
})

export function Basicform() {
  const {handleSubmit,handleChange,values, errors, handleBlur, touched} = useFormik({
    initialValues : {username:"", password:""},
    validationSchema: formvalidationSchema,
    onSubmit:(values)=>
    console.log("formik-values", values)
  });
  return (
    <form onSubmit={handleSubmit}>
      <input 
      onChange={handleChange} 
      type="text" placeholder="username" 
      value={values.username} 
      name="username"
      onBlur={handleBlur}
      />
      <p>{touched.username && errors.username ? errors.username : null}</p>
      <input onChange={handleChange} 
      type="text" placeholder="password" 
      value={values.password} 
      name="password" 
      onBlur={handleBlur}
      />
      <p>{touched.password && errors.password ? errors.password : null}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
