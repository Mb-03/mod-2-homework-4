import Header from "./Comonents/Header/Header";
import "../global.css";
import Hero from "./Comonents/Hero/Hero";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <Header count={count} />
      <Hero setCount={handleCount} />
    </>
  );
}
