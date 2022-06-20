const story = [
  {
    id: 1,
    person: 'frank',
    text: "I honestly don't remember why I thought it was a good idea to take three TTC buses from downtown Toronto and walk over a mile on foot to get to this job interview. It was early January 1989 and the driving snow and frigid temperatures didn't make the walk pleasant; to say the least. The price you pay when you don't have a car. When I got to the door, a bright-eyed and energetic young lady opened the door who introduced herself as Pam and made me feel welcomed.",
  },
  {
    id: 2,
    person: 'pam',
    text: "I woke up one morning in January of 1989 and didn't realize it was going to be a day that would change my life forever; the day I was going to meet my one and only. I got my daughter ready for the day and drove her to daycare and went to work as I usually did. My boss advised that there were interviews happening this day and I was the one to greet them. I opened the door for my first interview and was surprised by how handsome he was. I knew at this point I had to recommend him to the boss, that way there was a chance I could see him more often.",
  },
  {
    id: 3,
    person: 'frank',
    text: 'I had no idea that she immediately went in to see the boss to recommend that they hire me and I was quite surprised to get a call later that day to hear that I got the job. I started working there the next day.',
  },
  {
    id: 4,
    person: 'frank',
    text: "In April, I asked her to go to a Blue Jays game with me at Exhibition Stadium. No roof, no cover, cold weather and light rain from the start of the game. Neither one of us wanted to stay but didn't say anything to not disappoint the other. We made it to the 5th inning and with just a quick look at each other, we knew it was time to leave. Not a great first date and I half expected things to end right then and there but she accepted my offer to go to dinner and we enjoyed the rest of the evening.",
  },
  {
    id: 5,
    person: 'pam',
    text: "When Frank finally got the courage to ask me out on our first date on April 17th, 1989, he suggested a Blue Jays Game downtown. I said yes, without realizing how the weather was going to impact our first date so much. We ended up getting rained on and lasted until about the 5th inning before realizing this wasn't going to continue. We ended up going to an Italian place for dinner and had an amazing rest of the night.",
  },
  {
    id: 6,
    person: 'frank',
    text: "So many reasons why I shouldn't have met her. To this day, I do not know why she didn't lose my number after that that awful time watching the baseball game. My love has no words that can truly describe my feelings for her. 33 years has done nothing but made our relationship deeper and more vibrant. She is my strength; my soulmate and I love her now and always.",
  },
  {
    id: 7,
    person: 'pam',
    text: 'Frank is my one and only. I chose him at the door when he came in for an interview at L&M. I have loved him for 33 years. He was good on his word when we agreed upon mortgage before marriage. We finished the mortgage and on May 03, 2022, he asked me to marry him. Of course, I said yes. He is my soulmate, my rock and the love of my life. I will love him always and forever.',
  },
];

export default function OurStory() {
  return (
    <div className="max-w-3xl">
    {story.map((s, id) => (
      <div key={s.id} className="flex">
        <div className="mr-4 flex-shrink-0">
          <svg
            className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-bold capitalize">{s.person}</h4>
          <p className="mt-1">
            {s.text}
          </p>
        </div>
      </div>
    ))}

    </div>
  );
}
