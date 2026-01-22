import { useState } from "react";

function Seven() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleAddItem = (e) => {
    if (e.key == "Enter") {
      if (!text) return;
      setItems([...items, { id: Date.now(), name: text }]);
      setText("");
    }
  };

  const handleOnDelete = (id) => {
    setItems(items.filter((i) => i.id != id));
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>create Crud UI</h4>
              <input
                type="text"
                value={text}
                onKeyDown={handleAddItem}
                onChange={(e) => setText(e.target.value)}
              />
              <ul>
                {items.map((i) => (
                  <li key={i.id}>
                    {i.name}{" "}
                    <button
                      className="btn"
                      onClick={() => handleOnDelete(i.id)}
                    >
                      Delete Item
                    </button>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Seven;
