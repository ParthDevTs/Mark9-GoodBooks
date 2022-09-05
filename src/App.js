import { useState } from "react";
import "./styles.css";

export default function App() {
  var [booksArray, setBooksArray] = useState([
    ["Dune", "5/5"],
    ["The Martian", "4.5/5"],
    ["Frankenstien", "2.2/5"],
  ]);

  function ScienceFictionHandler() {
    setBooksArray([
      ["Dune", "5/5"],
      ["The Martian", "4.5/5"],
      ["Frankenstien", "2.2/5"],
    ]);
  }
  function ThrillerHandler() {
    setBooksArray([
      ["Da Vinci Code", "4.5/5"],
      ["Inferno", "4/5"],
      ["Angel and Demons", "5/5"],
    ]);
  }
  function FantasyHandler() {
    setBooksArray([
      ["Harry Potter", "5/5"],
      ["50 Shades of Grey", "4/5"],
      ["The Song of Ice and Fire", "5/5"],
    ]);
  }
  return (
    <div className="App">
      <div className="nav">
        <h1>
          <span className="first__part">good</span>
          <span className="second__part">Books</span>
        </h1>
        <p>The Books I love to read, Check them out: </p>
      </div>
      <div className="main">
        <div className="buttons__row">
          <button onClick={ScienceFictionHandler}>Science Fiction</button>
          <button onClick={ThrillerHandler}>Thriller</button>
          <button onClick={FantasyHandler}>Fantasy</button>
        </div>
        <div className="books__display">
          {booksArray.map(function (book) {
            return (
              <span className="book__tile" key={book[0]}>
                <h3 className="book__name">{book[0]}</h3>{" "}
                <span>
                  Rating: <span className="ratings">{book[1]}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <footer>
        <div className="footer__title">
          made with{" "}
          <span className="emoji" role="img" aria-label="love emoji">
            ❤️
          </span>{" "}
          by Parth Kathuria
        </div>

        <span class="social__media">
          <a
            target="_blank"
            href="https://www.instagram.com/parth.ts/"
            className="social"
            rel="noreferrer"
          >
            Insta
          </a>
          <a
            target="_blank"
            href="https://github.com/ParthDevTs?tab=repositories"
            className="social"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/parth-kathuria-4b0856177/"
            className="social"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </footer>
    </div>
  );
}
