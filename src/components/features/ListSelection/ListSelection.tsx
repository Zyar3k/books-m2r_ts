import { useContext } from "react";
import { ListSelectionStyled } from "./ListSelection.styles";

import { StoreContext } from "../../../store/StoreProvider";

const ListSelection = () => {
  const { listFilter } = useContext(StoreContext) as ContextType;

  const listDisplayData = [
    {
      html: "all",
      value: "all",
      id: "all",
      name: "Pełna lista"
    },
    {
      html: "ama",
      value: "ama",
      id: "ama",
      name: "Amazon"
    },
    {
      html: "bbc",
      value: "bbc",
      id: "bbc",
      name: "BBC"
    },
    {
      html: "emp",
      value: "emp",
      id: "emp",
      name: "Empik"
    },
    {
      html: "gan",
      value: "gan",
      id: "gan",
      name: "Gandalf"
    },
    {
      html: "pozy",
      value: "pozy",
      id: "pozy",
      name: "Pozycje"
    }
  ];

  return (
    <ListSelectionStyled>
      {listDisplayData.map((item, index) => (
        <div key={index}>
          <label htmlFor={item.html}>
            <input
              onChange={listFilter}
              type='radio'
              name='list-filter'
              value={item.value}
              id={item.id}
            />
            {item.name}
          </label>
        </div>
      ))}
    </ListSelectionStyled>
  );
};

export default ListSelection;
