import "../css/style.css"

export default function SelectOption({ name, widthClass, options, label, placeholder, onChange }) {
  return (
    <span className={widthClass}>
      <label>{label}</label>
      <select
        className="ui.selection.dropdown select-class"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      >
        {options&&options.map(({ text, value }, index) =>(
            <option key={index} value={value}>{text}</option> 
        ))}                   
      </select>
    </span>
  );
};
