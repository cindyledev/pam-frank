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
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-6xl font-polonaise tracking-tight text-gray-900"
            >
              Pam and Frank
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Please join us for our wedding celebration on
            </p>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">September 10, 2022</p>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              If you have any questions, please email pamandfrankwedding@gmail.com
            </p>
          </div>

          <div className="mt-16">
            <div className="flex flex-col items-center">
              <div className="max-w-xl rounded-lg overflow-hidden">
                <img
                  src="img/weddinginvite.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <div className="mt-24 flex flex-col items-center">
                <h2
                  id="details-heading"
                  className="text-6xl font-polonaise tracking-tight text-center text-gray-900"
                >
                  Our Story
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  I honestly don’t remember why I thought it was a good idea to take three TTC buses
                  from downtown Toronto and walk over a mile on foot to get to this job interview.
                  It was early January 1989 and the driving snow and frigid temperatures didn’t make
                  the walk pleasant; to say the least. The price you pay when you don’t have a car.
                  When I got to the door, a bright-eyed and energetic young lady opened the door who
                  introduced herself as Pam and made me feel welcomed.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  I woke up one morning in January of 1989 and didn’t realize it was going to be a
                  day that would change my life forever; the day I was going to meet my one and
                  only. I got my daughter ready for the day and drove her to daycare and went to
                  work as I usually did. My boss advised that there were interviews happening this
                  day and I was the one to greet them. I opened the door for my first interview and
                  was surprised by how handsome he was. I knew at this point I had to recommend him
                  to the boss, that way there was a chance I could see him more often.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  I had no idea that she immediately went in to see the boss to recommend that they
                  hire me and I was quite surprised to get a call later that day to hear that I got
                  the job. I started working there the next day.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  In April, I asked her to go to a Blue Jays game with me at Exhibition Stadium. No
                  roof, no cover, cold weather and light rain from the start of the game. Neither
                  one of us wanted to stay but didn’t say anything to not disappoint the other. We
                  made it to the 5th inning and with just a quick look at each other, we knew it was
                  time to leave. Not a great first date and I half expected things to end right then
                  and there but she accepted my offer to go to dinner and we enjoyed the rest of the
                  evening.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  When Frank finally got the courage to ask me out on our first date on April 17th,
                  1989, he suggested a Blue Jays Game downtown. I said yes, without realizing how
                  the weather was going to impact our first date so much. We ended up getting rained
                  on and lasted until about the 5th inning before realizing this wasn’t going to
                  continue. We ended up going to an Italian place for dinner and had an amazing rest
                  of the night.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  So many reasons why I shouldn’t have met her. To this day, I do not know why she
                  didn’t lose my number after that that awful time watching the baseball game. My
                  love has no words that can truly describe my feelings for her. 33 years has done
                  nothing but made our relationship deeper and more vibrant. She is my strength; my
                  soulmate and I love her now and always.
                </p>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Frank is my one and only. I chose him at the door when he came in for an interview
                  at L&M. I have loved him for 33 years. He was good on his word when we agreed upon
                  mortgage before marriage. We finished the mortgage and on May 03, 2022, he asked
                  me to marry him. Of course, I said yes. He is my soulmate, my rock and the love of
                  my life. I will love him always and forever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
