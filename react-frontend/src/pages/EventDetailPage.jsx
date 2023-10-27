import { Fragment } from "react";
import { useParams } from "react-router-dom";

import EventItem from "../components/EventItem";
import { EVENTS } from "./EventsPage";

function EventDetailPage() {
  const params = useParams();

  const event = EVENTS.find((event) => event.id === params.eventId);
  return (
    <Fragment>
      <h1>This is the event detail page.</h1>
      <EventItem event={event} />
    </Fragment>
  );
}

export default EventDetailPage;
