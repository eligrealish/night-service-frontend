import { createRef, useEffect, useState } from 'react'
import { EventData } from '../../../api/api'
import { FaArrowRight } from 'react-icons/fa'

export const ListItem = (props: EventData) => {
  const convertDate = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'long' })
    const day = addSuffix(date.getDate())
    const year = date.getFullYear()
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' })
    return { month, day, year, time, dayOfWeek }
  }

  const addSuffix = (day: number) => {
    if (day === 1 || day === 21 || day === 31) {
      return `${day}st`
    } else if (day === 2 || day === 22) {
      return `${day}nd`
    } else if (day === 3 || day === 23) {
      return `${day}rd`
    } else {
      return `${day}th`
    }
  }

  const { eventName, venue, startDate, endDate, description, images } = props
  const parsedStartDate = convertDate(new Date(startDate))
  const parsedEndDate = convertDate(new Date(endDate))

  const [isHover, setIsHover] = useState<boolean>(false)
  const itemRef = createRef<HTMLDivElement>()

  useEffect(() => {
    if (itemRef.current) {
      itemRef.current.addEventListener('mouseenter', () => setIsHover(true))
      itemRef.current.addEventListener('mouseleave', () => setIsHover(false))
    }
  }, [itemRef])

  return (
    <div
      ref={itemRef}
      className='w-full h-full bg-slate-800 flex flex-col duration-300 ease-in-out cursor-pointer overflow-hidden rounded-md'
      style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.8)' }}
    >
      {/* Background image div */}
      <div
        className={`w-full h-64 bg-cover bg-no-repeat bg-center flex justify-end items-end p-6 transition-all duration-500 ease-in-out`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${images[0]})`,
          backgroundSize: isHover ? '110%' : '100%', // Increase the background size when 'amber'
        }}
      >
        <h1
          className={`block text-right text-5xl font-bold transition duration-300 ${
            isHover ? 'text-amber-600' : 'text-amber-500'
          }`}
        >
          {venue}
        </h1>
      </div>

      {/* Content div */}
      <div className='w-full flex flex-col justify-center'>
        <div className='flex justify-between items-center bg-slate-900 py-4 px-6'>
          <h2 className='block text-white text-xl mr-4'>{eventName}</h2>
          <div
            className={`flex justify-center items-center transition duration-300 font-bold text-md text-black rounded-full p-2 ${
              isHover ? 'bg-amber-600' : 'bg-amber-500'
            }`}
          >
            <FaArrowRight size={24} />
          </div>
        </div>
        <div className='p-6'>
          <p className='block text-gray-400 mb-4 text-justify'>{description}</p>
          <div>
            <div className='mb-2'>
              <span
                className={`block font-bold transition text-sm ${
                  isHover ? 'text-amber-600' : 'text-amber-500'
                }`}
              >
                When
              </span>
              <span className='text-2xl text-white font-light'>
                {parsedStartDate.day} {parsedStartDate.month}
              </span>
            </div>
            <div className='mb-2'>
              <span
                className={`block font-bold transition text-sm ${
                  isHover ? 'text-amber-600' : 'text-amber-500'
                }`}
              >
                Starts
              </span>
              <span className='text-2xl text-white font-light'>
                {parsedStartDate.dayOfWeek} {parsedStartDate.time}
              </span>
            </div>
            <div>
              <span
                className={`block font-bold transition text-sm ${
                  isHover ? 'text-amber-600' : 'text-amber-500'
                }`}
              >
                Until
              </span>
              <span className='text-2xl text-white font-light'>
                {parsedEndDate.dayOfWeek} {parsedEndDate.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
