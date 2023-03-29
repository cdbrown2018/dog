import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button";
import Alert from "./Alert";
import Image from "./Image";
import axios from "axios";

function App() {
  const [visible, setVisibility] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [count, setCount] = useState(0);
  function handleClick() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      setImageUrl(res.data.message);
      setCount(count + 1);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        {visible && (
          <Alert type="info" onDismiss={() => setVisibility(false)}>
            I'm a dog ({count})
          </Alert>
        )}
        {imageUrl && <Image imageUrl={imageUrl} altText="My beautiful dog" />}
        <Button
          type="success"
          onClick={() => {
            setVisibility(true);
            handleClick();
          }}
        >
          CLICK ME
        </Button>
      </header>
    </div>
  );
}

export default App;
