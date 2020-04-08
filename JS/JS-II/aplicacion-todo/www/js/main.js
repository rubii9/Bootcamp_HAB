import AppData from "/js/appData.js";
import AppUI from "/js/appUI.js";

const todoAppData = new AppData({
  dbName: "todo-db"
});

const todoAppUI = new AppUI({
  element: document.querySelector("#todos"),
  db: todoAppData
});
