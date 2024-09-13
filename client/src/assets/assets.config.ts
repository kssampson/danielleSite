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
      heading: 'Upcoming Events',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    infoBlockSecondSection: {
      heading: 'About',
      body: 'Danielle is a veristile performer of lot\'s of cool stuff. She does all sorts of cool stuff like playing with these cool groups. She has been noted for her cool stuff by cool people and cool organizations. She was notably confirmed for this cool thing after she was awared some cool stuff. She lives in this cool place with her cool family.'
    }
  },
  calendar: {
    upcoming: [
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

    ]
  }
}

export default config;