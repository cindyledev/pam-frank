import Head from 'next/head';
import Image from 'next/image';
import { BellIcon, CakeIcon, HeartIcon, MusicNoteIcon } from '@heroicons/react/solid';

const event = [
  {
    id: 1,
    name: 'Wedding Ceremony',
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
    name: 'Reception',
    description: {
      details: "Hors D'Oeuvres will be served along with wine and soft drinks until dinner.",
    },
    time: '5:00 PM',
    icon: HeartIcon,
    iconBackground: 'bg-red-400',
  },
  {
    id: 3,
    name: 'Dinner',
    description: {
      details: 'Food choices',
      item1: 'Salad',
      item2: 'Pasta of your choosing (choice at point of serving)',
      item3: 'Seasonal veggies',
      item4: 'Fillet Mignon and Chicken Scaloppini or Vegetarian Stuffed Peppers',
      item5: 'Apple blossom with vanilla ice cream for dessert',
    },
    time: '6:30 PM',
    icon: CakeIcon,
    iconBackground: 'bg-pink-400',
  },
  {
    id: 4,
    name: 'After Dinner',
    description: {
      item1: 'Open bar',
      item2: 'Dancing and DJ service',
      item3: 'Late night sweet station',
    },
    time: '9:00 PM',
    icon: MusicNoteIcon,
    iconBackground: 'bg-orange-400',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Event() {
  return (
    <div className="bg-white">
      <Head>
        <title>Events - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />
          <div className="relative bg-gray-100 lg:bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
              <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                <div className="lg:pr-16">
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-6xl font-polonaise tracking-tight text-gray-900">Events</h2>
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
                      {event.map((eventItem, eventItemIdx) => (
                        <li key={eventItem.id}>
                          <div className="relative pb-8">
                            {eventItemIdx !== event.length - 1 ? (
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
                                      eventItem.iconBackground,
                                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                                    )}
                                  >
                                    <eventItem.icon
                                      className="h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div>
                                    <div className="text-sm">
                                      <a
                                        href={eventItem.name}
                                        className="font-medium text-gray-900"
                                      >
                                        {eventItem.name}
                                      </a>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">
                                      Starts at {eventItem.time}
                                    </p>
                                  </div>
                                  <div className="mt-2 text-sm text-gray-700">
                                    <p className="italic font-semibold">
                                      {eventItem.description.details}
                                    </p>
                                    <ul role="list" className="list-disc ml-4">
                                      {eventItem.description.item1 ? (
                                        <li>{eventItem.description.item1}</li>
                                      ) : null}
                                      {eventItem.description.item2 ? (
                                        <li>{eventItem.description.item2}</li>
                                      ) : null}
                                      {eventItem.description.item3 ? (
                                        <li>{eventItem.description.item3}</li>
                                      ) : null}
                                      {eventItem.description.item4 ? (
                                        <li>{eventItem.description.item4}</li>
                                      ) : null}
                                      {eventItem.description.item5 ? (
                                        <li>{eventItem.description.item5}</li>
                                      ) : null}
                                      {eventItem.description.item6 ? (
                                        <li>{eventItem.description.item6}</li>
                                      ) : null}
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
          <div className="w-full h-48 relative sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
            <Image
              src="https://res.cloudinary.com/diwuya9d9/image/upload/v1654876331/pam-frank/ImageID_51573693_1_tinsrm.jpg"
              alt="ImageID_51573693_1"
              layout="fill"
              objectFit="cover"
              className="hidden lg:block w-full h-full object-center object-cover"
            />
            <Image
              src="https://res.cloudinary.com/diwuya9d9/image/upload/v1654876339/pam-frank/ImageID_51573693_1_crop_xvcywf.jpg"
              alt="ImageID_51573693_crop"
              layout="fill"
              objectFit="cover"
              className="block lg:hidden w-full h-full object-top object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
