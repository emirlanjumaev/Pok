import { PokemonList } from "@/index";
import { getPokemonById } from "@/services/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const data: PokemonList = await getPokemonById(+params.id);

  return (
    <>
      <div className="min-h-screen flex items-center">
        <section className="overflow-hidden bg-gray-50 flex justify-center gap-2 w-full">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl capitalize">
                {data.name}
              </h2>
              <span className="text-[14px] bg-slate-400 px-2 py-1 rounded-sm text-white mt-2 inline-block">
                {data.type}
              </span>
            </div>
          </div>

          <div className="relative w-[400px] h-[300px]">
            <Image alt="" src={data.image} fill />
          </div>
        </section>
      </div>
    </>
  );
}
