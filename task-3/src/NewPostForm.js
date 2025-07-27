import React, { useState } from 'react';

const NewPostForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Vui lòng nhập cả tiêu đề và nội dung!');
      return;
    }

    const newPost = {
      title: title,
      content: content,
    };

    console.log('Đã gửi bài viết mới:', newPost);
    alert(`Bài viết "${newPost.title}" đã được gửi thành công!`);

    // reset form sau khi gửi
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Tạo Bài Viết Mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{width: '30%', fontSize: '20px', fontWeight: 'bold', marginRight: '20px'}}>
            Tiêu đề
          </label>
          <input
            type="text"
            id="post-title"
            value={title} 
            style={{ width: '30%', padding: '8px', marginBottom: '10px' }}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Nhập tiêu đề bài viết..."
          />
        </div>

        <div>
          <label style={{width: '30%', fontSize: '20px', fontWeight: 'bold', marginRight: '20px', alignContent: 'center'}}>
            Nội dung
          </label>
          <textarea
            id="post-content"
            value={content} 
            style={{ width: '30%', padding: '8px', marginTop: '30px', height: '100px' }}
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Nhập nội dung bài viết..."
          />
        </div>

        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
          type="submit"
        >
          Đăng Bài
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;