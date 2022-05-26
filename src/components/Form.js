import Options from "./Fields/Options";
import Select from "./Fields/Select";
import Text from "./Fields/Text";
import './Form.css'

const Form = (props) => {
  const { fieldsList } = props

  return (
    <div className="form">
      <h1>Form</h1>
      {fieldsList.map((field) => {
        switch(field.component) {
          case 'text':
            return <Text placeholder={field.name}/>
          case 'select':
            return <Select name={field.name} options={field.options}/>
          case 'options':
            return <Options name={field.name} options={field.options}/>
          default:
            return <p>doesn't exist</p>;
        }
      })}
    </div>
  );
}

export default Form;