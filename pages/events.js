import Navbar from '../components/Navbar'

const events = [
  {
    name: 'WEDDING CEREMONY',
    time: "5:00 PM - 6:00 PM, August 1, 2022",
    location: "Golden Gate Park Rose Garden",
  },
  {
    name: 'RECEPTION',
    time: "7:00 PM - 11:00 PM, August 1, 2022",
    location: "Terra Gallery"
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              EVENTS
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2">
            {events.map((event) => (
              <div key={event.name} className="flex justify-center">
                <div>
                  <h3 className="flex justify-center text-sm font-medium text-gray-900">{event.name}</h3>
                  <p className="flex justify-center mt-2 text-sm text-gray-500">{event.time}</p>
                  <p className="flex justify-center mt-2 text-sm text-gray-500">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
