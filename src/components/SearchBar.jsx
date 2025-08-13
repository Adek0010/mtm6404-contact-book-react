export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        padding: "8px",
        width: "100%",
        maxWidth: "300px",
        marginBottom: "1rem"
      }}
    />
  );
}
