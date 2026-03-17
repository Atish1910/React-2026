import React, { useState, useEffect, useRef } from "react";

const Autocomplete = () => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const controllerRef = useRef(null);

  // Fetch Suggestions
  const fetchSuggestions = async (search) => {

    if (!search) {
      setSuggestions([]);
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`,
        { signal: controller.signal }
      );

      const data = await res.json();

      setSuggestions(data.products);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.log(err);
      }
    }

    setLoading(false);
  };

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard Navigation
  const handleKeyDown = (e) => {

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(suggestions[activeIndex].title);
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>

      <input
        type="text"
        value={query}
        placeholder="Search product..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: "100%", padding: "8px" }}
      />

      {loading && <p>Loading...</p>}

      {!loading && query && suggestions.length === 0 && (
        <p>No Results Found</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {suggestions.map((item, index) => (
          <li
            key={item.id}
            style={{
              padding: "8px",
              background: activeIndex === index ? "#eee" : "#fff",
              cursor: "pointer"
            }}
            onClick={() => {
              setQuery(item.title);
              setSuggestions([]);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Autocomplete;