import { useState } from 'react';
import './App.css';
import fields from "./data/fields.json";
import Form from './components/Form';
import List from './components/List';

function App() {
  const [fieldsList, setFieldsList] = useState([]);

  const addField = (field) => {
    setFieldsList([
      ...fieldsList,
      field
    ]
    );
    console.log(fieldsList);
  }

  return (
    <div className='main-container'>
      <Form fieldsList={fieldsList} />
      <List fields={fields} addField={addField}/>
    </div>
  );
}

export default App;
