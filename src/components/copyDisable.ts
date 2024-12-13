// The CopyDisable class


export class copyDisable {
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
    this.togglecopylick(this.rdevbarlock);
  }



  togglecopylick(lock:boolean){
    if (lock) {
      document.addEventListener("contextmenu", this.devbarHandler
      );

      }else{
        document.removeEventListener("contextmenu",this.devbarHandler)
      }
  }
  
}
