import { useEffect, useState } from "react";
import api from "../services/api";

export default function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
    api.get("/clients").then(res => setClients(res.data));
  }, []);

  return (
    <>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">Our Projects</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {projects.map(p => (
            <div key={p._id} className="shadow p-4">
              <img src={p.image} alt={p.name} />
              <h3 className="font-bold mt-2">{p.name}</h3>
              <p>{p.description}</p>
              <button className="mt-2 text-blue-600">Read More</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
