import type { ChangeEventHandler } from 'react'
import { useState } from 'react'
import SearchIcon from '~/components/icons/search-icon'

function SearchBar() {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <section className="flex flex-col self-stretch rounded-md border border-solid border-slate-100 bg-white py-4 pl-3.5 pr-5 max-md:max-w-full">
      <div className="-mt-px flex w-[125px] max-w-full flex-row items-start gap-3.5">
        <span className="self-stretch text-lg text-gray-400">
          <SearchIcon />
        </span>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className="mt-px self-stretch text-sm font-medium slashed-zero text-gray-400"
          placeholder="Search here..."
        />
      </div>
    </section>
  )
}

export default SearchBar
