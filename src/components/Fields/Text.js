const Text = (props) => {
  const { placeholder } = props;

  return(
    <div className="form-section">
      <input type="text" placeholder={placeholder}/>
    </div>
  );
}

export default Text;
