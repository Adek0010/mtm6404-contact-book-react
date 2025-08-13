import { Link } from "react-router-dom";

export default function ContactList({ contacts }) {
  if (!contacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {contacts.map(contact => (
        <li key={contact.id} style={{ margin: "0.5rem 0" }}>
          <Link to={`/view/${contact.id}`}>
            {contact.firstName} {contact.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
