import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "../ui/input";

export default function PersonelDetails({ setCurrentStep, formikRef }: any) {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, "Contact number must be 10 digits")
      .required("Contact number is required"),
  });

  return (
    <div>
      <h2 className="mt-11 md:mt-[69px] text-4xl md:text-5xl md:text-[56px] text-text font-Frank font-normal text-center px-4">
        Provide your contact details
      </h2>

      <div className="sm:max-w-[585px] w-full px-4 mx-auto mt-10 md:mt-[65px]">
        <Formik
          innerRef={formikRef} // Attach the Formik ref here
          initialValues={{
            name: "",
            email: "",
            contactNumber: "",
          }}
          validationSchema={validationSchema}
          validateOnChange={true} // Enables real-time validation on field change
          validateOnBlur={true} // Enables validation when a field loses focus
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            setCurrentStep(3); // Proceed to next step if form is valid
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-5">
                <Field
                  name="name"
                  as={Input}
                  placeholder="Name"
                  className="mb-1"
                  type="text"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-5">
                <Field
                  name="email"
                  as={Input}
                  placeholder="Email"
                  className="mb-1"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mb-5">
                <Field
                  name="contactNumber"
                  as={Input}
                  placeholder="Contact Number"
                  className="mb-1"
                  type="text"
                  maxLength={10}
                />
                <ErrorMessage
                  name="contactNumber"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
