import { useState, useEffect } from 'react';
import api from '../../core/service/api';

export default function ArticleCRUD() {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await api.get('/articles');
      setArticles(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('content', formData.content);
    if (formData.image) form.append('image', formData.image);

    try {
      if (editingId) {
        await api.put(`/articles/${editingId}`, form);
      } else {
        await api.post('/articles', form);
      }
      fetchArticles();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/articles/${id}`);
      fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (article) => {
    setFormData({
      title: article.title,
      content: article.content,
      image: null
    });
    setEditingId(article._id);
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', image: null });
    setEditingId(null);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Articles</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            rows="4"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
            className="mt-1 block w-full"
          />
        </div>
        
        <div className="flex space-x-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
            {editingId ? 'Update' : 'Create'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-500 text-white rounded-md">
              Cancel
            </button>
          )}
        </div>
      </form>
      
      <div className="space-y-4">
        {articles.map(article => (
          <div key={article._id} className="border rounded-md p-4">
            <h3 className="font-medium">{article.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{article.content.substring(0, 100)}...</p>
            <div className="flex space-x-2 mt-2">
              <button 
                onClick={() => handleEdit(article)}
                className="px-3 py-1 bg-yellow-500 text-white rounded-md text-sm"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(article._id)}
                className="px-3 py-1 bg-red-600 text-white rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}