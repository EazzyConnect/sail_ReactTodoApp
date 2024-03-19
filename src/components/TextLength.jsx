


const TextLength = (props) => {

 if (props.length < 1) {
  return ""
 } else if (props.length < 6) {
  return `Input length: ${props.length} (Text too short)`;
 } else if (props.length > 30) {
  return `Input length: ${props.length} (Text too long)`;
 } else {
  return `Input length: ${props.length}`;
 };

 // return (
 //  <>
 //   <div>
 //    <h6>Input length: {props.length}</h6>
 //   </div>
 //  </>
 // )
}

export default TextLength;