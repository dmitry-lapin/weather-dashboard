import Rounded_button from "@/components/ui/rounded_button";

export default function Navbar() {
  return (
    <nav className="flex w-full flex-row rounded">
        <section className="flex flex-row items-center"> 
          <ul>
            <li><Rounded_button/></li>
          </ul>
        </section>
    </nav>
  );
}