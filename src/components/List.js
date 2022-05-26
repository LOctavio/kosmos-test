import './List.css'

const List = (props) => {
  const  { fields, addField } = props;

  return (
    <div>
      <h1>Add fields to form
      </h1>
      {fields.map(field => {
        return(
          <div key={field.id} className="list">
            <span>Type: {field.component}</span>
            <span>Name: {field.name}</span>
            <button onClick={() => addField(field)}>Add to List</button>
          </div>
        );
      })}
    </div>
  );
}

export default List;