export interface CalendarEvent {
  ensembleName: string;
  eventName: string;
  eventDescription: string;
  date: string;
  time: string;
  organizerPurchaseOptionsUrl: string;
  organizerWebsiteUrl: string;
  locationDetails: {
    locationName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
}

export interface Calendar {
  calendarUpcoming: CalendarEvent[];
  archive: CalendarEvent[];
}

export interface InfoBlockSecondSection {
  heading: string;
    body1: string;
    kqedBody: string;
    classicalSonomaBody: string;
    kqedQuote: string;
    kqedQuoteURL: string;
    classicalSonomaQuote: string;
    classicalSonomaQuoteURL: string;
}

const config = {
  landing: {
    danielleFlowersLandingSquare: '/photos/landing/danielleFlowersLandingSquare.png',
    danielleDarkLandingResizeSquare: '/photos/landing/danielleDarkLandingResizeSquare.png',
  },
  images: [
    { src: '/photos/danielle-elizabeth/DanAndEllAtPiano.jpg', alt: 'DanAndEllAtPiano' },
    { src: '/photos/danielle-elizabeth/DanAtGuitar.jpg', alt: 'DanAtGuitar'},
    { src: '/photos/danielle-elizabeth/EllAtPiano.jpg', alt: 'EllAtPiano'},
    { src: '/photos/danielle-elizabeth/d-at-guitar-vingette.jpg', alt: 'd-at-guitar-vingette' },
    { src: '/photos/landing/danielle-flowers-landing.jpg', alt: 'danielle-flowers-landing' },
    { src: '/photos/landing/danielleFlowersLandingSquare.png', alt: 'danielleFlowersLandingSquare.png' },
    { src: '/photos/creative-session/danielleBigBuilding.jpg', alt: 'danielleBigBuilding' },
    { src: '/photos/landing/danielleDarkLandingSquare.png', alt: 'danielleDarkLandingSquare' },
    { src: '/photos/landing/danielleDarkLanding.jpg', alt: 'danielleDarkLanding' },
    { src: '/photos/landing/danielleDarkLandingResizeSquare.png', alt: 'danielleDarkLandingResizeSquare' },
    { src: '/photos/homepage/DanielleHomeGradient.png', alt: 'DanielleHomeGradient' },
  ],
  home: {
    danielleHomeGradient: '/photos/homepage/DanielleHomeGradient.png',
    heading: ['DANIELLE', 'REUTTER-', 'HARRAH'],
    subHeading: ['musician', 'singer', 'arranger'],
    infoBlockFirstSection: {
      heading: 'Events',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    infoBlockSecondSection: {
      heading: 'About',
      body1: 'Danielle Reutter-Harrah has performed and recorded with premier and grammy winning ensembles, symphony orchestras, and innovative contemporary groups throughout the United States and Germany.',
      classicalSonomaBody: 'Known for "[her] expressive, silvery voice and outstanding technical finesse", Danielle is a sought after artist in baroque and early music.',
      kqedBody: 'As a contemporary performer and recording artist, Danielle is noted for her "elastic vocals... [that] nail unexpected harmonies [and] fill up every last inch of sonic space."',
      kqedQuote: '-KQED',
      kqedQuoteURL: 'https://www.kqed.org/arts/10436308/50-shades-of-pop-makeunders-hidden-hooks',
      classicalSonomaQuote: '-classicalsonoma.org',
      classicalSonomaQuoteURL: 'https://classicalsonoma.org/reviews/?reviewid=961'
    },
  },
  calendar: {
    upcoming: [
      {
        ensembleName: 'Evergreen Ensemble',
        photo: '/photos/homepage/Evergreen-christmas.png',
        eventName: 'Christmas',
        eventDescription: 'Come hear iconic choral Christmas classics from composers like Morten Lauridsen, Norman Luboff, and John Gardner, as well as newer works from Ola Gjeilo, Sarah Quartel, Jesican French, and many more!',
        date: 'Fri, Dec 13',
        time: '7:00PM - 9:00pm',
        organizerPurchaseOptionsUrl: 'https://www.ticketleap.events/tickets/evergreen-ensemble/christmas-edmonds-lynnwood',
        organizerWebsiteUrl: 'https://www.evergreenensemble.com/',
        locationDetails: {
          locationName: 'Trinity Lutheran Church',
          address: '6215 196th St SW',
          city: 'Lynnwood',
          state: 'Washington',
          zip: '98036',
          country: 'USA'
        }
      },
      {
        ensembleName: 'Evergreen Ensemble',
        photo: '/photos/homepage/Evergreen-christmas.png',
        eventName: 'Christmas',
        eventDescription: 'Come hear iconic choral Christmas classics from composers like Morten Lauridsen, Norman Luboff, and John Gardner, as well as newer works from Ola Gjeilo, Sarah Quartel, Jesican French, and many more!',
        date: 'Sun, Dec 15',
        time: '3:00PM - 5:00pm',
        organizerPurchaseOptionsUrl: 'https://www.ticketleap.events/tickets/evergreen-ensemble/christmas-seattle',
        organizerWebsiteUrl: 'https://www.evergreenensemble.com/',
        locationDetails: {
          locationName: 'Trinity Episcopal Church',
          address: '609 8th Ave',
          city: 'Seattle',
          state: 'Washington',
          zip: '98104',
          country: 'USA'
        }
      },
      {
        ensembleName: 'Evergreen Ensemble',
        photo: '/photos/homepage/Evergreen-requiem.png',
        eventName: 'Requiem',
        eventDescription: 'Come hear Dale Trumbore\'s "How to Go On" with Herbert Howell\'s timeless "Requiem". These two works for a cappella choir are each tied to the death of a loved one for either the librettist or composer, and offer unique musical perspectives on the process of grief and acceptance that follows such a loss. Come hear both an established masterwork, as well as a landmark work from an up and coming composer',
        date: 'Sat, March 8',
        time: '7:00PM - 10:00pm',
        organizerPurchaseOptionsUrl: 'https://www.ticketleap.events/tickets/evergreen-ensemble/requiem-edmonds-lynnwood',
        organizerWebsiteUrl: 'https://www.evergreenensemble.com/',
        locationDetails: {
          locationName: 'Trinity Lutheran Church',
          address: '6215 196th St SW',
          city: 'Lynnwood',
          state: 'Washington',
          zip: '98036',
          country: 'USA'
        }
      },
      {
        ensembleName: 'Evergreen Ensemble',
        photo: '/photos/homepage/Evergreen-requiem.png',
        eventName: 'Requiem',
        eventDescription: 'Come hear Dale Trumbore\'s "How to Go On" with Herbert Howell\'s timeless "Requiem". These two works for a cappella choir are each tied to the death of a loved one for either the librettist or composer, and offer unique musical perspectives on the process of grief and acceptance that follows such a loss. Come hear both an established masterwork, as well as a landmark work from an up and coming composer',
        date: 'Sun, March 9',
        time: '3:00PM - 5:00pm',
        organizerPurchaseOptionsUrl: 'https://www.ticketleap.events/tickets/evergreen-ensemble/requiem-seattle',
        organizerWebsiteUrl: 'https://www.evergreenensemble.com/',
        locationDetails: {
          locationName: 'Trinity Episcopal Church',
          address: '609 8th Ave',
          city: 'Seattle',
          state: 'Washington',
          zip: '98104',
          country: 'USA'
        }
      }
    ],
    archive: [
      {
        ensembleName: 'Evergreen Ensemble',
        photo: '/photos/homepage/Evergreen-cross.png',
        eventName: 'Liturgy',
        eventDescription: 'Season Opener with the GRAMMY-nomninated work, "The Liturgy of Sain John Chrysostom" by American composser Benedict Sheehan. This landmark work is majestic, intimate, grand, mystical, and everything inbetween.',
        date: 'Sat, Sep 14',
        time: '7:00PM - 9:00pm',
        organizerPurchaseOptionsUrl: 'https://www.ticketleap.events/tickets/evergreen-ensemble/liturgy-edmonds-lynnwood',
        organizerWebsiteUrl: 'https://www.evergreenensemble.com/',
        locationDetails: {
          locationName: 'Trinity Lutheran Church',
          address: '6215 196th St SW',
          city: 'Lynnwood',
          state: 'Washington',
          zip: '98036',
          country: 'USA'
        }
      },
      {
        ensembleName: 'Evergreen Ensemble',
        photo: '/photos/homepage/Evergreen-cross.png',
        eventName: 'Liturgy',
        eventDescription: 'Season Opener with the GRAMMY-nomninated work, "The Liturgy of Sain John Chrysostom" by American composser Benedict Sheehan. This landmark work is majestic, intimate, grand, mystical, and everything inbetween.',
        date: 'Sat, Sep 15',
        time: '3:00PM - 5:00pm',
        organizerPurchaseOptionsUrl: 'https://www.ticketleap.events/tickets/evergreen-ensemble/liturgy-edmonds-lynnwood',
        organizerWebsiteUrl: 'https://www.evergreenensemble.com/',
        locationDetails: {
          locationName: 'Holy Rosary Catholic Church',
          address: '4139 42nd Ave SW',
          city: 'Seattle',
          state: 'Washington',
          zip: '98116',
          country: 'USA'
        }
      },
    ]
  },
  bio : {
    body: 'Danielle Reutter-Harrah has performed at the Boston Early Music Festival, with Seattle Symphony Orchestra, Seattle Opera, California Bach Society, American Bach Soloists, Baroque Chamber Orchestra of Colorado, Alabama Symphony, and Early Music Vancouver, among others. She most recently sang the role of Belinda in Baroque Chamber Orchestra of Colorado\’s semi-staged rendition of Purcell\’s Dido and Aeneas. Her repertoire spans Brahms, Bach, Monteverdi, Handel, Clara Schumann and Fanny Mendelssohn, and she is a founding member of the voice and plucked strings duo Jarring Sounds, with Adam Cockerham on guitar, theorbo, Baroque guitar and lute. She sings frequently with Seattle\’s Byrd Ensemble and Pacific MusicWorks. Danielle received her Bachelor of Music degree from the University of Denver\’s Lamont School of Music and her Master of Music degree from the San Francisco Conservatory of Music.'
  },
  bodyTwo: 'Danielle Reutter-Harrah has performed and recorded with premier and grammy winning ensembles, symphony orchestras, and innovative contemporary groups throughout the United States and Germany. Known for her "expressive, silvery voice and outstanding technical finesse (classicalsonoma.org)", Danielle is a sought after artist in baroque and early music. As a contemporary performer and recording artist, Danielle lends her art with "elastic vocals [that] nail unexpected harmonies [and] fill up every last inch of sonic space (kqed.org)."'
}

export default config;