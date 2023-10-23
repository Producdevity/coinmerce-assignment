import { useRef, type MouseEvent } from 'react'
import tabs, { type Tab } from '~/components/TabBar/data'
import { useTabContext } from '~/context/TabContext'

interface Props {
  onChangeTab?: (tab: Tab) => void
}

function TabBar(props: Props) {
  const { setTabId, currentTab } = useTabContext()
  const indicatorRef = useRef<HTMLDivElement | null>(null)

  const handleTabClick = (tab: Tab, ev: MouseEvent) => {
    const tabElement = ev.currentTarget as HTMLElement
    const { offsetLeft, offsetWidth } = tabElement

    setTabId(tab.id)
    props.onChangeTab?.(tab)

    if (indicatorRef.current) {
      indicatorRef.current.style.left = `${offsetLeft}px`
      indicatorRef.current.style.width = `${offsetWidth}px`
    }
  }

  return (
    <div className="relative inline-block border-b border-gray-200 text-center text-sm font-medium text-gray-500">
      <ul className="-mb-px flex flex-wrap">
        {tabs.map((tab) => (
          <li className="mr-2" key={tab.id}>
            <button
              onClick={(ev) => handleTabClick(tab, ev)}
              className={`inline-block rounded-t-lg p-4 text-gray-400 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                currentTab.id === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                  : 'border-transparent'
              }`}
              aria-current={currentTab.id === tab.id ? 'page' : 'false'}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div
        ref={indicatorRef}
        className="absolute bottom-0 left-0 h-0.5 bg-sky-500 transition-all duration-300 ease-in-out"
      ></div>
    </div>
  )
}

export default TabBar
