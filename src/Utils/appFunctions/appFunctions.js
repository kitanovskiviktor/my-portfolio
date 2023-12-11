import emailjs from '@emailjs/browser';

export const sendEmail = (name, email, subject, message) => {

    const emailHTML = `
       <div>
       <h3>Name: ${name.current.value}</h3>
       <h3>Email: ${email.current.value}</h3>
       <h3>Subject: ${subject.current.value}</h3>
       <h3>Message: ${message.current.value}</h3>
       </div>
    `;


    emailjs.sendForm('service_36e1ri3', 'template_7vg3lrf', {
        html_content: emailHTML,
        html: true,
    }, '5kRqf-XJZCU7-czxr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

}