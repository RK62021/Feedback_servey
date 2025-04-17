import React from "react";
import contactus from "../assets/contactus.svg";
import mission from "../assets/mission.svg";
import chose from "../assets/choose.svg";
import offer from "../assets/workshop_new.svg";

function About() {
  return (
    <div className="p-5 font-sans bg-cream">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        About Us
      </h1>
      <div className="space-y-12 md:space-y-16 mx-auto max-w-4xl">
        <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2 my-auto text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Our Mission
            </h2>
            <p>
              At our Survey and Feedback platform, our mission is to empower
              individuals and organizations to make data-driven decisions by
              providing a seamless and intuitive way to collect, analyze, and
              act on feedback.
            </p>
          </div>
          <img
            src={mission}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-lg h-auto p-4"
          />
        </section>
        <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={offer}
            alt="What We Offer"
            className="w-full md:w-1/2 rounded-lg h-auto p-4"
          />
          <div className="w-full md:w-1/2 my-auto text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Customizable surveys to suit your specific needs.</li>
              <li>Real-time analytics to track responses and trends.</li>
              <li>
                Secure and reliable data storage to protect your information.
              </li>
              <li>Easy-to-use interface for both creators and respondents.</li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2 my-auto text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Why Choose Us?
            </h2>
            <p>
              We understand the importance of feedback in driving growth and
              improvement. Our platform is designed with the user in mind,
              ensuring that you can focus on what matters most—gaining valuable
              insights.
            </p>
            <p>
              With our advanced features and dedicated support, we aim to be
              your trusted partner in achieving your goals.
            </p>
          </div>
          <img
            src={chose}
            alt="Why Choose Us"
            className="w-full md:w-1/2 rounded-lg h-auto p-4"
          />
        </section>
        <section className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 pb-12">
          <img
            src={contactus}
            alt="Contact Us"
            className="w-full md:w-1/2 rounded-lg h-auto p-4"
          />
          <div className="w-full md:w-1/2 my-auto text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Contact Us
            </h2>
            <p>
              Have questions or need assistance? Feel free to reach out to our
              support team at{" "}
              <a
                href="mailto:support@surveyfeedback.com"
                className="text-blue-500 underline"
              >
                support@surveyfeedback.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
