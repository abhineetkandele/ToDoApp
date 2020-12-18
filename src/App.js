import React, { useState } from "react";
import Header from "./components/header/header";
import ListItem from "./components/list-item/list-item";
import List from "./components/list/list";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const headerProps = {
    textBox: {
      value: text,
      onChange: (e) => setText(e.target.value)
    },
    button: {
      text: "Add",
      onClick: () => {
        setList([
          ...list,
          { text, identifier: new Date().getTime(), status: true }
        ]);
        setText("");
      }
    }
  };

  const listItemProps = {
    clickHandler: (key) => {
      let newList = JSON.parse(JSON.stringify(list));
      const clickedItemIndex = newList.findIndex(
        (item) => item.identifier === key
      );
      newList[clickedItemIndex].status = !newList[clickedItemIndex].status;
      setList([...newList]);
    },
    button: {
      text: "Delete",
      onClick: (key) => {
        let newList = JSON.parse(JSON.stringify(list));
        const filteredList = newList.filter((item) => item.identifier !== key);
        setList(filteredList);
      }
    }
  };

  return (
    <div className="App">
      <Header {...headerProps} />
      <List>
        {list.map((item) => (
          <ListItem key={item.identifier} {...item} {...listItemProps} />
        ))}
      </List>
    </div>
  );
}
