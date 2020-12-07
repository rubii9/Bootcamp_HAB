import "./css/FormFields.css";

export function Input({ label, id, onChange, children, ...props }) {
  return (
    <fieldset className="app-form-fieldset">
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onChange} {...props} />
      {children}
    </fieldset>
  );
}

export function TextArea({ label, id, onChange, children, ...props }) {
  return (
    <fieldset className="app-form-fieldset">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} onChange={onChange} {...props}></textarea>
      {children}
    </fieldset>
  );
}
