import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
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
