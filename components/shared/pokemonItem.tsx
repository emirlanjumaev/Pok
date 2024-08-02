import { PokemonList } from "@/index";
import Link from "next/link";
import React from "react";

type Props = {};

export default function PokemonItem({ image, name, type, id }: PokemonList) {
  return (
    <>
      <article className="group border rounded-md overflow-hidden w-[20%] mb-10">
        <Link href={"/" + id}>
          <img
            alt=""
            src={image}
            className="h-56 w-full rounded-xl object-cover group-hover:shadow-xl transition group-hover:scale-[0.9]"
          />

          <div className="px-4 py-2">
            <span className="text-[10px] bg-slate-400 px-2 py-1 rounded-sm text-white">
              {type}
            </span>
            <h3 className="text-lg font-medium text-gray-900 capitalize">
              {name}
            </h3>
          </div>
        </Link>
      </article>
    </>
  );
}
