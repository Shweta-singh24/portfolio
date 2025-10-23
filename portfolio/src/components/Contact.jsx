import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto">
        <form className="flex flex-col gap-6">
          <input type="text" placeholder="Your Name" className="p-4 border rounded-lg"/>
          <input type="email" placeholder="Your Email" className="p-4 border rounded-lg"/>
          <textarea placeholder="Your Message" className="p-4 border rounded-lg"></textarea>
          <button type="submit" className="bg-pink-500 text-white font-semibold p-4 rounded-lg hover:bg-pink-600 transition">Send Message</button>
        </form>
        <p className="text-center mt-6 text-gray-600">Or email me at: shwetasingh02415@gmail.com</p>
      </div>
    </section>
  );
};

export default Contact;
