import classes from "./sideDrawer.module.scss";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function SideDrawer({ isOpen, onRequestClose, myRefs }) {
  //---------------------------------------------- Nav click part
  const executeScrollPro = () => {
    scrollToRef(myRefs.pro);
  };
  const executeScrollDes = () => {
    scrollToRef(myRefs.des);
  };
  const executeScrollPri = () => {
    scrollToRef(myRefs.pri);
  };
  const executeScrollFaq = () => {
    scrollToRef(myRefs.faq);
  };

  const _onHeaderClick = (event) => {
    event.stopPropagation();
  };
  if (!isOpen) return null;
  return (
    <div
      className={classes.overlay}
      onClick={() => {
        onRequestClose();
      }}
    >
      <nav className={classes.nav} onClick={_onHeaderClick}>
        <p
          onClick={function () {
            executeScrollPro();
            onRequestClose();
          }}
        >
          Projektorius
        </p>
        <hr />
        <p
          onClick={function () {
            executeScrollDes();
            onRequestClose();
          }}
        >
          Aprašymas
        </p>
        <p
          onClick={function () {
            executeScrollPri();
            onRequestClose();
          }}
        >
          Kaina
        </p>
        <p
          onClick={function () {
            executeScrollFaq();
            onRequestClose();
          }}
        >
          DUK
        </p>
        <p
          onClick={() => {
            onRequestClose();
          }}
        >
          Atgal
        </p>
      </nav>
    </div>
  );
}
