import { useState } from 'react';
import ArticleCRUD from './components/article.crud';
import WorkCRUD from './components/work.crud';
import CommentList from './components/comment.list';
import AdminNav from './components/admin.nav';


export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('articles');

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        
        <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="shadow rounded-lg p-6 mt-6">
          {activeTab === 'articles' && <ArticleCRUD />}
          {activeTab === 'works' && <WorkCRUD />}
          {activeTab === 'comments' && <CommentList />}
        </div>
      </div>
    </div>
  );
}