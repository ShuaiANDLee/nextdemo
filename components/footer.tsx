// export default function Header() {
//     return <div id="footer">
//         next demo
//     </div>
//   }
import { forwardRef } from "react";

const Footer = forwardRef((pros: any, ref: any) => {
    return <div id="footer" ref={ref}>
        next demo
    </div>
})
Footer.displayName = 'Footer';
export default Footer;