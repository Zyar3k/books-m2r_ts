import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import { ImStatsBars } from "react-icons/im";

import { SidebarTitleStyled, SidebarItemStyled } from "../Sidebar.styles";

const SidebarUserStats = () => {
  let { books } = useContext(StoreContext) as ContextType;
  const [listValue, setListValue] = useState({
    all: 346,
    ama: 100,
    bbc: 100,
    emp: 100,
    gan: 100,
    pozy: 222
  });

  const percentValue = () => {
    // todo edit function

    const amaData = books?.filter((book) => book.ama === true);
    const amaDataBCounter = Number(amaData?.length);
    const amaReadCounter = Number(
      amaData?.filter((book) => book.readed === true).length
    );
    const bbcData = books?.filter((book) => book.bbc === true);
    const bbcDataBCounter = Number(bbcData?.length);
    const bbcReadCounter = Number(
      bbcData?.filter((book) => book.readed === true).length
    );
    const empData = books?.filter((book) => book.emp === true);
    const empDataBCounter = Number(empData?.length);
    const empReadCounter = Number(
      empData?.filter((book) => book.readed === true).length
    );
    const ganData = books?.filter((book) => book.gan === true);
    const ganDataBCounter = Number(ganData?.length);
    const ganReadCounter = Number(
      ganData?.filter((book) => book.readed === true).length
    );
    const pozyData = books?.filter((book) => book.pozy === true);
    const pozyDataBCounter = Number(pozyData?.length);
    const pozyReadCounter = Number(
      pozyData?.filter((book) => book.readed === true).length
    );

    const amaPercent = (amaDataBCounter / amaDataBCounter) * amaReadCounter;
    const bbcPercent = (bbcDataBCounter / bbcDataBCounter) * bbcReadCounter;
    const empaPercent = (empDataBCounter / empDataBCounter) * empReadCounter;
    const ganPercent = (ganDataBCounter / ganDataBCounter) * ganReadCounter;
    const pozyPercent = (pozyDataBCounter / pozyDataBCounter) * pozyReadCounter;

    const booksCounter = Number(books?.length);

    setListValue({
      all: booksCounter,
      ama: amaPercent,
      bbc: bbcPercent,
      emp: empaPercent,
      gan: ganPercent,
      pozy: pozyPercent
    });
  };

  useEffect(() => {
    percentValue();
  }, []);

  return (
    <ul>
      <SidebarTitleStyled>
        <h3>Statystyki</h3>
        <span>
          <ImStatsBars />
        </span>
      </SidebarTitleStyled>
      <SidebarItemStyled>
        <h4>
          M2R
          <strong>{listValue.all}</strong>
        </h4>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Amazon</h4>
        <p>Przeczytane</p>
        <span>{listValue.ama}%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>BBC</h4>
        <p>Przeczytane</p>
        <span>41%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Empik</h4>
        <p>Przeczytane</p>
        <span>19%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Gandalf</h4>
        <p>Przeczytane</p>
        <span>27%</span>
      </SidebarItemStyled>
      <SidebarItemStyled>
        <h4>Pozycje obowiązkowe</h4>
        <p>Przeczytane</p>
        <span>{listValue.pozy}%</span>
      </SidebarItemStyled>
    </ul>
  );
};

export default SidebarUserStats;
