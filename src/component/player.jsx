import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "calc(100% - 50px)",
    height: "calc(100% - 120px)",
    [theme.breakpoints.down("sm")]: {
      height: "50%",
      width: "calc(100% - 10px)",
    },
  },
}));

export default function Player(props) {
  //   const [html, setHtml] = useState("");
  const classes = useStyles();
  //   const html = film();
  //   console.log(html);

  //   useEffect(() => {
  //     const film = async () => {
  //       if (props.iframeSrc === "") {
  //         return 0;
  //       }
  //       const response = await fetch(`${props.iframeSrc}`)
  //         .then((response) => response.text())
  //         .then((responseJSON) => {
  //           return responseJSON;
  //           // do stuff with responseJSON here...
  //         })
  //         .catch((error) => error);
  //       //   console.log(response);
  //       var dom = document.createElement("div");
  //       dom.innerHTML = response;
  //       console.log(dom.children);
  //       dom.children[6].src = "testplayer.js";
  //       console.log(dom.children[6]);
  //       setHtml(dom.outerHTML);
  //     };
  //     if (props.iframeSrc === "") {
  //       setHtml("");
  //     } else {
  //       film();
  //     }
  //   }, [props.iframeSrc]);

  //   film();
  //   film();
  //   console.log(html);

  return (
    <>
      <iframe
        id="playerjs"
        className={classes.root}
        title="qq"
        // srcdoc={html || ""}
        src={props.iframeSrc}
        allowFullScreen="true "
        frameBorder="0"></iframe>
      {/* {film()} */}
    </>
  );
}
