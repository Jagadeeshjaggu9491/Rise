import React, { useState } from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("message", form.message);

        try {
            const res = await fetch("https://tattvarealty.co.in/backend-files/rise/contact-tattva.php", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.status === "success") {
                window.location.href = "/thank-you"; // Redirect on success
            } else {
                console.error("Submission failed:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }

        setLoading(false);
    };

    return (
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                value={form.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                value={form.email}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                value={form.phone}
                onChange={handleChange}
                required
            />

            <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="form-control text-white py-3 bg-light bg-opacity-50 border-0"
                value={form.message}
                onChange={handleChange}
                required
            ></textarea>

            <div className="d-flex align-items-start">
                <input type="checkbox" className="me-2 mt-1" required />
                <p className="text-white small m-0">
                    I agree to receive communications about Rise With 9 and accept the
                    terms & conditions. I may be contacted via phone, SMS, email, or
                    WhatsApp for updates & offers. Your information will remain
                    confidential.
                </p>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3">
                <button
                    type="submit"
                    className="btn btn-warning bg-main border-1 px-4 py-3 fw-semibold w-100"
                    style={{ borderRadius: "10px" }}
                    disabled={loading}
                >
                    {loading ? "Sending message..." : "Schedule Your Visit"}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
