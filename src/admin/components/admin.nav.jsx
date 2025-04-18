export default function AdminNav({ activeTab, setActiveTab }) {
    return (
      <nav className="flex space-x-4">
        <button
          onClick={() => setActiveTab('articles')}
          className={`px-4 py-2 rounded-md ${activeTab === 'articles' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Articles
        </button>
        <button
          onClick={() => setActiveTab('works')}
          className={`px-4 py-2 rounded-md ${activeTab === 'works' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Works
        </button>
        <button
          onClick={() => setActiveTab('comments')}
          className={`px-4 py-2 rounded-md ${activeTab === 'comments' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Comments
        </button>
      </nav>
    );
  }