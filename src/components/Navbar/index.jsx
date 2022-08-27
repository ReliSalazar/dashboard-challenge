import "./Navbar.scss";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [query, setQuery] = useState("");

  const search = () => {
    alert(`searching for: ${query}`);
    setQuery("");
  }

  return (
    <div className="navbar p-2 bg-stone-100 text-stone-800 flex">
      <div className="search flex gap-2 items-center basis-1/6">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full border py-1 px-5 bg-stone-200"
        />
        <button
          onClick={() => search()}
          className="search-button hover:bg-stone-200 h-8 w-8 rounded-full"
        >
          <FontAwesomeIcon icon={["fa", "magnifying-glass"]} />
        </button>
      </div>

      <div className="items flex gap-2 justify-end items-center basis-5/6">
        <button className="util-button flex gap-2 items-center hover:bg-stone-200 py-1 px-2 rounded-full">
          <FontAwesomeIcon icon={["fa", "globe"]} />
          English
        </button>
        <button className="util-button flex gap-2 items-center hover:bg-stone-200 py-1 px-2 rounded-full h-8 w-8">
          <FontAwesomeIcon icon={["fa", "bell"]} />
        </button>
        <button className="util-button flex gap-2 items-center hover:bg-stone-200 py-1 px-2 rounded-full h-8 w-8">
          <FontAwesomeIcon icon={["fa", "message"]} />
        </button>
        <button className="util-button flex gap-2 items-center hover:bg-stone-200 py-1 px-2 rounded-full h-8 w-8">
          <FontAwesomeIcon icon={["fa", "list"]} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
