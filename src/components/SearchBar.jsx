import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ placeholder = 'Enter your Topic', onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit?.(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="group relative flex items-center rounded-2xl bg-white/90 backdrop-blur text-gray-900 shadow-xl ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-purple-400">
        <div className="pl-4 text-gray-500">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent placeholder:italic placeholder:text-gray-400/70 placeholder:blur-[0.2px] focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-150 caret-purple-500 px-3 py-3 text-base outline-none"
        />
        <button
          type="submit"
          className="mr-2 my-1 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
        >
          Explore
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
