import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

const FormikForm = () => (
  <div>
    <h1>Formik Card Form</h1>
    <Formik
      initialValues={{ 
          cardNumber: '', 
          expDate: '', 
          cvv:'',
           firstName:'',
           lastName:'', 
           secretQuestion:'',
           secretAnswer:'',
        }}
      validate={values => {
        let errors = {};
        if (!values.cardNumber) {
          errors.cardNumber = 'Required';
        } else if (
          !values.cardNumber.length===16
        ) {
          errors.cardNumber = 'Invalid card number length';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
           <label>Card Number</label>
          <Field placeholder='card Number' type="number" name="cardNumber" />
          <ErrorMessage name="cardNumber" component="div" />
          <Field type="number" name="expDate" />
          <ErrorMessage name="expDate" component="div" />
          <Field type="number" name="cvv" />
          <ErrorMessage name="cvv" component="div" />
          <Field type="number" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
          <Field type="number" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
          <Field type="number" name="secretQuestion" />
          <ErrorMessage name="secretQuestion" component="div" />
          <Field type="number" name="secretAnswer" />
          <ErrorMessage name="secretAnswer" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
export default FormikForm;

// import React from 'react';
// import { Formik } from 'formik';


// // cardNumber: '',
// // expDate: '',
// // cvv:'',
// // firstName: '',
// // lastName: '',
// // secretQuestion: '',
// // secretAnswer: '',
// const FormikForm = () => (
//   <div>
//     <h1>Formik Form</h1>
//     <Formik
//       initialValues={{ cardNumber: '', expDate: '', cvv:'', firstName: '', lastName: '',secretQuestion: '',secretAnswer: '' }}
//       validate={values => {
//         let errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//           //       initialValues={{ cardNumber: '',
//         //    expDate: '', cvv:'', firstName: '', 
//         //    lastName: '',secretQuestion: '',secretAnswer: '' }}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="number"
//             name="cardNumber"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="number"
//             name="expDate"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//             <input
//             type="number"
//             name="cvv"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//             <input
//             type="text"
//             name="firstName"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//            <input
//             type="text"
//             name="lastName"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//            <input
//             type="text"
//             name="secretQuestion"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           <input
//             type="text"
//             name="secretAnswer"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default FormikForm;