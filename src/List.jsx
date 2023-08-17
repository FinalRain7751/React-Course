import Card from "./Card";

export default function List(props) {
  return (
    props.data.length !== 0 && (
      <Card>
        {props.data.map((el) => {
          return (
            <div className="list__item" key={el.id}>
              <p>{`${el.username} (${el.age} )`}</p>
            </div>
          );
        })}
      </Card>
    )
  );
}
