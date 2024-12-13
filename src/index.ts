import { copyDisable } from "./components/copyDisable";
import {RightDisable} from "./components/RightDisable"
// The entrypoint code

export default function BarricadeSetup(options:{
    //options
    rightdisable:boolean,
    copydisable:boolean,
    showalerts:boolean,

}){
    if(options.rightdisable){
        new RightDisable(options.rightdisable,options.showalerts);
    }
    if (options.copydisable){
        new copyDisable(options.copydisable)
    }
}
