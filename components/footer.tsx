// export default function Header() {
//     return <div id="footer">
//         next demo
//     </div>
//   }
import { forwardRef } from "react";

const footer = forwardRef((pros: any, ref: any) => {
    return <div id="footer" ref={ref}>
        next demo
    </div>
})
export default footer;