import EventsList from "../components/EventsList";

export const EVENTS = [
  {
    id: "e1",
    title: "Event 1",
    date: "27/10/2023",
    image: "/images/event1",
    description: "This is the first event.",
  },
  {
    id: "e2",
    title: "Event 2",
    date: "27/10/2023",
    image: "/images/event2",
    description: "This is the second event.",
  },
  {
    id: "e3",
    title: "Event 3",
    date: "27/10/2023",
    image: "/images/event3",
    description: "This is the third event.",
  },
  {
    id: "e4",
    title: "Event 4",
    date: "27/10/2023",
    image: "/images/event4",
    description: "This is the fourth event.",
  },
];

function EventsPage() {
  return (
    <>
      <h1>This is the Events page.</h1>
      <ul>
        <EventsList events={EVENTS} />
      </ul>
    </>
  );
}

export default EventsPage;
