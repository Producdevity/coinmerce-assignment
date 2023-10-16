import { useState, type ChangeEventHandler } from 'react'
import AnimatedIcon from '~/components/Icons/CoinIcon/AnimatedIcon'
import searchIconAnimation from '~/components/Icons/SearchIcon/SearchIcon.animation.json'
import Loading from '~/components/ui/Loading'
import t from '~/utils/t'

function SearchBar() {
  const [searchText, setSearchText] = useState('')

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.target.value)
  }

  return typeof document === 'undefined' ? (
    <Loading />
  ) : (
    <section className="flex flex-col self-stretch rounded-md border border-solid border-slate-100 bg-white py-4 pl-3.5 pr-5 max-md:max-w-full">
      <div className="-mt-px flex w-[125px] max-w-full flex-row items-start gap-3.5">
        <span className="self-stretch text-lg text-gray-400">
          <AnimatedIcon
            src={JSON.stringify(searchIconAnimation)}
            style={{ width: '30px', height: '30px' }}
            hover={true}
          />
        </span>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className="mt-px self-stretch text-sm font-medium slashed-zero text-gray-400 outline-none"
          placeholder={t('form.search.placeholder')}
        />
      </div>
    </section>
  )
}

export default SearchBar
