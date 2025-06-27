import React, { useRef, useState } from "react";

function AddPosts() {
    const inputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleClick = () => {
        inputRef.current.click(); // Trigger hidden file input
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
        }
    };
    return (
        <div className="w-full h-64 bg-zinc-700 rounded-md flex flex-col gap-4 justify-center items-center">
            <div
            onClick={handleClick}
            className="w-[30%] h-[50%] border-[1px] rounded-md flex justify-center items-center cursor-pointer hover:border-2 hover:border-gray-300 transition">
                {
                    image?(
                        <img src={image} alt="Preview" className="h-full object-contain rounded-md" />
                    ):(
                        <div className="w-12 h-12 rounded-md bg-zinc-700 flex justify-center items-center">
                            <span className="material-symbols-outlined">add_2</span>
                        </div>
                    )
                }
                <input type="file" accept="image/*" ref={inputRef} onChange={handleFileChange} className="hidden" />
            </div>
            <button type="button" className="hover:underline px-3 py-1.5 rounded-md border-[1px]">Post</button>
        </div>
    )
}

export default AddPosts;