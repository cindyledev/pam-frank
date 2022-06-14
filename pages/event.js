import { CakeIcon, HeartIcon, BellIcon } from '@heroicons/react/solid';

const timeline = [
  {
    id: 1,
    content: 'Start of',
    target: 'Wedding Ceremony',
    href: '#',
    time: '4:30 PM',
    datetime: '2022-09-10',
    icon: BellIcon,
    iconBackground: 'bg-yellow-400',
  },
  {
    id: 2,
    content: 'Start of',
    target: 'Reception',
    href: '#',
    time: '5:00 PM',
    datetime: '2022-09-10',
    icon: HeartIcon,
    iconBackground: 'bg-red-400',
  },
  {
    id: 3,
    content: 'Start of',
    target: 'Dinner',
    href: '#',
    time: '6:30 PM',
    datetime: '2022-09-10',
    icon: CakeIcon,
    iconBackground: 'bg-pink-500',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Event() {
  return (
    <div className="bg-white">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />

          <div className="relative bg-gray-100 lg:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
              <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                <div className="lg:pr-16">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      EVENTS
                    </h2>
                  </div>
                  <p className="mt-4 text-xl text-gray-600">4:30 PM - September 10, 2022</p>
                  <p className="mt-2 text-xl text-gray-600">
                    The Venetian Banquet & Hospitality Center
                  </p>
                  <p className="mt-2 text-lg text-gray-600">219 Romina Drive</p>
                  <p className="mt-2 text-lg text-gray-600">Vaughan, L4K 4V3</p>
                  <p className="mt-2 text-lg text-gray-600">905-660-1110</p>
                  <p className="mt-2 font-bold text-xl text-gray-600">ROOM D</p>
                  <div className="flow-root my-8">
                    <ul role="list" className="-mb-8">
                      {timeline.map((event, eventIdx) => (
                        <li key={event.id}>
                          <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={classNames(
                                    event.iconBackground,
                                    'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                  )}
                                >
                                  <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    {event.content}{' '}
                                    <a href={event.href} className="font-medium text-gray-900">
                                      {event.target}
                                    </a>
                                  </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  <time dateTime={event.datetime}>{event.time}</time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              src="img/ImageID_51573693_1.jpg"
              alt=""
              className="hidden lg:block w-full h-full object-center object-cover"
            />
            <img
              src="img/ImageID_51573693_1_crop.jpg"
              alt=""
              className="block lg:hidden w-full h-full object-top object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
