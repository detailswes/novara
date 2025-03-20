import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
  optInCall: Yup.boolean().oneOf([true], "You must accept the Opt-in Call"),
  optInSMS: Yup.boolean().oneOf([true], "You must accept the Opt-in SMS"),
});

// Helper function for dynamic class names
const getFieldClassNames = (fieldName: string, touched: any, errors: any) =>
  touched[fieldName] && errors[fieldName] ? "border-red-500" : "";

// Form Submission Handler
const handleSubmit = (values: any, { setSubmitting }: any) => {
  console.log(values);
  setSubmitting(false);
};

export default function HomeScreenForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        optInCall: false, // Ensure this is a boolean
        optInSMS: false, // Ensure this is a boolean
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          {/* Name and Email Fields */}
          <div className="flex gap-[14px] flex-col md:flex-row mt-[14px]">
            <div className="w-full">
              <Field
                name="name"
                as={Input}
                placeholder="Name"
                type="text"
                className={getFieldClassNames("name", touched, errors)}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="w-full">
              <Field
                name="email"
                as={Input}
                placeholder="Email"
                type="email"
                className={getFieldClassNames("email", touched, errors)}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Message Field */}
          <Field
            name="message"
            as={Textarea}
            className={`text-[14px] h-[122px] mt-[14px] ${getFieldClassNames(
              "message",
              touched,
              errors
            )}`}
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500 text-sm mt-1"
          />

          <div className="flex flex-col md:flex-row gap-0 md:gap-[30px]">
            {/* Opt-in Call Checkbox */}
            <div className="mt-4">
              <p className="font-semibold text-black">
                Opt-in Call <span className="text-red-600">*</span>
              </p>
              <label className="flex items-start gap-2 mt-1">
                <Field
                  type="checkbox"
                  name="optInCall"
                  className="mt-[2px] accent-primary "
                />
                <p className="text-[#1F1168] text-xs">
                  By clicking this box you provide express written consent
                  indicating a willingness for us to call you. We will never
                  share your information.
                </p>
              </label>

              <ErrorMessage
                name="optInCall"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Opt-in SMS Checkbox */}
            <div className="mt-4">
              <p className="font-semibold text-black">
                Opt-in SMS <span className="text-red-600">*</span>
              </p>
              <label className="flex items-start gap-2 mt-1">
                <Field
                  type="checkbox"
                  name="optInSMS"
                  className="mt-[2px] accent-primary "
                />
                <p className="text-[#1F1168] text-xs">
                  By clicking this box you provide express written consent
                  indicating a willingness for us to send you SMS messages. We
                  will never share your information.
                </p>
              </label>

              <ErrorMessage
                name="optInSMS"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="uppercase py-5 mt-5 h-[54px] px-[30px] bg-secondary hover:bg-primary hover:text-white min-w-[183px] text-[13px] font-semibold"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
