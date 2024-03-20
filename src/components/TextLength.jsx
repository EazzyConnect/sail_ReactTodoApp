


const TextLength = (props) => {

 if (props.length < 1) {
  return ""
 } else if (props.length < 6) {
  return `Input length: ${props.length} (Text too short)`;
 } else if (props.length > 30) {
  return `Input length: ${props.length} (Text too long)`;
 } else {
  return `Input length: ${props.length} (OK)`;
 };
};

export default TextLength;