import React from 'react';

const BlogCard =({title,content,author,onDelete})=>{
    return( 
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-grey-700">{content}</p>
            <p className="mt-4 text-sm text-gray-500">Author: {author}</p>
            {onDelete && (
                <button onClick={onDelete} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>

            )}
        </div>
    )

};

export default BlogCard;