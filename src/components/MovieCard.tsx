"use client";
import React from 'react'
import { Movie } from '../../typing'
import Image from 'next/image'
import { getImagePath } from '@/lib/getImagePath';

function MovieCard({ movie }: { movie: Movie }) {

  const imagePath = getImagePath(movie?.backdrop_path || movie?.poster_path);

  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">

      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/0 to-gray-300 dark:to-[#0A001C]/80 z-10"
      />

      <p className="absolute z-20 bottom-5 left-5">{movie?.title}</p>
      <Image
        width={1920}
        height={1080}
        key={movie?.id}
        alt={movie?.title}
        src={imagePath}
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
      />
    </div>
  )
}

export default MovieCard
