import {RightDisable} from "./components/RightDisable"
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
}