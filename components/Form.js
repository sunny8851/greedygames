import { useState } from "react";

const Form = () => {
  const initialValues = { name: "", email: "", mobile: "", link: "", plan: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name);
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile no. is required";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Mobile no. must be more than 10 characters";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Mobile no. cannot exceed more than 10 characters";
    }
    if (!values.plan) errors.plan = "Monthly Revenue is required";
    else if (parseInt(values.plan) == 0)
      errors.plan = "Monthly Revenue is required";
    if (!errors.name && !errors.email && !errors.mobile && !errors.plan) {
      alert("Success! Your response has been submitted");
      setFormValues(initialValues);
    }
    return errors;
  };
  return (
    <div
      style={{ boxShadow: "0px 16px 50px #C7C7C75F" }}
      className="bg-white m-4  lg:sticky lg:top-20 relative top-[900px] pt-8 p-10 mt-4 max-w-[550px] lg:float-right xl:right-20"
    >
      <div className="lg:flex lg:gap-6">
        <div className="">
          <label className="font-semibold">Name</label>
          <br />
          <input
            style={{ border: "1px solid #0F1B4D0F", borderRadius: "4px" }}
            placeholder="Enter your Full Name"
            value={formValues.name}
            name="name"
            onChange={handleChange}
            className=" p-1 w-full lg:w-44 mt-1 bg-[#F9FAFE]"
          ></input>
          <p className="text-red-600">{formErrors.name}</p>
        </div>
        <div>
          <label className="font-semibold">Email</label>
          <br />
          <input
            value={formValues.email}
            onChange={handleChange}
            name="email"
            style={{ border: "1px solid #0F1B4D0F", borderRadius: "4px" }}
            placeholder="Enter your Email Address"
            className="p-1 w-full lg:w-52 mt-1 bg-[#F9FAFE]"
          ></input>
          <p className="text-red-600">{formErrors.email}</p>
        </div>
      </div>
      <div className="mt-5">
        <label className="font-semibold">Phone Number</label>
        <br />
        <input
          name="mobile"
          type="number"
          value={formValues.mobile}
          pattern="[0-9]*"
          onChange={handleChange}
          style={{ border: "1px solid #0F1B4D0F", borderRadius: "4px" }}
          placeholder="Enter your phone number with country code"
          className="p-1 w-full mt-1 bg-[#F9FAFE]"
        ></input>
        <p className="text-red-600">{formErrors.mobile}</p>
      </div>
      <div className="mt-5">
        <label className="font-semibold">App/Website Link (optional)</label>
        <br />
        <input
          name="link"
          onChange={handleChange}
          type="text"
          value={formValues.link}
          style={{ border: "1px solid #0F1B4D0F", borderRadius: "4px" }}
          placeholder="Enter you App/Website you wish to monetise"
          className="p-1 w-full mt-1 bg-[#F9FAFE]"
        ></input>
      </div>
      <div className="mt-5">
        <label className="font-semibold">Monthly Revenue (USD)</label>
        <br />
        <input
          name="plan"
          value={formValues.plan}
          onChange={handleChange}
          style={{ border: "1px solid #0F1B4D0F", borderRadius: "4px" }}
          placeholder="Enter your Average monthly revenue in USD"
          className="p-1 w-full mt-1 bg-[#F9FAFE]"
        ></input>
        <p className="text-red-600">{formErrors.plan}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-[#126FED] mt-20 text-white p-2 mb-2"
      >
        Get Started
      </button>
      <p className="text-xs">
        By signing up, you agree to our{" "}
        <span className="text-blue-700 cursor-pointer">Terms</span> and{" "}
        <span className="text-blue-700 cursor-pointer">Privacy Policy</span>
      </p>
    </div>
  );
};

export default Form;
