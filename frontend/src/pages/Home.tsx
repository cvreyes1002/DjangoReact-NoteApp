import { useState, useEffect } from "react";
import api from "../api";
import { data } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/") // Sends an HTTP GET request to the /api/notes/ endpoint to retrieve the notes.
      .then((res) => res.data) // Extracts the JSON data from the server's response.
      .then((data) => { setNotes(data); console.log(data)}) // Updates your React state by passing the retrieved data into the setNotes function, which triggers a re-render to display the notes.
      .catch((err) => alert(err)); // Catches any errors that occur during the request (e.g., server issues, network failures) and pops up an alert box showing the error.
  };

  return <div>Home</div>;
}

export default Home;
