import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center  justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div className=''>
          <h1 className='text-3xl font-semibold text-center my-7'>About Dewmin's Blog</h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>Welcome to my Blog! This blog was created by me as a personal project to share my thoughts and ideas with the world.
              This is a personal project where I share my thoughts on lifestyle, technology, health and well being,  sports, personal growth and more. I love exploring new topics and regularly update my blog with fresh content.
            </p>

            <p>The blog isn't just about my ideas, it's a place for community interaction. Readers are encouraged to leave comments, like others comments and engage with one another.
              I believe in the power of learning together and aims to create an environment where everyone can grow and improve.
            </p>

            <p>Dewmin's blog is a dynamic space where people from all walks of life come together to share insights and expand their knowledge.
              With regular updates and active reader participation, it's a place where learning never stops.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
