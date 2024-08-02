"use client";

import { use, useEffect, useState } from "react";
import Search from "@/components/UI/search";
import Image from "next/image";
import { getAllPokemons } from "@/services/api";
import PokemonItem from "@/components/shared/pokemonItem";
import { PokemonList } from "@/index";
import Loader from "@/components/UI/loader";
import { useSearchParams } from "next/navigation";

export default function Home({ searchParams }: any) {
  const [data, setData] = useState<{ loading: boolean; items: PokemonList[] }>({
    loading: false,
    items: [],
  });
  const [search, setSearch] = useState("");
  const { q } = searchParams;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setData({ ...data, loading: true });
    const getData = async () => {
      try {
        const res = await getAllPokemons(q);
        setData({ ...data, items: res.data });
      } catch (error) {
        console.log(error);
      } finally {
        setData((prev) => ({ ...prev, loading: false }));
      }
    };
    getData();
  }, [q]);

  if (data.loading) return <Loader />;

  return (
    <>
      <Search onChange={handleChange} value={search} />
      <div className="flex flex-wrap gap-2 justify-center mt-10">
        {data.items.length > 0 ? (
          data.items.map((item) => <PokemonItem key={item.id} {...item} />)
        ) : (
          <h3>Not found</h3>
        )}
      </div>
    </>
  );
}
