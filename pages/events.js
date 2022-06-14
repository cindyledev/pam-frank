import { Fragment } from 'react';
import {
  CakeIcon,
  HeartIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Wedding Ceremony', href: '#' },
    comment:
      'Approximately 30 minutes, followed immediately by reception in the lobby at the same venue.',
    time: '4:30 PM',
  },
  {
    id: 2,
    type: 'comment',
    person: { name: 'Reception', href: '#' },
    comment: 
      "Hors D'Oeuvres will be served along with wine and soft drinks until dinner.",
    time: '5:00 PM',
  },
  {
    id: 3,
    type: 'comment',
    person: { name: 'Dinner', href: '#' },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    time: '6:30 PM',
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
                              {activityItem.type === 'comment' ? (
                                <>
                                  <div>
                                    <div className="relative px-1">
                                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                                        <UserCircleIcon
                                          className="h-5 w-5 text-gray-500"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
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
                                      <p>{activityItem.comment}</p>
                                    </div>
                                  </div>
                                </>
                              ) : null}
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
