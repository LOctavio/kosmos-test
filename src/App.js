import { useState } from 'react';
import './App.css';
import fields from "./data/fields.json";
import Form from './components/Form';
import List from './components/List';

function App() {
  const [fieldsList, setFieldsList] = useState([]);

  return (
    <div className='main-container'>
      <Form />
      <List fields={fields}/>
    </div>
  );
}

export default App;
