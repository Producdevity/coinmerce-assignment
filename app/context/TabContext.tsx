import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from 'react'
import tabs, { type Tab } from '~/components/TabBar/data'

interface TabContextType {
  setTabId: (tabId: Tab['id']) => void
  currentTab: Tab
}

export const TabContext = createContext<TabContextType>({
  setTabId: () => {},
  currentTab: tabs[0],
})

export const useTabContext = () => useContext(TabContext)

export function TabContextProvider(props: PropsWithChildren<{}>) {
  const [tabId, setTabId] = useState<Tab['id']>(tabs[0].id)

  const contextValue: TabContextType = {
    setTabId,
    currentTab: tabs.find((tab) => tab.id === tabId) || tabs[0],
  }

  return (
    <TabContext.Provider value={contextValue}>
      {props.children}
    </TabContext.Provider>
  )
}
