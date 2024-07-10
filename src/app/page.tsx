import Image from "next/image";
import Dashboard from "../components/Dashboard"
export default function Home() {
  return (
    <section id="dashboard" className="w-full overflow-x-hidden">
      <Dashboard></Dashboard>
    </section>
  );
}
