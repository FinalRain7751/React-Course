export default function Card(props) {
  const classes = "card " + props.className;
  return <li className={classes}>{props.children}</li>;
}
