"use client"

import React from "react";

const page = () => {

    const sendEmail = async () => {
        try {
            const response = await fetch("/api/email", {
                method: "POST",
            });
            const data = await response.json();
            console.log("Email sent successfully:", data);
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button onClick={sendEmail}>Send Email</button>
        </div>
    );
};

export default page;
