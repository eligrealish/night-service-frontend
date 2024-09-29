import { useEffect, useState } from 'react'
import { Api, EventResponse } from '../../api/api'
import { ListItem } from '../../components/collections/list-item/component'

export const Home = () => {
  const [eventResponse, setEventResponse] = useState<EventResponse | null>(null)
  
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await Api.getEvents({ countryCode: 'uk', city: 'brighton' })
      setEventResponse(response)
    }

    fetchEvents()
  }, [])

  const listEvents = () => {
    return (
      <ul>
        {eventResponse?.events.map((event) => (
          <li key={event.id} className='py-2'>
              <ListItem {...event} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <main>
      <div className='m-auto w-full max-w-5xl'>
        {eventResponse ?
        listEvents()
          : 
          <p>Getting events...</p>}
      </div>
    </main>
  )
}
