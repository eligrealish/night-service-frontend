import { EventData } from '../../../api/api'

export const ListItem = (props: EventData) => {
  const { eventName, venue, startDate, endDate, description, dateOf, images } = props

  return (
    <div className='w-full h-full bg-pink-500 flex flex-col md:flex-row hover:bg-amber-500 transition duration-300 ease-in-out cursor-pointer shadow-lg'>
      {/* Background image div */}
      <div
        className='w-full md:w-1/2 h-64 md:h-auto bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${images[0]})`,
        }}
      ></div>

      {/* Content div */}
      <div className='w-full md:w-1/2 flex flex-col justify-center'>
        <div className='px-4 py-6 bg-blue-950'>
          <h2 className='block text-white text-xl mb-1'>{eventName}</h2>
          <h1 className='block text-pink-500 text-5xl font-bold mb-2'>{venue}</h1>
          <p className='block text-gray-400 mb-4'>{description}</p>
          <p>
            <div className='flex text-white font-semibold justify-between'>
              <span>When</span>
              <span>{dateOf}</span>
            </div>
            <div className='flex text-white font-semibold justify-between'>
              <span>Starts</span>
              <span>{startDate}</span>
            </div>
            <div className='flex text-white font-semibold justify-between'>
              <span>Until</span>
              <span>{endDate}</span>
            </div>
          </p>
        </div>
        <div className='w-full flex justify-center font-light items-center text-black text-5xl py-2 overflow-hidden '>
          See More
        </div>
      </div>
    </div>
  )
}
