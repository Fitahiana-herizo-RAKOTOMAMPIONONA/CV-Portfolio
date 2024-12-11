   const baseURL = import.meta.env.VITE_API_URL; // URL de ton backend
    const imageUrl = file_url.startsWith("http") ? file_url : `${baseURL}/${file_url}`;