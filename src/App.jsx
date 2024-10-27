import React from "react";
import "./App.scss"
import "./components.scss"
import Header from "./components/header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import Footer from "./components/footer/Footer";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
      <div>
        <Header />
        <div className="plug-for-header"></div>

        <div className="container">
            <Routes>
              {/* Переход на /main при загрузке приложения */}
              <Route path="/" element={<Navigate to="/main" replace />} />

              <Route path="/main" element={<MainPage />} />
              <Route path="/about" element="О нас" />

              <Route path="/oop-basics" element="ООП База" />
              <Route path="/inheritance" element="Наследование" />
              <Route path="/encapsulating" element="Инкапсуляция" />
              <Route path="/polymorphysm" element="Полиморфизм" />
              <Route path="/testing" element="Тестирование" />
            </Routes>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
