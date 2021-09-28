// import { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
// import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";

// import { MainWrapper } from "./App.styles";
import { GlobalStyles } from "./Global";
import Content from "./components/layout/Content/Content";
import BookExtension from "./components/views/BookExtension/BookExtension";

// import { StoreContext } from "./store/StoreProvider";

const App = () => {
  // const { books, isLogged } = useContext(StoreContext) as ContextType;
  // console.log(StoreContext);
  // console.log(books);
  // console.log(isLogged);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Content>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={MainView} />
          <Route path='/book/:id' component={BookExtension} />
        </Switch>
      </Content>
      {/* <Footer /> */}
    </>
  );
};

export default App;
