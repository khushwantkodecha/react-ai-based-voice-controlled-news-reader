import React, { useState, useEffect } from "react";
import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import Newscards from "./Components/NewsCards/Newscards";
import useStyles from "./styles";

const App = () => {
  const alanKey =
    "c902b2c065aa999ac7bed617f1e7c4f42e956eca572e1d8b807a3e2338fdd0dc/stage";
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://i3.wp.com/quickfever.com/wp-content/uploads/2017/06/voice-dictate.gif"
          className={classes.alanLogo}
          alt="logo"
        />
      </div>
      <Newscards articles={newsArticles} activeArticle={activeArticle} />
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <p>
          Created By : &nbsp;
          <a href="https://findkodecha.web.app/" target="_blank">
            Khushwant Kodecha
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default App;
