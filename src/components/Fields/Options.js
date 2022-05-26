const Options = (props) => {
  const { name, options } = props;

  return(
    <div className="form-section">
      <p>{name}</p>
      {options.map(option => {
            return (
              <label key={option}>
                {option}
                <input type="radio" id={option} value={option} name={name} />
              </label>
            )
      })}
    </div>
  )
}

export default Options;