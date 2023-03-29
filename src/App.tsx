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
  const [breed, setBreed] = useState("");
  async function handleClick() {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImageUrl(res.data.message);
    const breed = res.data.message.split("/")[4].replace("-", " ");
    setBreed(breed);
  }

  return (
    <div className="App">
      <header className="App-header">
        {visible && (
          <Alert type="info" onDismiss={() => setVisibility(false)}>
            I'm a {breed}.
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
