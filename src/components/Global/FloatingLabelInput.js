const FloatingLabelInput = ({
  type = "text",
  inputId = "default",
  placeholder = "default",
  value = "",
  setValue = null,
}) => {
  return (
    <div className="formgroup__animated mb-3">
      <input
        type={type}
        id={inputId}
        className="input__animated"
        placeholder=" "
        onChange={(e) => setValue(e.target.value)}
        value={value}
        required
      />
      <label htmlFor={inputId} className="animated__label">
        {placeholder === "" ? "default" : placeholder}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
