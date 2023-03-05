// export default function Header() {
//     return <div id="header">
//         <div className="log"></div>
//         <div className="nav">
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/posts">Post</a></li>
//                 <li><a href="/about">About</a></li>
//             </ul>
//         </div>
//         <div className="other"></div>
//     </div>
//   }

import { forwardRef } from "react";

const header = forwardRef((pros: any, ref: any) => {
    return <div id="header" ref={ref}>
        <div className="log"></div>
        <div className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/posts">Post</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
        <div className="other"></div>
    </div>
})
export default header;