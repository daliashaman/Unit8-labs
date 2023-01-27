import "../css/Ad.css";

interface AdProps {
  flavor:string,
  isLight:boolean,
  fontSize:number
}

export function Ad(props:AdProps){
  let className = "Ad " + (props.isLight ? "Ad--light" : "Ad--dark");
  return(
    <div className={className}>
      <p>Vote For:</p>
      <p style={{ fontSize: props.fontSize }}>{props.flavor}</p>
    </div>
  )
}