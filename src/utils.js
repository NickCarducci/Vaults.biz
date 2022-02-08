export const handleMove = (ev, touch) => {
  ev.preventDefault();
  ev.stopPropagation();
  var overMouseDrag = null;
  //var onUpEnd = null;
  var listener = null;
  if (touch) {
    listener = "touchmove";
    //onUpEnd = "ontouchup";
    overMouseDrag = "ontouchenter";
  } else {
    listener = "mousemove";
    //onUpEnd = "onmouseup";
    overMouseDrag = "ondragover";
  }
  const onMouseMove = (ev) => {
    var e = null;
    var timeout = null;
    if (touch) {
      e = ev.touches[0].clientY;
      timeout = 150;
    } else {
      e = ev.clientY;
      timeout = 150;
    }
    var scrollPlacementHeight = e - 115;
    if (
      e &&
      timeout &&
      !isNaN(scrollPlacementHeight) &&
      scrollPlacementHeight !== this.state.scrollPlacementHeight
    ) {
      if (scrollPlacementHeight > -115) {
        //console.log(scrollPlacementHeight);
        this.setState(
          { scrollPlacementHeight, offScroll: true, provisionalScroll: e },
          () => {
            /*const src = !this.state.journal
                ? this.state.chapter1
                : this.state.chapter2;

              var newImg = document.createElement("img");

              newImg.src = src;
              var ctx = this.canvas.current.getContext("2d");
              ctx.drawImage(
                newImg,
                0,
                0,
                newImg.width,
                newImg.height,
                0,
                0,
                "auto",
                "100%"
              );*/

            const ifEnded = () => {
              const { scrollPlacementHeight } = this.state;
              var top = Math.round(
                (scrollPlacementHeight / (window.innerHeight - 215)) *
                  document.documentElement.scrollHeight //window.scrollY
              );
              //console.log(document.documentElement.scrollHeight);
              window.scroll(0, top);
              this.setState({ offScroll: false }, () => {
                window.removeEventListener(listener, onMouseMove);
                window.removeEventListener(overMouseDrag, overIt);
              });
            };
            clearTimeout(this.dragMove);
            this.dragMove = setTimeout(ifEnded, timeout);
          }
        );
      }
    }
  };
  const overIt = (event) => event.preventDefault();

  window.addEventListener(listener, onMouseMove);
  window.addEventListener(overMouseDrag, overIt, false);
};
