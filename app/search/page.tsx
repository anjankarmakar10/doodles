"use client";

import useSearch from "@/hooks/useCuisines";

interface Params {
  searchParams: {
    query: string;
  };
}

const SearchPage = ({ searchParams }: Params) => {
  const { data } = useSearch(searchParams.query);
  console.log(data);

  return <section className="max-w-[1036px] mx-auto px-4 py-8">Hello</section>;
};
export default SearchPage;
