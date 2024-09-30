import { useEffect, useState } from 'react'
import { Api, EventResponse } from '../../api/api'
import { ListItem } from '../../components/collections/list-item/component'
import { ImMenu } from 'react-icons/im'
import { ImCross } from 'react-icons/im'

export const Home = () => {
  const [eventResponse, setEventResponse] = useState<EventResponse | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await Api.getEvents({ countryCode: 'uk', city: 'brighton' })
      setEventResponse(response)
    }

    if (window.innerWidth < 768) {
      setIsSidebarOpen(false) // Collapse sidebar if the screen width is less than 768px
    } else {
      setIsSidebarOpen(true) // Expand sidebar if the screen width is greater than or equal to 768px
    }

    fetchEvents()
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState)
  }

  const listEvents = () => {
    return (
      <ul className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {eventResponse?.events.map((event) => (
          <li key={event.id}>
            <ListItem {...event} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className='flex flex-col h-screen'>
      {/* Navbar */}
      <nav className='bg-slate-950 w-full flex justify-between items-center'>
        <div
          className={`w-full md:w-72 ${
            isSidebarOpen ? 'bg-slate-900 border-b-2 border-b-slate-800' : ''
          } h-full p-4 flex justify-start items-center text-3xl font-bold text-amber-500`}
        >
          <div className='pt-1 cursor-pointer mr-4' onClick={toggleSidebar}>
            {isSidebarOpen ? <ImCross size={22} /> : <ImMenu size={22} />}
          </div>
          <h1 className='text-3xl font-bold'>Events</h1>
        </div>
      </nav>

      {/* Main container */}
      <main className='flex flex-grow bg-slate-600 overflow-hidden'>
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? '' : 'hidden'
          } fixed w-full md:relative md:max-w-72 md:min-w-72 bg-slate-900 p-4`}
        >
          {/* Sidebar content goes here */}
          <p className='text-white'>Sidebar Content</p>
        </aside>

        {/* Content Area */}
        <div className={`flex-grow h-full overflow-y-auto p-4 hide-scrollbar`}>
          {eventResponse ? listEvents() : <p className='text-white'>Getting events...</p>}
        </div>
      </main>

      {/* CSS for hiding the scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  )
}
