import React, { useState } from 'react'
import LinkCard from '../components/LinkCard'

const Links = () => {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState({ title: '', url: '' })

  const addLink = () => {
    if (newLink.title && newLink.url) {
      setLinks([...links, newLink])
      setNewLink({ title: '', url: '' })
    }
  }

  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index))
  }

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Links</h1>
      <input
        type='text'
        placeholder='Title'
        value={newLink.title}
        onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
        className='border p-2 rounded w-full mb-2'
      />
      <input
        type='url'
        placeholder='URL'
        value={newLink.url}
        onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
        className='border p-2 rounded w-full mb-2'
      />
      <button
        onClick={addLink}
        className='bg-blue-600 text-white px-4 py-2 rounded'
      >
        Add Link
      </button>
      <div className='mt-4 space-y-4'>
        {links.map((link, index) => (
          <LinkCard key={index} {...link} onDelete={() => deleteLink(index)} />
        ))}
      </div>
    </div>
  )
}

export default Links
// In the code snippet above, we have a Links component that manages a list of links. The component has a state variable links that stores the list of links and a newLink state variable that stores the title and URL of the new link. The addLink function adds the new link