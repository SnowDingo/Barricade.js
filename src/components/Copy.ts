// The CopyDisable Class


export class CopyDisable {
  copyclick: boolean;
  private rightClickHandler: EventListener;
  // Event listner variable so it can optimize performance by adding/removing event listeners.


  rightclickhandler= (event:Event) =>{
    event.preventDefault();
  }


  constructor(copyclick: boolean) {
    this.copyclick = copyclick;
    this.rightClickHandler = (event: Event) => {
      event.preventDefault();
    };
    this.togglerightlick(this.copyclick);
  }



  togglerightlick(lock:boolean){
    if (lock) {
      document.addEventListener("copy", this.rightClickHandler
      );
      }else{
        document.removeEventListener("copy",this.rightClickHandler)
      }
  }
  
}
