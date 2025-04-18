import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Responses() {
const [surveys, setSurveys] = useState([]);
const [responses, setResponses] = useState([]);
const [selectedSurvey, setSelectedSurvey] = useState('');

useEffect(() => {
    // Fetch surveys when component mounts
    const fetchSurveys = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/surveys');
            setSurveys(response.data);
        } catch (error) {
            console.error('Error fetching surveys:', error);
        }
    };
    fetchSurveys();
}, []);

const handleSurveySelect = async (surveyId) => {
    setSelectedSurvey(surveyId);
    if (surveyId) {
        try {
            const response = await axios.get(`http://localhost:3000/api/responses/${surveyId}`);
            setResponses(response.data);
        } catch (error) {
            console.error('Error fetching responses:', error);
        }
    }
};

const calculateOptionCounts = (question) => {
    const counts = {};
    responses.forEach(response => {
        const answer = response.answers.find(a => a.questionId === question.id);
        if (answer) {
            counts[answer.value] = (counts[answer.value] || 0) + 1;
        }
    });
    return counts;
};

return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Survey Responses</h1>
            <div className="mb-6">
                <label htmlFor="survey-select" className="block text-gray-700 font-medium mb-2">
                    Select a Survey:
                </label>
                <select
                    id="survey-select"
                    onChange={(e) => handleSurveySelect(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select a survey</option>
                    {surveys.map((survey) => (
                        <option key={survey.id} value={survey.id}>
                            {survey.title}
                        </option>
                    ))}
                </select>
            </div>

            {selectedSurvey && (
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        Responses for Survey ID: {selectedSurvey}
                    </h2>
                    {responses.length > 0 ? (
                        responses[0].questions.map((question) => (
                            <div key={question.id} className="mb-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-2">{question.text}</h3>
                                <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg shadow-sm">
                                    {Object.entries(calculateOptionCounts(question)).map(([option, count]) => (
                                        <li key={option} className="text-gray-600">
                                            <span className="font-semibold text-gray-800">{option}:</span> {count} responses
                                        </li>
                                    ))}
                                </ul>
                                {question.rating && (
                                    <div className="mt-4">
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Average Rating:</span> {question.rating}
                                        </p>
                                    </div>
                                )}
                                {question.description && (
                                    <div className="mt-2">
                                        <p className="text-gray-600 italic">{question.description}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No responses available for this survey.</p>
                    )}
                </div>
            )}
        </div>
    </div>
);
}

export default Responses