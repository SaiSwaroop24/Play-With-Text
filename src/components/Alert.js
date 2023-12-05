export default function Alert(props){
    return(
        props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type}:{props.alert.msg}</strong>{/*if first statement is false then && will not check for second statemnet*/ }
        </div>
    );
       
       

}