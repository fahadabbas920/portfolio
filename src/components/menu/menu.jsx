const Menubtn = () => {
  function MenuClickHandler() {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("show");
  }

  return (
    <div className="menu-btn" onClick={MenuClickHandler}>
      <span className="material-symbols-outlined">Menu</span>
    </div>
  );
};

export default Menubtn;
