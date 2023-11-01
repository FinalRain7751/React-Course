import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: currentEvent,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["events", `event-${id}`],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const {
    mutate,
    isPending: isDeletePending,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: () => deleteEvent({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const handleStartDelete = () => {
    setIsDeleting(true);
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  const deleteHandler = () => {
    mutate();
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return formattedDate;
  };

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h1>Are you sure?</h1>
          <p>Do you really want to delete this event?</p>
          <div className="form-actions">
            {isDeletePending && <p>Deleting event...</p>}
            {!isDeletePending && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={deleteHandler} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {isDeleteError && (
            <ErrorBlock
              title="Failed to delete event"
              message={deleteError.info?.message || "Failed to delete event!"}
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && (
        <div id="event-details-content" className="center">
          <p>Fetching event data...</p>
        </div>
      )}
      {isError && (
        <div id="event-details-content" className="center">
          <ErrorBlock
            title="Failed to load event"
            message={error.info?.message || "Failed to load event details."}
          />
        </div>
      )}
      {!isPending && currentEvent && (
        <article id="event-details">
          <header>
            <h1>{currentEvent.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img
              src={`http://localhost:3000/${currentEvent.image}`}
              alt={currentEvent.title}
            />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{currentEvent.location}</p>
                <time dateTime={`${currentEvent.date}T${currentEvent.time}`}>
                  {formatDate(currentEvent.date)} @ {currentEvent.time}
                </time>
              </div>
              <p id="event-details-description">{currentEvent.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
