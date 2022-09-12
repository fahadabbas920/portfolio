const Menubtn = () => {
  function MenuClickHandler(){
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("show")
  }

    return (
    <div className="menu-btn" onClick={MenuClickHandler}>
      <span className="L1 Line"></span>
      <span className="L2 Line"></span>
      <span className="L3 Line"></span>
    </div>
  );
};

export default Menubtn;
