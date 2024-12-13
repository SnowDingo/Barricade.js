// The RightDisable Class
export class RightDisable {
    rightclicklock;
    showalert;
    rightClickHandler;
    // Event listner variable so it can optimize performance by adding/removing event listeners.
    rightclickhandler = (event) => {
        event.preventDefault();
    };
    constructor(rightclicklock, showalert) {
        this.rightclicklock = rightclicklock;
        this.showalert = showalert;
        this.rightClickHandler = (event) => {
            event.preventDefault();
        };
        this.togglerightlick(this.rightclicklock, this.showalert);
    }
    togglerightlick(lock, showalert) {
        if (lock) {
            document.addEventListener("contextmenu", this.rightClickHandler);
            showalert ? alert("Right Click is disabled") : console.log();
        }
        else {
            document.removeEventListener("contextmenu", this.rightClickHandler);
        }
    }
}
//# sourceMappingURL=RightDisable.js.map