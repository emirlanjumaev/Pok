import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function Search({ onChange, value }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="relative max-w-[350px] mx-auto mt-5 text-black">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          onChange={onChange}
          value={value}
          placeholder="Search for..."
          className="w-full rounded-md border py-2.5 pe-10 shadow-sm sm:text-sm px-1"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button
            onClick={() => {
              router.push("?q=" + value);
            }}
            type="button"
            className="text-gray-600 hover:text-gray-700"
          >
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </>
  );
}
