import React from "react";
import survey from "../assets/easysurvey.svg";
import analytics from "../assets/analyt.svg";
import privacy from "../assets/privacy.svg";

function Feature() {
  return (
    <>
      <section className="features-section py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800">
            Why Choose Our Surveys?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* <!-- Feature 1: Easy Surveys --> */}
            <div className="feature-item bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                height={100}
                width={100}
                src={survey}
                alt="Easy Surveys"
                className="mx-auto mb-6 "
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Easy Surveys
              </h3>
              <p className="text-gray-600">
                Create and share surveys in just a few clicks. Our platform
                makes it simple and fast to gather feedback.
              </p>
            </div>

            {/* <!-- Feature 2: Real-Time Analytics --> */}
            <div className="feature-item bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={analytics}
                alt="Real-Time Analytics"
                className="mx-auto mb-6 w-16 h-16"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600">
                Monitor survey results as they come in. Analyze responses
                instantly to make informed decisions faster.
              </p>
            </div>

            {/* <!-- Feature 3: User Privacy --> */}
            <div className="feature-item bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={privacy}
                alt="User Privacy"
                className="mx-auto mb-6 w-16 h-16"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                User Privacy
              </h3>
              <p className="text-gray-600">
                We take privacy seriously. All survey responses are anonymous,
                ensuring that your users' information is safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
