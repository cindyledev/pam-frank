import Head from 'next/head';
import Image from 'next/image';

const hotels = [
  {
    id: 1,
    name: 'NOVOTEL TORONTO VAUGHAN',
    address: '200 Bass Pro Mills Drive',
    city: 'Vaughan, ON, L4K 0B9',
    url: 'https://all.accor.com/hotel/7157/index.en.shtml',
    imageSrc: 'https://www.ahstatic.com/photos/7157_ho_00_p_1024x768.jpg',
    imageAlt: 'Exterior of Novotel Toronto Vaughan',
  },
  {
    id: 2,
    name: 'ALOFT VAUGHAN MILLS',
    address: '151 Bass Pro Mills Drive',
    city: 'Vaughan, ON, L4K 0E6',
    url: 'https://www.marriott.com/en-us/hotels/yyzal-aloft-vaughan-mills/overview',
    imageSrc:
      'https://cache.marriott.com/content/dam/marriott-renditions/YYZAL/yyzal-exterior-9949-hor-pano.jpg',
    imageAlt: 'Exterior of Aloft Vaughan Mills',
  },
  {
    id: 3,
    name: 'SPRINGHILL SUITES BY MARRIOTT TORONTO VAUGHAN',
    address: '612 Applewood Crescent',
    city: 'Vaughan, ON, L4K 4B4',
    url: 'https://www.marriott.com/en-us/hotels/yyzsv-springhill-suites-toronto-vaughan/overview',
    imageSrc:
      'https://cache.marriott.com/content/dam/marriott-renditions/YYZSV/yyzsv-lobby-3145-hor-pano.jpg',
    imageAlt: 'Interior of Springhill Suites',
  },
  {
    id: 4,
    name: 'HOMEWOOD SUITES BY HILTON TORONTO VAUGHAN',
    address: '618 Applewood Crescent',
    city: 'Vaughan, ON, L4K 4B4',
    url: 'https://www.hilton.com/en/hotels/yyzvghw-homewood-suites-toronto-vaughan',
    imageSrc:
      'https://www.hilton.com/im/en/YYZVGHW/5506377/yyzvghw-exteriorhw-l2.jpg?impolicy=crop&cw=4500&ch=1889&gravity=NorthWest&xposition=0&yposition=555&rw=1470&rh=617',
    imageAlt: 'Exterior of Homewood Suites',
  },
  {
    id: 5,
    name: 'MONTE CARLO INN',
    address: '705 Applewood Crescent',
    city: 'Vaughan, ON, L4K 5W8',
    url: 'https://www.montecarloinns.com/vaughan-suites',
    imageSrc: 'https://image-tc.galaxy.tf/wijpeg-ee8qt91tti8lwws94szjytmgu/file.jpg',
    imageAlt: 'Exterior of Monte Carolo Inn',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Travel() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Travel - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-polonaise tracking-tight text-gray-900">Hotels Nearby</h2>
        </div>

        <div className="mt-16 space-y-16">
          {hotels.map((hotel, hotelIdx) => (
            <div
              key={hotel.id}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  hotelIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{hotel.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{hotel.address}</p>
                <p className="mt-2 text-sm text-gray-500">{hotel.city}</p>
                {hotel.id === 1 ? (
                  <p className="mt-2 text-sm items-center justify-center px-4 py-2 border border-transparent rounded-md text-orange-700 bg-orange-100 sm:text-sm">
                    Call <span className="font-semibold">905-660-0212</span> or email{' '}
                    <span className="font-semibold">novotel.torontovaughan@accor.com</span> before{' '}
                    <span className="font-semibold">August 10th</span> and mention the{' '}
                    <span className="font-semibold">Peters & Liehr Wedding</span> or{' '}
                    <span className="font-semibold">Block ID 689123</span> for the group block and
                    discounted rooms
                  </p>
                ) : null}
                <a href={hotel.url} target="_blank" rel="noreferrer">
                  <button
                    type="button"
                    className="inline-flex items-center mt-2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                  >
                    LINK
                  </button>
                </a>
              </div>
              <div
                className={classNames(
                  hotelIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="relative aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <Image
                    src={hotel.imageSrc}
                    alt={hotel.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex mt-16 justify-center rounded-lg">
          <iframe
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=Venetian+Banquet+Concord+ON`}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
