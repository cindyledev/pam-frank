import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Pam & Frank</title>
        <meta name="description" content="Pam and Frank's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Pam & Frank
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Please join us for our wedding celebration on
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">September 10, 2022</p>
          </div>

          <div className="flex flex-col py-24 items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Our Story
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220
                standard gumballs, or any combination of on-the-go treats that your heart desires.
                Yes, we did the math.
              </p>
            </div>
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                  alt="Front zipper pouch with included key ring."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Up your snack organization game with multiple compartment options. The quick-access
                stash pouch is ready for even the most unexpected snack attacks and sharing needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
