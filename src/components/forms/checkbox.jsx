

export function Checkbox({ checked, onChange, label, id }) {
  return <div className="form-check">
    <input type="checkbox" className="form-check-input" checked={checked} onChange={(e) => onChange(e.target.checked)} id={id} />
    <label htmlFor={id} className="form-check-label">{label}</label>
  </div>

}