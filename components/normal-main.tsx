export default function main(props:any) {
    let {headerHeight,footerHeight} = props;
    return <div id="main" style={{minHeight:`calc(100vh - ${headerHeight}px - ${footerHeight}px)`}}>
        {props.content}
    </div>
  }