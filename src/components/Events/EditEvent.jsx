import {
  Link,
  redirect,
  useNavigate,
  useParams,
  useSubmit,
  useNavigation,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const submit = useSubmit();

  const { id } = useParams();

  const {
    data: event,
    isError,
    error,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000,
  });

  // const {
  //   mutate,
  //   isPending: isUpdating,
  //   isError: isUpdatingError,
  //   error: updateError,
  // } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     await queryClient.cancelQueries({ queryKey: ["events", id] });

  //     const previousEvent = queryClient.getQueryData(["events", id]);

  //     queryClient.setQueryData(["events", id], data.event);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(["events", id], context.previousEvent);
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(["events", id]);
  //   },
  // onSuccess: () => {
  //   queryClient.invalidateQueries({
  //     queryKey: ["events"],
  //     refetchType: "none",
  //   });
  // navigate("/events/" + id);
  // },
  // });

  function handleSubmit(formData) {
    submit(formData, { method: "PUT" });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  // if (isUpdating) {
  //   content = (
  //     <div className="center">
  //       <LoadingIndicator
  //         text={isUpdating ? "Updating event..." : "Loading event data..."}
  //       />
  //     </div>
  //   );
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title={`Failed to ${isError ? "load" : "update"} event`}
          message={
            error.info?.message ||
            `Failed to ${isError ? "load" : "update"} event`
          }
        />
        <div className="form-action">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (event) {
    content = (
      <EventForm inputData={event} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <p>Submitting data...</p>
        ) : (
          <>
            <Link to="../" className="button-text" onClick={handleClose}>
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  return null;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(["events"]);
  return redirect("../");
}
