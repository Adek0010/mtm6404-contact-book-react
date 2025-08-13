import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import db from "../db";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const q = query(collection(db, "contacts"), orderBy("lastName"));
      const snapshot = await getDocs(q);
      setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchContacts();
  }, []);

  const filtered = contacts.filter(c =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid gap-4">
        {filtered.map(c => (
          <Link
            key={c.id}
            to={`/view/${c.id}`}
            className="bg-white p-4 rounded shadow hover:shadow-md"
          >
            <p className="font-semibold">{c.firstName} {c.lastName}</p>
            <p className="text-sm text-gray-500">{c.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
