import { useState, useEffect } from 'react';
import api from '../../../core/service/api';

export default function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await api.get('/comments');
      setComments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/comments/${id}`);
      fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment._id} className="border rounded-md p-4">
            <div className="flex justify-between">
              <h3 className="font-medium">{comment.author}</h3>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{comment.content}</p>
            <button 
              onClick={() => handleDelete(comment._id)}
              className="mt-2 px-3 py-1 bg-red-600 text-white rounded-md text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}