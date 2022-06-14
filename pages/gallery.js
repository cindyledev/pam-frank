import { useEffect } from 'react';

import { mapImageResources, search } from '../lib/cloudinary';

const files = [
  {
    title: '03992102',
    source: 'img/03992102.jpg',
  },
  {
    title: '03992103',
    source: 'img/03992103.jpg',
  },
];

export default function Gallery({ images, next_cursor }) {
  console.log('images', images);
  console.log('next_cursor', next_cursor);
  useEffect(() => {
    (async function run() {
      const results = await fetch('/api/search', {
        method: 'POST',
        body: JSON.stringify({
          next_cursor,
        }),
      }).then((res) => res.json());
      console.log('results', results);
    });
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            GALLERY
          </h2>
          <div className="mt-16 space-y-16">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {/* {files.map((file) => (
                <li key={file.source} className="relative">
                  <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-red-800 overflow-hidden">
                    <img
                      src={file.source}
                      alt=""
                      className="object-cover pointer-events-none group-hover:opacity-75"
                    />
                  </div>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor } = results;

  const images = mapImageResources(resources);

  return {
    props: { images, next_cursor },
  };
}
