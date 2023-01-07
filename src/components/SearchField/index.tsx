import type { Component } from "solid-js";
import { setSearchQuery } from "../../state";

interface Props { }

const SearchField: Component<Props> = (props: Props) => (
    <div>
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <input type="search" id="search"
                class="block w-full p-2 pl-10 text-lg text-slate-900 border border-gray-300 rounded-3xl
                bg-slate-50 dark:bg-gray-700 dark:border-gray-700 focus:outline-none focus:ring-2
                focus:ring-indigo-500 dark:focus:ring-indigo-400 dark:placeholder-gray-400 dark:text-slate-50 "
                placeholder="Search"
                onInput={(e: any) => setSearchQuery(e.target.value)} />
        </div>
    </div>
);

export default SearchField;