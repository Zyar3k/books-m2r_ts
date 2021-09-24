import Header from "./components/layout/Header/Header";
// import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";

// import { MainWrapper } from "./App.styles";
import { GlobalStyles } from "./Global";
import Content from "./components/layout/Content/Content";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />

      <Content>
        <Sidebar />
        <MainView />
      </Content>
      {/* <Footer /> */}
    </>
  );
};

export default App;
