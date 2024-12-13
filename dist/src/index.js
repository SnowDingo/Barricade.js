import { copyDisable } from "./components/copyDisable";
import { RightDisable } from "./components/RightDisable";
// The entrypoint code
export default function BarricadeSetup(options) {
    if (options.rightdisable) {
        new RightDisable(options.rightdisable, options.showalerts);
    }
    if (options.copydisable) {
        new copyDisable(options.copydisable);
    }
}
//# sourceMappingURL=index.js.map