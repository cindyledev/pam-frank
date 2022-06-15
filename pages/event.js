import { Fragment } from 'react';
import { CakeIcon, HeartIcon, BellIcon, UserCircleIcon } from '@heroicons/react/solid';

const activity = [
  {
    id: 1,
    person: { name: 'Wedding Ceremony', href: '#' },
    description: {
      details:
        'Approximately 30 minutes, followed immediately by reception in the lobby at the same venue.',
    },
    time: '4:30 PM',
    icon: BellIcon,
    iconBackground: 'bg-yellow-400',
  },
  {
    id: 2,
    person: { name: 'Reception', href: '#' },
    description: {
      item1: "Hors D'Oeuvres will be served along with wine and soft drinks until dinner.",
      item2: 'Open bar during the evening.',
      item3: 'Dancing and DJ service to conclude the evening.',
    },
    time: '5:00 PM',
    icon: HeartIcon,
    iconBackground: 'bg-red-400',
  },
  {
    id: 3,
    person: { name: 'Dinner', href: '#' },
    description: {
      details: 'Food choices',
      item1: 'Salad',
      item2: 'Pasta of your choosing (choice at point of serving)',
      item3: 'Seasonal veggies',
      item4: 'Apple blossom with vanilla ice cream for dessert',
      item5: 'Fillet Mignon and Chicken Scaloppini or Vegetarian Stuffed Peppers',
      item6: 'Late night sweet station',
    },
    time: '6:30 PM',
    icon: CakeIcon,
    iconBackground: 'bg-pink-400',
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
                      {activity.map((activityItem, activityItemIdx) => (
                        <li key={activityItem.id}>
                          <div className="relative pb-8">
                            {activityItemIdx !== activity.length - 1 ? (
                              <span
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              />
                            ) : null}
                            <div className="relative flex items-start space-x-3">
                              <>
                                <div>
                                  <span
                                    className={classNames(
                                      activityItem.iconBackground,
                                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                    )}
                                  >
                                    <activityItem.icon
                                      className="h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div>
                                    <div className="text-sm">
                                      <a
                                        href={activityItem.person.href}
                                        className="font-medium text-gray-900"
                                      >
                                        {activityItem.person.name}
                                      </a>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                      Starts at {activityItem.time}
                                    </p>
                                  </div>
                                  <div className="mt-2 text-sm text-gray-700">
                                    <p className="italic font-semibold">{activityItem.description.details}</p>
                                    <ul role="list" className="list-disc ml-4">
                                      {activityItem.description.item1 ? <li>{activityItem.description.item1}</li> : null}
                                      {activityItem.description.item2 ? <li>{activityItem.description.item2}</li> : null}
                                      {activityItem.description.item3 ? <li>{activityItem.description.item3}</li> : null}
                                      {activityItem.description.item4 ? <li>{activityItem.description.item4}</li> : null}
                                      {activityItem.description.item5 ? <li>{activityItem.description.item5}</li> : null}
                                      {activityItem.description.item6 ? <li>{activityItem.description.item6}</li> : null}
                                    </ul>
                                  </div>
                                </div>
                              </>
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
