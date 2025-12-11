import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // 🔥 NEW

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔥 show "Sending message..."

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("mobile", form.mobile);
    formData.append("message", form.message);

    try {
      const response = await fetch(
        "https://tattvarealty.co.in/backend-files/rise/contact-tattva.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        navigate("/thank-you");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false); // 🔥 hide after response
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded bg-white">
      <h4 className="mb-3 text-center">Contact Us</h4>

      <div className="mb-1">
        <label className="form-label">Name</label>
        <input
          name="name"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-1">
        <label className="form-label">Phone Number</label>
        <input
          type="tel"
          name="mobile"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-1">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-1">
        <label className="form-label">Message</label>
        <textarea
          name="message"
          className="form-control"
          rows="4"
          onChange={handleChange}
          required
        />
      </div>

      <button
        className="btn btn-primary bg-main border-0 w-100 mt-2"
        disabled={loading} // 🔥 disable during sending
      >
        {loading ? "Sending message..." : "Submit"} {/* 🔥 dynamic text */}
      </button>
    </form>
  );
}
