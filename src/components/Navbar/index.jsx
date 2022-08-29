import "./Navbar.scss";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "./components/Notification";

function Navbar() {
  const [query, setQuery] = useState("");

  const search = () => {
    alert(`searching for: ${query}`);
    setQuery("");
  }

  return (
    <div className="navbar p-2 bg-stone-100 text-stone-800 flex flex-col sm:flex-row">
      <div className={`
          search flex gap-2 justify-center sm:justify-start items-center
          basis-full sm:basis-1/6 mb-2 sm:mb-0
      `}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full border py-1 px-5 bg-stone-200"
        />
        <button
          onClick={() => search()}
          disabled={!query}
          className={`
            transition-bg hover:bg-stone-200 h-8 w-8 rounded-full
            ${!query ? "text-stone-400" : "text-stone-800"}
          `}
        >
          <FontAwesomeIcon icon={["fa", "magnifying-glass"]} />
        </button>
      </div>

      <div className={`
        items flex gap-2 justify-center sm:justify-end items-center
        basis-full sm:basis-5/6
      `}>
        <button className={`
          util-button flex gap-2 items-center
          hover:bg-stone-200
          py-1 px-2 rounded-full
        `}>
          <FontAwesomeIcon icon={["fa", "globe"]} />
          English
        </button>

        <button className={`
          transition-bg hover:bg-stone-200
          flex gap-1 items-center
           py-1 px-2 rounded-full
           min-h-8 min-w-8
        `}>
          <FontAwesomeIcon icon={["fa", "bell"]} />
          {true
            ? <Notification content={1} />
            : null
          }
        </button>

        <button className={`
          transition-bg hover:bg-stone-200
          flex gap-1 items-center
           py-1 px-2 rounded-full
           min-h-8 min-w-8
        `}>
          <FontAwesomeIcon icon={["fa", "message"]} />
          {false
            ? <Notification content={2} />
            : null
          }
        </button>

        <button className={`
          transition-bg hover:bg-stone-200
          flex gap-2 items-center
           py-1 px-2 rounded-full
           h-8 w-8
        `}>
          <FontAwesomeIcon icon={["fa", "list"]} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
