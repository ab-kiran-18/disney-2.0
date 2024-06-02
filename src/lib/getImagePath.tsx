"use client"
export const getImagePath = (path: string, fullSize?: boolean) => {
  const imagePath = path ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${path}` :
    "https://links.papareact.com/images/no-image.png";
  return imagePath;
}
