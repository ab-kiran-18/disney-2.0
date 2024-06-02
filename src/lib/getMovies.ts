import { Discover_URL, Popular_URL, Search_URl, TopRated_URL, Upcoming_URL } from "@/url";
import { SearchResults } from "../../typing";

const fetchFromTmdb = async (url: URL, cacheTime?: number) => {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process?.env?.ACCESS_TOKEN}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    }
  };
  const response = await fetch(url?.toString(), options);
  const data = (await response.json()) as SearchResults;
  return data;
}


export const getUpcomingMovies = async () => {
  const url = new URL(Upcoming_URL);
  const data = await fetchFromTmdb(url);
  return data?.results;
}

export const getTopRatedMovies = async () => {
  const url = new URL(TopRated_URL);
  const data = await fetchFromTmdb(url);
  return data?.results;
}

export const getPopularMovies = async () => {
  const url = new URL(Popular_URL);
  const data = await fetchFromTmdb(url);
  return data?.results;
}


export const getDiscoverMovies = async (id?: string, keywords?: string) => {
  const url = new URL(Discover_URL);

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTmdb(url);
  return data?.results;
}

export const getSearchedMovies = async (term: string) => {
  const url = new URL(Search_URl);
  url.searchParams.set("query", term);

  const data = await fetchFromTmdb(url);
  return data?.results;

}
