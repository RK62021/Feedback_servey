import React from "react";
import { useForm } from "react-hook-form";

function Create() {
const { register, handleSubmit,reset, formState: { errors } } = useForm();


const onSubmit = async (data) => {
    console.log(data);
    const { title, startDate, endDate, description } = data;
    // console.log(title, startdate, enddate, description);
    const response = await fetch("http://localhost:8080/api/v1/Serveys/profile/create-servey", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            startDate,
            endDate,
            description,
        }),
        
    });



    if (response.ok) {
        alert("Survey created successfully!");
        reset(); // Reset the form after successful submission
    } else {
        alert("Failed to create survey. Please try again.");
    }
    console.log("Survey created successfully!");
}

return (
    <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white h-[500px] bg-cream">
            <h2 className="text-2xl font-bold mb-4 text-center">Create the Survey</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter survey title"
                        {...register("title", { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="startdate" className="block text-sm font-medium text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startdate"
                        name="startdate"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        {...register("startDate", { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="enddate" className="block text-sm font-medium text-gray-700">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="enddate"
                        name="enddate"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        {...register("endDate", { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="3"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter survey description"
                        {...register("description", { required: true })}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Survey
                </button>
            </form>
        </div>
    </>
);
}

export default Create;
