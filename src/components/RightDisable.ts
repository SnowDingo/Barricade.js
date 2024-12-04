// The RightDisable Class


export class RightDisable {
  rightclicklock: boolean;
  private rightClickHandler: EventListener;
  // Event listner variable so it can optimize performance by adding/removing event listeners.


  rightclickhandler= (event:Event) =>{
    event.preventDefault();
  }


  constructor(rightclicklock: boolean, ) {
    this.rightclicklock = rightclicklock;
    this.rightClickHandler = (event: Event) => {
      event.preventDefault();
    };
    this.togglerightlick(this.rightclicklock);
  }



  togglerightlick(lock:boolean){
    if (lock) {
      document.addEventListener("contextmenu", this.rightClickHandler
      );
      }else{
        document.removeEventListener("contextmenu",this.rightClickHandler)
      }
  }
  
}
