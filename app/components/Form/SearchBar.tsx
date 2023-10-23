import { Form, useSubmit } from '@remix-run/react'
import { useEffect } from 'react'
import AnimatedIcon from '~/components/Icons/CoinIcon/AnimatedIcon'
import searchIconAnimation from '~/components/Icons/SearchIcon/SearchIcon.animation.json'
import Loading from '~/components/ui/Loading'
import t from '~/utils/t'

interface Props {
  q: string | null
}

function SearchBar(props: Props) {
  const submit = useSubmit()

  useEffect(() => {
    const searchField = document.getElementById('q')
    if (searchField instanceof HTMLInputElement) {
      searchField.value = props.q || ''
    }
  }, [props.q])

  return typeof document === 'undefined' ? (
    <Loading />
  ) : (
    <section className="flex w-full flex-col self-stretch rounded-md border border-solid border-slate-100 bg-white px-3.5 py-3 max-md:max-w-full">
      <div className="-mt-px flex max-w-full flex-row items-start gap-3.5">
        <span className="self-stretch text-lg text-gray-400">
          <AnimatedIcon
            src={JSON.stringify(searchIconAnimation)}
            style={{ width: '20px', height: '20px' }}
            hover={true}
          />
        </span>
        <Form
          id="search-form"
          role="search"
          className="w-full"
          onChange={(ev) => {
            const isFirstSearch = props.q === null
            submit(ev.currentTarget, {
              replace: !isFirstSearch,
            })
          }}
        >
          <input
            id="q"
            className="mt-px w-full self-stretch text-sm font-medium slashed-zero text-gray-400 outline-none"
            aria-label="Search contacts"
            defaultValue={props.q || ''}
            placeholder={t('form.search.placeholder')}
            type="search"
            name="q"
          />
        </Form>
      </div>
    </section>
  )
}

export default SearchBar
