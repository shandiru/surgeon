import React, { useState, useMemo } from 'react'
import EventListHero from '../components/EventListPage/EventListHero'
import ListingEvents from '../components/EventListPage/EventList'

// Utility function to parse date string and determine if event is upcoming or closed
const parseEventDate = (dateString) => {
  try {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December']
    
    // Handle formats spanning multiple months like "29 April – 1 May 2026"
    const multiMonthMatch = dateString.match(/(\d+)\s+(\w+)\s+–\s+(\d+)\s+(\w+)\s+(\d+)/)
    if (multiMonthMatch) {
      const [, startDay, startMonth, endDay, endMonth, year] = multiMonthMatch
      const endMonthIndex = monthNames.findIndex(m => m.toLowerCase() === endMonth.toLowerCase())
      if (endMonthIndex !== -1) {
        return new Date(parseInt(year), endMonthIndex, parseInt(endDay))
      }
    }
    
    // Handle formats like "12–14 September 2024" or "5–7 October 2024" (single month)
    const singleMonthMatch = dateString.match(/(\d+)–(\d+)\s+(\w+)\s+(\d+)/)
    if (singleMonthMatch) {
      const [, startDay, endDay, month, year] = singleMonthMatch
      const monthIndex = monthNames.findIndex(m => m.toLowerCase() === month.toLowerCase())
      if (monthIndex !== -1) {
        return new Date(parseInt(year), monthIndex, parseInt(endDay))
      }
    }
    
    // Fallback: try to parse as single date
    return new Date(dateString)
  } catch (error) {
    console.error('Error parsing date:', dateString, error)
    return null
  }
}

const isEventUpcoming = (dateString) => {
  const eventDate = parseEventDate(dateString)
  if (!eventDate) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  eventDate.setHours(0, 0, 0, 0)
  return eventDate >= today
}

const EventListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Events')
  const [selectedEventType, setSelectedEventType] = useState('All')

  const allEvents = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      status: "Now Closed",
      eventType: "Conference",
      rating: 4.5,
      title: "British Gynaecological Cancer Society Annual Meeting 2024",
      description: "Invited Speaker / Panel Chair",
      talk: "Advances in Minimally Invasive Surgery for Gynaecological Cancers",
      Date: "12–14 September 2024",
      address: "London, UK / Virtual",
      organiser: "British Gynaecological Cancer Society",
      link: "/event/event1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      status: "Open",
      eventType: "Conference",
      rating: 4.8,
      title: "International Oncology Conference 2024",
      description: "Keynote Speaker",
      talk: "Innovations in Cancer Treatment",
      Date: "5–7 October 2024",
      address: "New York, USA / Virtual",
      organiser: "Global Oncology Association",
      link: "/event/event2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      status: "Now Closed",
      eventType: "Conference",
      rating: 4.3,
      title: "European Gynaecological Surgery Forum",
      description: "Invited Speaker",
      talk: "Robotic Surgery Techniques",
      Date: "20–22 November 2024",
      address: "Berlin, Germany",
      organiser: "European Surgical Society",
      link: "/event/event1",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      status: "Open",
      eventType: "Conference",
      rating: 4.7,
      title: "British Gynaecological Cancer Society Annual Scientific Meeting 2026",
      description: "Invited Speaker",
      talk: "Delivering Excellence in an Imperfect World",
      Date: "24–26 June 2026",
      address: "Bristol, UK",
      organiser: "British Gynaecological Cancer Society",
      link: "https://www.bgcs.org.uk/event/asm-bristol-2026/",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      status: "Open",
      eventType: "Conference",
      rating: 4.8,
      title: "British Society for Gynaecological Endoscopy Annual Scientific Meeting 2026",
      description: "Invited Speaker",
      talk: "One World, One Vision – Breaking Surgical Ground in Endoscopy",
      Date: "29 April – 1 May 2026",
      address: "London, UK",
      organiser: "British Society for Gynaecological Endoscopy",
      link: "https://www.bsge.org.uk/asm26/",
    },
  ]

  // Add computed status based on dates
  const eventsWithComputedStatus = useMemo(() => {
    return allEvents.map(event => ({
      ...event,
      isUpcoming: isEventUpcoming(event.Date),
      computedStatus: isEventUpcoming(event.Date) ? 'Open' : 'Now Closed'
    }))
  }, [])

  const filteredEvents = useMemo(() => {
    let filtered = [...eventsWithComputedStatus]

    // Filter by category based on computed status from dates
    if (selectedCategory === 'Upcoming Events') {
      filtered = filtered.filter(event => event.isUpcoming)
    } else if (selectedCategory === 'Closed Events') {
      filtered = filtered.filter(event => !event.isUpcoming)
    }

    // Filter by event type
    if (selectedEventType !== 'All' && selectedEventType !== 'Event Type') {
      filtered = filtered.filter(event => event.eventType === selectedEventType)
    }

    return filtered
  }, [selectedCategory, selectedEventType, eventsWithComputedStatus])

  return (
    <div>
        <EventListHero 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedEventType={selectedEventType}
          onEventTypeChange={setSelectedEventType}
        />
        <ListingEvents events={filteredEvents} selectedCategory={selectedCategory} />
    </div>
  )
}

export default EventListPage
