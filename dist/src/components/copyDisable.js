// The CopyDisable class
export class copyDisable {
    rdevbarlock;
    devbarHandler;
    // Event listner variable so it can optimize performance by adding/removing event listeners.
    devbarhandler = (event) => {
        event.preventDefault();
    };
    constructor(rdevbarlock) {
        this.rdevbarlock = rdevbarlock;
        this.devbarHandler = (event) => {
            event.preventDefault();
        };
        this.togglecopylick(this.rdevbarlock);
    }
    togglecopylick(lock) {
        if (lock) {
            document.addEventListener("contextmenu", this.devbarHandler);
        }
        else {
            document.removeEventListener("contextmenu", this.devbarHandler);
        }
    }
}
//# sourceMappingURL=copyDisable.js.map