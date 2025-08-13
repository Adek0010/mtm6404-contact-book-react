export default function ContactForm({ form, onChange, onSubmit, submitLabel }) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={onChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        required
      />
      <button type="submit" style={{ marginTop: "1rem" }}>
        {submitLabel}
      </button>
    </form>
  );
}
