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
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    WEDDING CEREMONY
                  </h1>
                  <p className="mt-4 text-xl text-gray-600">4:30 PM - September 10, 2022</p>
                  <p className="mt-2 text-xl text-gray-600">
                    The Venetian Banquet & Hospitality Center
                  </p>
                  <p className="mt-2 text-lg text-gray-600">219 Romina Drive</p>
                  <p className="mt-2 text-lg text-gray-600">Vaughan, L4K 4V3</p>
                  <p className="mt-2 text-lg text-gray-600">905-660-1110</p>
                  <p className="mt-2 font-bold text-xl text-gray-600">ROOM D</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              src="ImageID_51573693_1.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
