import {RightDisable} from "./components/RightDisable"
import {CopyDisable} from "./components/Copy"
// The entrypoint code

export default function initialize(options:{
    //options
    rightdisable:boolean,
    copydisable:boolean,
    showalerts:boolean,

}){
    if(options.rightdisable){
        new RightDisable(options.rightdisable,options.showalerts);
    }
    if (options.copydisable){
        new CopyDisable(options.copydisable,options.showalerts);
    }
}