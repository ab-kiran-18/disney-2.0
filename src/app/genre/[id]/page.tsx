import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies, getPopularMovies } from '@/lib/getMovies';
import React from 'react'

type Props = {
  params: {
    id: string;
  }
  searchParams: {
    genre: string;
  }
}

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {

  const genreToUse = decodeURI(genre);

  const genreMovies = await getDiscoverMovies(id);
  const popularMovies = await getPopularMovies();

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-5xl font-bold px-10">
          Results for {genreToUse}
        </h1>
        <MoviesCarousel
          isVertical
          title="Genre"
          movies={genreMovies}
        />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  )
}

export default GenrePage
