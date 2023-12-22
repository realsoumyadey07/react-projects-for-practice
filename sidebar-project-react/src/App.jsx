import { CalendarCheck, FlagIcon, HelpCircle, HomeIcon, Layers2Icon, LayoutDashboardIcon, SettingsIcon, StickyNoteIcon } from 'lucide-react'
import './App.css'
import Sidebar, { SidebarItem } from './components/Sidebar'

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<HomeIcon size={20}/>} text="Home"/>
          <SidebarItem icon={<LayoutDashboardIcon size={20}/>} text="Dashboard"/>
          <SidebarItem icon={<StickyNoteIcon size={20}/>} text="Projects"/>
          <SidebarItem icon={<CalendarCheck size={20}/>} text="Calander"/>
          <SidebarItem icon={<Layers2Icon size={20}/>} text="Tasks"/>
          <SidebarItem icon={<FlagIcon size={20}/>} text="Reporting"/>
          <SidebarItem icon={<SettingsIcon size={20}/>} text="Setting"/>
          <SidebarItem icon={<HelpCircle size={20}/>} text="Help"/>
        </Sidebar>
      </div>
    </>
  )
}

export default App
