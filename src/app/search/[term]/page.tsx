import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
  params: {
    term: string;
  }
}

async function SearchPage({ params: { term } }: Props) {

  if (!term) return notFound();

  const termToUse = decodeURI(term);

  const searchedMovies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-5xl font-bold px-10">
          Results for {termToUse}
        </h1>
        <MoviesCarousel
          isVertical
          title="Movies"
          movies={searchedMovies}
        />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </div>
  )
}

export default SearchPage
