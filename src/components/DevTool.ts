// The DevTool class


export class RightDisable {
  rdevbarlock: boolean;
  private devbarHandler: EventListener;
  // Event listner variable so it can optimize performance by adding/removing event listeners.


  devbarhandler= (event:Event) =>{
    event.preventDefault();
  }


  constructor(rdevbarlock: boolean) {
    this.rdevbarlock = rdevbarlock;
    this.devbarHandler = (event: Event) => {
      event.preventDefault();
    };
    this.togglerightlick(this.rdevbarlock);
  }



  togglerightlick(lock:boolean){
    if (lock) {
      document.addEventListener("keydown", this.devbarHandler
      );

      }else{
        document.removeEventListener("contextmenu",this.devbarHandler)
      }
  }
  
}
