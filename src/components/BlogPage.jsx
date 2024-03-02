import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

const BlogPage = () => {
    const {posts, loading} = useContext(AppContext);
    console.log(posts);
  return (
    <div className='flex flex-col shadow-md justify-items-center border mx-32 my-8 p-4'>
        {loading ? (
            <Spinner /> 
        ) : posts.length === 0 ? (
            <div className=''>
                <p>No Post Found</p>
            </div>
        ) : (
            posts.map((post) => {
                return <div key={post.id} className='flex flex-col shadow p-4 m-4'>
                   <p className="font-bold text-sm ">{post.title}</p>
                        <p className="text-[14px]">
                            By <span className="italic">{post.author}</span> or{" "}
                            <span className="underline font-bold">{post.category}</span>
                        </p>
                        <p className="text-[14px]">Posted on {post.date}</p>
                        <p className="text-[16px] mt-[13px]">{post.content}</p>
                        <div className="flex flex-wrap gap-x-2 items-center">
                            {post.tags.map((tag, index) => {
                                return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>;
                            })}
                        </div>
                    </div>
            })
        )

        }
       


    </div>
  )
}

export default BlogPage