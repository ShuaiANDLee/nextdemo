import Header from "./header";
import Footer from "./footer";
import Main from "./normal-main";
import { createRef, useState } from "react"


export default function Normal(props: any) {
  let [headerHeight, setHeaderHeight] = useState(0);
  let [footerHeight, setFooterHeight] = useState(0);

  return <>
    <Header ref={(ref: any) => {
      if (ref) {
        setHeaderHeight(ref.clientHeight)
      }

    }} />
    <Main content={props.children} headerHeight={headerHeight} footerHeight={footerHeight} />
    <Footer ref={(ref: any) => {
      if (ref) {
        setFooterHeight(ref.clientHeight)
      }
    }} />
  </>
}