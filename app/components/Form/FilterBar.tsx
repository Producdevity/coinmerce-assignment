import { Form, useSubmit } from '@remix-run/react'
import AnimatedIcon from '~/components/Icons/AnimatedIcon'
import searchIconAnimation from '~/components/Icons/SearchIcon/SearchIcon.animation.json'
import Loading from '~/components/ui/Loading'

interface Props {}

function FilterBar(props: Props) {
  const submit = useSubmit()
  console.log('submit', submit)

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
            // const isFirstSearch = props.q === null
            // submit(ev.currentTarget, {
            //   replace: !isFirstSearch,
            // })
          }}
        ></Form>
      </div>
    </section>
  )
}

export default FilterBar
