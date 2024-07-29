import { useState, useEffect } from 'react';
import api from '../../../core/service/api';
import WorkAdmin from '../work.admin';

export default function WorkCRUD() {
  const [works, setWorks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    link: '',
    tags: '',
    category: ''
  });
  const [editingId, setEditingId] = useState(null);

  // Categories prédéfinies
  const categories = ['Web', 'Mobile', 'Design', 'Photographie', 'Autre'];

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const res = await api.get('/works');
      setWorks(res.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des projets", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null && formData[key] !== '') {
        form.append(key, formData[key]);
      }
    });

    try {
      if (editingId) {
        await api.put(`/works/${editingId}`, form);
      } else {
        await api.post('/works', form);
      }
      fetchWorks();
      resetForm();
    } catch (err) {
      console.error("Erreur lors de l'envoi", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/works/${id}`);
      fetchWorks();
    } catch (err) {
      console.error("Erreur lors de la suppression", err);
    }
  };

  const handleEdit = (work) => {
    setFormData({
      title: work.title,
      description: work.description,
      image: null,
      link: work.link || '',
      tags: work.tags?.join(', ') || '',
      category: work.category || ''
    });
    setEditingId(work._id);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: null,
      link: '',
      tags: '',
      category: ''
    });
    setEditingId(null);
  };

  return (
    <div>
        <WorkAdmin/>
    </div>
  );
}