import { Link } from "react-router-dom";

export default function ContactDetails({ contact, onDelete }) {
  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Email: {contact.email}</p>

      <div style={{ marginTop: "1rem" }}>
        <Link to={`/edit/${contact.id}`} style={{ marginRight: "1rem" }}>
          Edit
        </Link>
        <button onClick={onDelete} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
