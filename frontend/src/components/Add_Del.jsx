
import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
function Add_Del() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [surveys, setSurveys] = useState([]);
    const [selectedSurveyId, setSelectedSurveyId] = useState(null);
    const [showoptions, setShowOptions] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        // Fetch surveys from API
        const fetchSurveys = async () => {
            const response = await fetch('http://localhost:8080/api/v1/serveys/:serveyId',{
                method: "GET",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
            }); // Replace with your API endpoint

            const data = await response.json();
            console.log(data);
            setSurveys(data);
        };
        fetchSurveys();
    }, []);

    useEffect(() => {
        if (selectedSurveyId) {
            // Fetch questions for the selected survey
            const fetchQuestions = async () => {
                const response = await fetch(`/api/surveys/${selectedSurveyId}/questions`); // Replace with your API endpoint
                const data = await response.json();
                setQuestions(data);
            };
            fetchQuestions();
        }
    }, [selectedSurveyId]);

    return (
        <>
            <div className="overflow-y-auto p-6 bg-gray-50 min-h-screen">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="selectSurvey">
                        Select Survey
                    </label>
                    <select
                        id="selectSurvey"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => setSelectedSurveyId(e.target.value)}
                    >
                        <option value="">-- Select a Survey --</option>
                        {surveys.map((survey) => (
                            <option key={survey._id} value={survey._id}>
                                {survey.title}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedSurveyId && (
                    <>
                        <div>
                            <form className="p-6 border border-gray-200 rounded-lg shadow-md bg-white"
                            onSubmit={handleSubmit(onSubmit)}  >
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Question</h2>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="questionTitle">
                                        Question Title
                                    </label>
                                    <input
                                        type="text"
                                        id="questionTitle"
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your question"
                                        {...register("questionTitle", { required: true })}
                                    />
                                    {errors.questionTitle && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="questionType">
                                        Question Type
                                    </label>
                                    <select
                                        id="questionType"
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        onChange={(e) => {
                                            const optionsDiv = document.getElementById("optionsDiv");
                                            if (e.target.value === "multiplechoice") {
                                                optionsDiv.style.display = "block";
                                            } else {
                                                optionsDiv.style.display = "none";
                                            }
                                        }}
                                        {...register("questionType", { required: true })}
                                    >
                                        <option value="text">Text</option>
                                        <option value="rating">Rating</option>
                                        <option value="multiplechoice">Multiple Choice</option>
                                    </select>
                                    {errors.questionType && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                                </div>
                                <div id="optionsDiv" className="mb-4" style={{ display: "none" }}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="options">
                                        Options (comma-separated)
                                    </label>
                                    <input
                                        type="text"
                                        id="options"
                                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter options separated by commas"
                                        {...register("options", { required: true })}
                                    />
                                    {errors.options && <p className="text-red-500 text-sm mt-1">This field is required</p>}
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Add Question
                                </button>
                            </form>
                        </div>
                        <div>
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Questions List</h2>
                                <ul className="space-y-4">
                                    {questions.map((question) => (
                                        <li
                                            key={question.id}
                                            className="p-4 border border-gray-200 rounded-lg shadow-md bg-white flex justify-between items-center"
                                        >
                                            <div>
                                                <p className="font-medium text-gray-800">{question.title}</p>
                                                <p className="text-sm text-gray-500">Type: {question.type}</p>
                                            </div>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => {
                                                    console.log(`Delete question with id: ${question.id}`);
                                                }}
                                            >
                                                🗑️
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Add_Del;
