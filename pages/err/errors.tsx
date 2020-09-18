import classes from "./errorStyle.module.scss";

export default function Errors(props) {
  if (props.data == null) return null;
  if (props.data.name === "") {
    return <p className={classes.error}>'Vardas, Pavardė' laukas privalomas</p>;
  }
  if (props.data.email === "") {
    return (
      <p className={classes.error}>'Elektroninis paštas' laukas privalomas</p>
    );
  }
  if (props.data.phone === "") {
    return <p className={classes.error}>'Telefonas' laukas privalomas</p>;
  }
  if (props.data.date === "") {
    return (
      <p className={classes.error}>'Norima data nuomai' laukas privalomas</p>
    );
  }
  if (props.data.time === "") {
    return <p className={classes.error}>'Nuomos periodas' laukas privalomas</p>;
  }
  console.log(props.data);
  return <p>hello</p>;
}
