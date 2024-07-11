"use client"
import React, { useState } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

const PostBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', JSON.stringify(content));
      formData.append('author', author);
      images.forEach((image, index) => {
        formData.append('image', image);
      });

      await axios.post('/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Clear form after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
      setImages([]);
      setErrorMessage('');
      
      // Optionally, navigate to a different route or display a success message
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Post a New Blog</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className='form-data'>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        
        <label>Content (JSON array):</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />

        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />

        <label>Upload Images:</label>
        <input type="file" onChange={handleImageChange} multiple />

        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
};

export default PostBlogForm;
