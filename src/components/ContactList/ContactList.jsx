import { Contact } from './Contact';
import PropTypes from "prop-types";

const ContactList = ({ data, filter, removeCallback }) => {
  return (
    <ul style={{margin:0, padding:0, listStyle:'none'}}> 
      {data.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())).map(item =>
      <Contact key={item.id} id={item.id} name={item.name} number={item.number} remove={removeCallback}/>)}
    </ul>
  ) 
};

ContactList.propTypes = {
  data:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired, 
      number: PropTypes.string.isRequired
    })
  ),
  filter:PropTypes.string.isRequired,
  removeCallback: PropTypes.func.isRequired
}

export default ContactList;
