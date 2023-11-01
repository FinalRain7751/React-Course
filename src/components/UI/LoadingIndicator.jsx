export default function LoadingIndicator({ text = "" }) {
  return (
    <div>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{text}</p>
    </div>
  );
}
