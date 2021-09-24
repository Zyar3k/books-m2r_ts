import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import MainView from "./components/views/MainView/MainView";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <MainView />
      <Footer />
    </>
  );
};

export default App;
