import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./variables.css";

globalStyle("html", {
  "@media": {
    "(max-width: 800px)": {
      fontSize: "10px",
    },
    "(max-width: 479px)": {
      fontSize: "8px",
    },
  },
  msOverflowStyle: "none" /* IE and Edge */,
  scrollbarWidth: "none" /* Firefox */,
});

globalStyle("body", {
  margin: 0,
  backgroundColor: vars.color.gray100,
});

globalStyle("body::-webkit-scrollbar", {
  display: "none" /* Chrome, Safari, Opera*/,
});

globalStyle("header", {
  color: vars.color.blue500,
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("button", {
  border: "none",
  padding: 0,
  margin: 0,
  textAlign: "start",
  font: "inherit",
  color: "inherit",
  background: "none",
  cursor: "pointer",
});

globalStyle("input", {
  fontFamily: "inherit",
});

globalStyle("textarea", {
  fontFamily: "inherit",
});

globalStyle("button", {
  fontFamily: "inherit",
});

globalStyle("select", {
  fontFamily: "inherit",
});
