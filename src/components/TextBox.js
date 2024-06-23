'use client';
import { useState } from "react";

export default function CommentBox() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    console.log(comment);
    // Here you would typically handle the submission, e.g., send the comment to a server
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-full mx-auto my-5">
      <div className="avatar flex items-center gap-5 mb-5 ml-2">
        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
        </div>
        <p>Dwinawan</p>
      </div>
      <textarea
        className="w-full h-20 border border-gray-300 rounded-md p-2 mb-3 resize-none"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Write a comment..."
      />
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          onClick={handleCommentSubmit}
        >
          Comment
        </button>
      </div>
    </div>
  );
}
