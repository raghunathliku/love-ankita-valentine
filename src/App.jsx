import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const sname = "Ankita";
  const [showLetter, setShowLetter] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [hearts, setHearts] = useState([]);

  const fullText = `Happy Valentine’s Day ${sname} ❤️`;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);
    return () => clearInterval(typing);
  }, []);

  const messages = [
    "Every smile of yours makes my world brighter.",
    "With you, even ordinary days feel magical.",
    "You are my favorite notification for life.",
    "In your eyes, I found my forever.",
    "You are my peace, my happiness, my everything.",
    "My heart chose you… and it will always choose you."
  ];

  const images = [
  "/love-ankita-valentine/images/img1.jpg",
  "/love-ankita-valentine/images/img2.jpg",
  "/love-ankita-valentine/images/img5.jpg",
  "/love-ankita-valentine/images/img6.jpg",
  "/love-ankita-valentine/images/img4.jpg",
  "/love-ankita-valentine/images/img3.jpg"
];


  const explodeHearts = (e) => {
    const newHearts = [];
    for (let i = 0; i < 15; i++) {
      newHearts.push({
        id: Math.random(),
        left: e.clientX,
        top: e.clientY
      });
    }
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 1000);
  };

  return (
    <div className="valentine-bg">

      {/* Background Music */}
      <audio autoPlay loop>
        <source src="/love-ankita-valentine/audio/romantic.mp3" type="audio/mp3" />
      </audio>


      {/* Floating Background Hearts */}
      <div className="floating-hearts"></div>

      {/* Typing Title */}
      <h1 className="typing-title">{typedText}</h1>

      {/* Cards */}
      {messages.map((msg, index) => (
        <div className="valentine-card" key={index}>
          <img
            src={images[index]}
            alt="love"
            onClick={explodeHearts}
          />
          <h3>{msg} {sname}</h3>
        </div>
      ))}

      {/* Surprise Button */}
      <button className="love-btn" onClick={() => setShowLetter(true)}>
        Open My Love Letter 💌
      </button>

      {/* Popup Love Letter */}
      {showLetter && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>My Love ❤️</h2>
            <p>
              You are the most beautiful chapter of my life.
              Every day with you feels like a dream I never want to wake up from.
              I promise to love you, respect you, and stand beside you forever.
            </p>
            <button onClick={() => setShowLetter(false)}>Close ❤️</button>
          </div>
        </div>
      )}

      {/* Heart Explosion */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="explode-heart"
          style={{ left: heart.left, top: heart.top }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default App;
