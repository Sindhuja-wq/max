import { useState } from "react";

function App() {
  const [menu, setMenu] = useState("home");
  const [content, setContent] = useState("Welcome");

  const getSidebar = () => {
    if (menu === "basics") {
      return ["Variables", "Data Types", "Operators"];
    }
    if (menu === "condition") {
      return ["if", "if-else", "switch"];
    }
    if (menu === "loops") {
      return ["for loop", "while loop", "do-while"];
    }
    return ["Welcome"];
  };

  const handleContent = (item) => {
    setContent(item);
  };

  return (
    <div>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div onClick={() => setMenu("home")}>Home</div>
        <div onClick={() => setMenu("basics")}>Basics</div>
        <div onClick={() => setMenu("condition")}>Conditional</div>
        <div onClick={() => setMenu("loops")}>Loops</div>
      </div>

      {/* Layout */}
      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {getSidebar().map((item, index) => (
            <div
              key={index}
              style={styles.item}
              onClick={() => handleContent(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={styles.content}>
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    gap: "20px",
    background: "#333",
    color: "white",
    padding: "10px",
    cursor: "pointer",
  },
  container: {
    display: "flex",
  },
  sidebar: {
    width: "250px",
    background: "#f1f1f1",
    padding: "10px",
  },
  item: {
    padding: "8px",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default App;
