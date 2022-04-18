const ProfileColors = (props) => {
  let text;
  if (props.isOpen < 6) text = "SOLD OUT";
  if (props.isOpen > 6) text = "MORE";
  return (
    <div>
      {text && <h1>{text}</h1>}
      <p>{props.id}</p>
      <h1>My name is {props.name}</h1>
      {props.Boolean && <h2>The Boolean is {props.id}</h2>}
      <h2>My age is {props.age}</h2>
      <h3>My description {props.description}</h3>
    </div>
  );
};

export default ProfileColors;
