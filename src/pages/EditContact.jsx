import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../db";

export default function EditContact() {
  const { id } = useParams();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      const snapshot = await getDoc(doc(db, "contacts", id));
      if (snapshot.exists()) setForm(snapshot.data());
    };
    fetchContact();
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await updateDoc(doc(db, "contacts", id), form);
    navigate(`/view/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={form.firstName} onChange={handleChange} />
      <input name="lastName" value={form.lastName} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Update Contact</button>
    </form>
  );
}
