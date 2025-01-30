const Checkbox = (props) => {
  return(
    <div className="form-check">
      <input
        id={props.id}
        className={props.disabled ? "d-none" :"form-check-input"}
        type="checkbox"
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        checked={props.checked}
        disabled={props.disabled}
      />
      <label className="form-check-label" htmlFor={props.name}>
        {props.title}
      </label>
    </div>
  )
}

export default Checkbox