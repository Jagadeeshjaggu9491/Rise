import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../Styles/thank-you.css";

function ThankYou({ name, phone, email, message }) {
    const year = new Date().getFullYear();

    useEffect(() => {
        // Google Ads Conversion Tracking (Thank You Page Only)
        if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", {
                send_to: "AW-17744528507/7hb8CISn588bEPuIoI1C",
                value: 1.0,
                currency: "INR",
            });
        }
    }, []);

    return (
        <div className="thankyou-wrapper">
            <motion.div
                className="thankyou-card shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Header */}
                <motion.div
                    className="thankyou-header"
                    initial={{ backgroundColor: "#003a8c" }}
                    animate={{ backgroundColor: "#004aad" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Thank You, {name}!</h2>
                </motion.div>

                {/* Body */}
                <div className="thankyou-body">
                    <p>
                        We appreciate your interest in <strong>Rise with 9 By Trilight</strong>.
                        <br />Our team will contact you shortly.
                    </p>

                    <div className="info-box">
                        <strong>Need immediate help?</strong>
                        <br />
                        Email:{" "}
                        <a href="mailto:contact@nova-financialdistricthyd.com">
                            contact@nova-financialdistricthyd.com
                        </a>
                        <br />
                        Phone:{" "}
                        <a href="tel:+919652389333">
                            +91 96523 89333
                        </a>
                    </div>

                    <p className="mt-4 mb-0 text-center">
                        Warm Regards, <br />
                        <strong>Rise with 9 Team</strong>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default ThankYou;
