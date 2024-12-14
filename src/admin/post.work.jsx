import React, { useState } from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const PostWork = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !file) {
            setMessage("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append("title_work", title);
        formData.append("description_work", description);
        formData.append("file", file);

        const url = import.meta.env.VITE_API_URL + "/work/add";

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                setMessage("Work uploaded successfully!");
                setFile(null);
                setPreview(null);
                setTitle("");
                setDescription("");
            } else {
                setMessage("Failed to upload work.");
            }
        } catch (error) {
            console.error("Error uploading work:", error);
            setMessage("An error occurred while uploading the work.");
        }
    };

    return (
        <div className="w-full m-auto p-5">
            <div className="flex align-bottom gap-10">
                <Link to={"/admin/work"}>
                    <BiArrowBack className="text-2xl " />
                </Link>
                <h2 className="text-xl font-semibold pt-2 pb-2">Upload Work</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                        className="p-2 mt-4 w-full border-red-700"
                    />
                </div>
                <div className="mb-10">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        className="w-full p-2 mt-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2">Image File:</label>
                    <div className="custom-file-input">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="hidden"
                            id="file-input"
                        />
                        <label
                            htmlFor="file-input"
                            className="block p-2 bg-blue-500 text-white text-center cursor-pointer"
                        >
                            Choose File
                        </label>
                    </div>
                    {preview && (
                        <div className="mt-3">
                            <img
                                src={preview}
                                alt="Selected Preview"
                                className="w-full h-auto border rounded"
                            />
                        </div>
                    )}
                </div>
                <button type="submit" className="pointer p-2 bg-green-500 text-white">
                    Upload
                </button>
            </form>
            {message && <p className="mt-2 text-green-800">{message}</p>}
        </div>
    );
};

export default PostWork;
