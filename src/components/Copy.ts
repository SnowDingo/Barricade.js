// The CopyDisable Class


export class CopyDisable {
  copyclick: boolean;
  showalert:boolean;
  private rightClickHandler: EventListener;
  // Event listner variable so it can optimize performance by adding/removing event listeners.


  rightclickhandler= (event:Event) =>{
    event.preventDefault();
  }


  constructor(copyclick: boolean, showalert: boolean) {
    this.copyclick = copyclick;
    this.showalert = showalert;
    this.rightClickHandler = (event: Event) => {
      event.preventDefault();
    };
    this.togglerightlick(this.copyclick, this.showalert);
  }



  togglerightlick(lock:boolean, showalert:boolean){
    if (lock) {
      document.addEventListener("copy", this.rightClickHandler
      );
      showalert?alert("Copy is disabled"):console.log();
      }else{
        document.removeEventListener("copy",this.rightClickHandler)
      }
  }
  
}
