import emailjs from "@emailjs/browser";

export const sendEmail = (name, email, subject, message) => {
  const emailHTML = `
       <div>
       <h3>Name: ${name}</h3>
       <h3>Email: ${email}</h3>
       <h3>Subject: ${subject}</h3>
       <h3>Message: ${message}</h3>
       </div>
    `;

  emailjs.init("5kRqf-XJZCU7-czxr");
  emailjs
    .send("service_36e1ri3", "template_7vg3lrf", {
      html_content: emailHTML,
      html: true,
    })
    .then((response) => {
      console.log("Email sent:", response);
    })
    .catch((error) => {
      console.error("Email could not be sent:", error);
    });
};
