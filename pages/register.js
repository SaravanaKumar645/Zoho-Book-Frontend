import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState,useEffect,useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/AuthForm.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { signup } from '../services/Auth'

function index() {
  const router = useRouter();
  const[err,seterr]=useState('')
  const[sucess,setsucess] =useState('')

   

   const formik = useFormik({
     initialValues:{
       firstname:'',
       lastname:'',
       email:'',
       password:''
     },
     validationSchema:yup.object({

      firstname:yup.string()
      .min(7,"Minimum 7 Characters required")
      .max(20,"Maximum 20 characters requied"),

       lastname:yup.string()
       .min(7,"Minimum 7 Characters required")
       .max(20,"Maximum 20 characters requied"),

       
   
     email:yup.string()
     .email()
     .min(7,"Minimum 7 Characters required")
     .max(40,"Maximum 40 characters requied"),
  
   password:yup.string()
   .min(7,"Minimum 7 Characters required")
   .max(20,"Maximum 20 characters requied"),
    

}),
     onSubmit: (data) => {
       console.log(data);
       let firstname = data.firstname
       let lastname = data.lastname
     
       let email = data.email 
       let password = data.password
      
  
       console.log({firstname,lastname,email,password})
      signup({firstname,lastname,email,password}).then(data=>{
      if(data.error){
        alert(data.error)

      }
      else{
        router.push("/signin")
      }
      }).catch(err=>{
        console.log("try again later")
      })
      
      
    }
   }

   )



   
  return (
    <>
    <div className={styles.reg}>
     <div className={styles.auth}>
         <h2 style={{color:"#008cba"}}>
           Codingmart Books Register 
         </h2>
         <ToastContainer />
         <form onSubmit={formik.handleSubmit} autoComplete="off">
         <div>
             <label htmlFor="firstname">First Name</label>
             <input type="text" id="firstname" name="firstname" 
               value={formik.values.firstname}
              onChange={ formik.handleChange} required
             
              />
              { formik.errors.firstname ? 
                <div style={{color:"red"}}>{formik.errors.firstname}</div>:null
            }
           </div>
           <div>
             <label htmlFor="lastname">Last Name</label>
             <input type="text" id="lastname" name="lastname" 
               value={formik.values.lastname}
              onChange={ formik.handleChange} required
             
              />
              { formik.errors.lastname ? 
                <div style={{color:"red"}}>{formik.errors.lastname}</div>:null
            }
           </div>

           

          
           <div>
             <label htmlFor="email">Email Address</label>
             <input type="email" id="email" 
              name="email" value={formik.values.email} required
               onChange={formik.handleChange}
              />
               { formik.errors.email ? 
                <div style={{color:"red"}}>{formik.errors.email}</div>:null
            }
           </div>
           <div>
             <label htmlFor="password">password</label>
             <input type="password" id="password" 
              name="password" value={formik.values.password} required
               onChange={formik.handleChange}
              />
               { formik.errors.password ? 
                <div style={{color:"red"}}>{formik.errors.password}</div>:null
            }
            </div>

            

              <input type="submit" value="Register" className={styles.button}   />
           
         </form>

         <p>
           Already had an Account ? 
           <Link href='/signin'> Login</Link>
         </p>
     </div>
    
    </div>
    </>
  );
}
export default index;
