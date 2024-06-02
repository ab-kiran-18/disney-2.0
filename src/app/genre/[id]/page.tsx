import React from 'react'

type Props = {
  params: {
    id: string;
  }
  searchParams: {
    genre: string;
  }
}

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {

  return (
    <div>
      Genre with id:{id} and name:{genre}
    </div>
  )
}

export default GenrePage
