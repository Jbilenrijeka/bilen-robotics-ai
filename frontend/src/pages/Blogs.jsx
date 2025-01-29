import React, { useState } from 'react'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '' })

  const addBlog = () => {
    if (newBlog.title && newBlog.content && newBlog.author) {
      setBlogs([...blogs, newBlog])
      setNewBlog({ title: '', content: '', author: '' })
    }
  }

  const deleteBlog = (index) => {
    setBlogs(blogs.filter((_, i) => i !== index))
  }

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
      <input
        type='text'
        placeholder='Title'
        value={newBlog.title}
        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        className='border p-2 rounded w-full mb-2'
      />
      <textarea
        placeholder='Content'
        value={newBlog.content}
        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        className='border p-2 rounded w-full mb-2'
      />
      <input
        type='text'
        placeholder='Author'
        value={newBlog.author}
        onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
        className='border p-2 rounded w-full mb-2'
      />
      <button
        onClick={addBlog}
        className='bg-blue-600 text-white px-4 py-2 rounded'
      >
        Add Blog
      </button>
      <div className='mt-4 space-y-4'>
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} onDelete={() => deleteBlog(index)} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
