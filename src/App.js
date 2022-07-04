
import React from "react";
import Accordion from "./components/Accordion/Accordion";
import Checkbox from "./components/Checkbox/Checkbox";

import "./App.scss";

const App = () => {

  // the input array

  const array = [
    {
      name: "0-0",
      parentId: null
    }, {
      name: "0-1",
      parentId: null,
    }, {
      name: "0-2",
      parentId: null,
    }, {
      name: "0-0-0",
      parentId: "0-0",
    }, {
      name: "0-0-1",
      parentId: "0-1",
    }, {
      name: "0-0-0-0",
      parentId: "0-0-0",
    }, {
      name: "0-0-0-1",
      parentId: "0-0-0",
    }, {
      name: "0-0-0-2",
      parentId: "0-0-0",
    }, {
      name: "0-0-1-0",
      parentId: "0-0-1",
    }, {
      name: "0-0-1-1",
      parentId: "0-0-1",
    }, {
      name: "0-0-1-2",
      parentId: "0-0-1",
    }, {
      name: "0-0-2",
      parentId: "0-0",
    }, {
      name: "0-1-0",
      parentId: "0-1",
    }
  ]

  // function to created hierarchial array from the input array
  // this function will work only if the parent element exists before the child element in the input array

  const getNestedArray = (list) => {
    let map = {}, node, nestedArray = [];

    for (let i = 0; i < list.length; i += 1) {
      map[list[i].name] = i; // initialize the map
      list[i].children = []; // initialize the children
    }

    for (let i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== null) {
        list[map[node.parentId]].children.push(node);
      } else {
        nestedArray.push(node);
      }
    }
    return nestedArray;
  }

  // function to return the nested checkbox

  const getNestedCheckbox = (arr) => {
    return arr?.map(item => {
      if (item.children.length) {
        return (
          <Accordion label={item.name} accordionId={item.name}>
            {getNestedCheckbox(item.children)}
          </Accordion>)
      }
      else {
        return <Checkbox id={item.name} label={item.name} />
      }
    })
  }

  return (
    <div>
      <h1 className="heading">
        Nested Checkbox
      </h1>
      <div className="app-body">
        {
          getNestedCheckbox(getNestedArray(array))
        }
      </div>
    </div>
  );
};

export default App;