import Head from 'next/head';

export default function Gallery({ images }) {
  console.log(images);
  return (
    <div className="bg-white">
      <Head>
        <title>Gallery - Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            GALLERY
          </h2>
      <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {images.map((image) => (
            <a key={image.id} href={image.image} className="group text-sm">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{image.title}</h3>
              <p className="text-gray-500 italic">{image.id}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((res) => res.json());

  const { resources } = results;

  const images = resources.map((resource) => {
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width: resource.width,
      height: resource.height,
    };
  });

  return {
    props: {
      images,
    },
  };
}
