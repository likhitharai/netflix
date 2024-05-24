import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-t from from-black w-screen aspect-video'>
        <h1 className='text-4xl font-bold p-6'>{title}</h1>
        <p className='px-6 text-lg w-1/3'>{overview}</p>
        <div className='py-2'>
            <button className='bg-white text-black px-12 p-4 text-lg font-bold rounded-lg m-2 hover:bg-opacity-80'>Play</button>
            <button className='bg-gray-400 text-white px-12 p-4 text-lg bg-opacity-50 rounded-lg m-2 hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
