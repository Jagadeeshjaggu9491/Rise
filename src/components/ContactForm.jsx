import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Simulate success
    setTimeout(() => {
      navigate("/thank-you");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded bg-white">
      <h4 className="mb-3">Contact Us</h4>

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
          type="number"
          name="phone"
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

      <button className="btn btn-primary bg-main border-0 w-100">Submit</button>
    </form>
  );
}
