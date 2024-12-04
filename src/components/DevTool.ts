// The DevTool class


export class RightDisable {
  rdevbarlock: boolean;
  private rdevbarHandler: EventListener;
  // Event listner variable so it can optimize performance by adding/removing event listeners.


  rdevbarhandler= (event:Event) =>{
    event.preventDefault();
  }


  constructor(rdevbarlock: boolean) {
    this.rdevbarlock = rdevbarlock;
    this.rdevbarHandler = (event: Event) => {
      event.preventDefault();
    };
    this.togglerightlick(this.rdevbarlock);
  }



  togglerightlick(lock:boolean){
    if (lock) {
      document.addEventListener("keydown", this.rdevbarHandler
      );

      }else{
        document.removeEventListener("contextmenu",this.rdevbarHandler)
      }
  }
  
}
