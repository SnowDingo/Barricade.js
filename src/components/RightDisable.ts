// The RightDisable Class


class RightDisable {
  rightclicklock: boolean;
  showalert:boolean;
  private rightClickHandler: EventListener;
  // Event listner variable so it can optimize performance by adding/removing event listeners.


  rightclickhandler= (event:Event) =>{
    event.preventDefault();
  }


  constructor(rightclicklock: boolean, showalert: boolean) {
    this.rightclicklock = rightclicklock;
    this.showalert = showalert;
    this.rightClickHandler = (event: Event) => {
      event.preventDefault();
    };
    this.togglerightlick(this.rightclicklock, this.showalert);
  }



  togglerightlick(lock:boolean, showalert:boolean){
    if (lock) {
      document.addEventListener("contextmenu", this.rightClickHandler
      );
      showalert?alert("Right Click is disabled"):console.log();
      }else{
        document.removeEventListener("contextmenu",this.rightClickHandler)
      }
  }
  
}
