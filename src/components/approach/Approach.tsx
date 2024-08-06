import React, { useRef, useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "emailjs-com";
import * as yup from "yup";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const validateForm = async () => {
    try {
      await schema.validate(formState, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors: { [key: string]: string } = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
      }
      setErrors(validationErrors);
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await validateForm();
    if (isValid && form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_rwthzoe",
          "template_gpjb5pd",
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setLoading(false);
          e.currentTarget.reset();
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Email sending error:", error);
          setLoading(false);
        });
    }
  };

  return (
    <section id="contact" className="py-16 text-white">
      <h2 className="text-2xl font-bold text-center mb-12 text-white md:text-4xl">
        Let's
        <span className="text-purple-400"> Talk</span>
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-12">
        <div className=" w-full md:w-3/12  flex flex-col gap-4">
          <article className=" w-full p-4 bg-black-800 rounded-lg text-center border border-slate-700 transition hover:bg-slate-700">
            <MdAttachEmail className="text-3xl mb-2 mx-auto" />
            <h4 className="text-xl mb-1">Email</h4>
            <h6 className="text-sm mb-2">ocynthiaebele@gmail.com</h6>
            <a
              href="mailto:ocynthiaebele@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400"
            >
              Send a Message
            </a>
          </article>
          <article className=" w-full p-4 bg-black-800 rounded-lg text-center border border-slate-700 transition hover:bg-slate-700">
            <IoLogoWhatsapp className="text-3xl mb-2 mx-auto" />
            <h4 className="text-xl mb-1">Whatsapp</h4>
            <h6 className="text-sm mb-2">07039065248</h6>
            <a
              href="https://wa.me/+2347039065248?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full md:w-6/12 lg:w-4/12"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formState.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-transparent border border-gray-700 text-white"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-transparent border border-gray-700 text-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <textarea
            name="message"
            cols={30}
            rows={7}
            placeholder="Your Message"
            value={formState.message}
            onChange={handleChange}
            required
            className="p-3 rounded bg-transparent border border-gray-700 text-white"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
          <button
            type="submit"
            className="py-3 px-6 bg-slate-900 rounded text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
