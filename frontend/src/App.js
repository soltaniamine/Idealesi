import { useState } from "react";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className={showSignup?"":""}>
      <button>Register</button>
    </div>
  );
}

export default App;
