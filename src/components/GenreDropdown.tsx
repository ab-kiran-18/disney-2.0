import { Genre_URL } from "@/url";
import { Genres } from "../../typing";
import GenreDropdownContent from "./GenreDropdownContent";

async function GenreDropdown() {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process?.env?.ACCESS_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24
    }
  };

  const response = await fetch(Genre_URL, options);
  const data = (await response.json()) as Genres;

  return (
    <GenreDropdownContent data={data} />
  )
}

export default GenreDropdown;
