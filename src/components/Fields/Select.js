const Select = (props) => {
  const { name, options } = props;

  return(
    <div className="form-section">
      <label>
        {name}:
        <select>
          {options.map(option => {
            return <option key={option}>{option}</option>
          })}
        </select>
      </label>
    </div>
  );
}

export default Select;