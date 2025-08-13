import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../db";

export default function ViewContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const snapshot = await getDoc(doc(db, "contacts", id));
      if (snapshot.exists()) setContact({ id, ...snapshot.data() });
    };
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "contacts", id));
    navigate("/");
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{contact.firstName} {contact.lastName}</h2>
      <p className="mb-4">Email: {contact.email}</p>
      <div className="flex gap-4">
        <Link to={`/edit/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</Link>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  );
}
