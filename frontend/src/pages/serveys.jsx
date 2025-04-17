import React from "react";
import { useState, useEffect } from "react";

function Serveys() {
  const [upcomingSurveys, setUpcomingSurveys] = useState([]);
  const [closedSurveys, setClosedSurveys] = useState([]);
  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/Serveys/");
        const data = await response.json();
        console.log(data);

        const currentDateTime = new Date();

        const upcoming = [];
        const closed = [];

        data.forEach((survey) => {
          if (new Date(survey.startDate) > currentDateTime) {
            upcoming.push(survey);
          } else {
            closed.push(survey);
          }
        });

        setUpcomingSurveys(upcoming);
        setClosedSurveys(closed);

        console.log("Upcoming Surveys:", upcoming);
        console.log("Closed Surveys:", closed);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    }

    fetchData();
    console.log("Updated Upcoming Surveys:", upcomingSurveys);
    console.log("Updated Closed Surveys:", closedSurveys);
  }, []);

  // useEffect(() => {
  //   console.log("Updated Upcoming Surveys:", upcomingSurveys);
  //   console.log("Updated Closed Surveys:", closedSurveys);
  // }, [upcomingSurveys, closedSurveys]);

  const renderSurvey = (survey, isclosed = false) => (
    <div className="feature-item bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative group text-start border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 text-center">
        {survey.title.toUpperCase()}
      </h3>
      <p className="text-gray-700 mb-2 max-w-xs mx-auto text-center">
        {survey.description.toUpperCase()}
      </p>
      <p className="text-xs text-gray-500 mb-1">
        <span className="font-medium text-gray-700">Start Date:</span>{" "}
        {new Date(survey.startDate).toLocaleDateString()}
      </p>
      <p className="text-xs text-gray-500">
        <span className="font-medium text-gray-700">End Date:</span>{" "}
        {new Date(survey.endDate).toLocaleDateString()}
      </p>
      {!isclosed && (
        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 text-white px-5 py-2 rounded-lg mt-4 cursor-pointer hover:bg-blue-600">
          Response &rarr;
        </button>
      )}
    </div>
  );

  return (
    <>
      <div className="bg-cream">
        <section className="text-center py-8 ">
          <h2 className="text-2xl font-bold mb-4">Upcoming/Ongoing Surveys</h2>
          <div className="slider flex flex-wrap justify-center gap-4">
            {upcomingSurveys.map(survey => renderSurvey(survey, false))}
          </div>
        </section>
        <section className="text-center py-8 ">
          <h2 className="text-2xl font-bold mb-4">Closed Surveys</h2>
          <div className="slider flex flex-wrap justify-center gap-4">
            {closedSurveys.map(survey => renderSurvey(survey, true))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Serveys;
