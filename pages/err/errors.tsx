import classes from "./errorStyle.module.scss";

export default function Errors(props) {
  if (props.data == null) return null;

  function validateName(name) {
    var re = /^[A-Za-z\s]+$/;
    return re.test(String(name).toLowerCase());
  }
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
    // var rek = /^[0-9]+$/;
    return re.test(String(phone).toLowerCase());
  }
  function validateCompany(company) {
    const re = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    // add all the characters tht you want to allow in [a-zA-Z0-9 '~?!]
    return re.test(String(company).toLowerCase());
  }

  //---------------------------------------------- Name validation

  if (props.data.name === "" || props.data.name == null) {
    return (
      <p
        className={classes.error}
        itemScope
        itemType="https://schema.org/error"
      >
        'Vardas, Pavardė' laukas privalo buti ne tuscias
      </p>
    );
  } else {
    if (validateName(props.data.name)) {
      if (props.data.name.split(/\W+/).length === 2) {
        // console.log(props.data.name.split(/\W+/).length);
      } else {
        return (
          <p
            className={classes.error}
            itemScope
            itemType="https://schema.org/error"
          >
            'Vardas, Pavardė' laukas turi susideti is vardo ir pavardes
          </p>
        );
      }
    } else {
      return (
        <p
          className={classes.error}
          itemScope
          itemType="https://schema.org/error"
        >
          'Vardas, Pavardė' laukas turi susideti tik is raidziu
        </p>
      );
    }
  }

  //---------------------------------------------- Company validation

  if (props.data.company == "" || props.data.company == null) {
    // console.log("wow");
  } else {
    if (validateCompany(props.data.company)) {
    } else {
      return (
        <p
          className={classes.error}
          itemScope
          itemType="https://schema.org/error"
        >
          'Įmonė' laukas turi neleidžiamų simbolių
        </p>
      );
    }
  }

  //---------------------------------------------- Email validation

  if (props.data.email === "" || props.data.email == null) {
    return (
      <p
        className={classes.error}
        itemScope
        itemType="https://schema.org/error"
      >
        'Elektroninis paštas' laukas privalomas
      </p>
    );
  } else {
    if (validateEmail(props.data.email)) {
    } else {
      return (
        <p
          className={classes.error}
          itemScope
          itemType="https://schema.org/error"
        >
          'Elektroninis paštas' laukas privalo būti užpildytas su tinkamu el.
          paštu
        </p>
      );
    }
  }

  //---------------------------------------------- Phone validation

  if (props.data.phone === "" || props.data.phone == null) {
    return (
      <p
        className={classes.error}
        itemScope
        itemType="https://schema.org/error"
      >
        'Telefonas' laukas privalomas
      </p>
    );
  } else {
    if (validatePhone(props.data.phone)) {
    } else {
      return (
        <p
          className={classes.error}
          itemScope
          itemType="https://schema.org/error"
        >
          'Telefonas' laukas privalo atitikti telefono numerio reikalavimus
        </p>
      );
    }
  }

  //---------------------------------------------- Date validation

  if (props.data.date === "") {
    return (
      <p
        className={classes.error}
        itemScope
        itemType="https://schema.org/error"
      >
        'Norima data nuomai' nėra pasirinkta
      </p>
    );
  }

  //---------------------------------------------- Time validation

  if (props.data.time === "") {
    return (
      <p
        className={classes.error}
        itemScope
        itemType="https://schema.org/error"
      >
        'Nuomos periodas' yra ne pasirinktas
      </p>
    );
  }
}
