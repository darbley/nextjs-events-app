const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Skateboarding Camp',
      description:
        "We know: Skateboarding is fun no matter what type of person you are. That's why we came up with this event - Skateboarding 101",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/skateboarding-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Surfing for beginners',
      description:
        'You probably need help with your first wave.  You\'ve found the right place!.  Come to surf camp for a week this summer and learn to rip.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/surfing-event.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
  