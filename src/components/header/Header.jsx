import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuVisible: false,
      isLargeScreen: window.innerWidth >= 1200,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ isLargeScreen: window.innerWidth >= 1000 });
  };



	handleMouseEnter = () => {
		this.setState({ isMenuVisible: true });
	};

	handleMouseLeave = () => {
		this.setState({ isMenuVisible: false });
	};

	render() {
		return (
			<header className="header">
				<NavLink to={"/main"} className="logo header__logo">
					<div className="logo__icon"></div>
					<div className="logo__title">LEARN-OOP</div>
				</NavLink>

				<div className="navbar header__navbar">
					<div 
						className="themes-menu navbar__themes-menu"
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}
					>
						<div className={`themes-menu__btn ${this.state.isMenuVisible ? 'visible' : ''}`}>
							<span className="themes-menu__btn-title">Темы</span>
							<div className="themes-menu__btn-icon"></div>
						</div>

						<div className={`themes-menu__list ${this.state.isMenuVisible ? 'visible' : ''}`}>
							<NavLink to="/oop-basics" className="themes-menu__link">Основы ООП</NavLink>
							<NavLink to="/inheritance" className="themes-menu__link">Наследование</NavLink>
							<NavLink to="/encapsulating" className="themes-menu__link">Инкапсуляция</NavLink>
							<NavLink to="/polymorphysm" className="themes-menu__link">Полиморфизм</NavLink>

							{(!this.state.isLargeScreen) ? 
								<NavLink to="/testing" className="themes-menu__link">Тестирование</NavLink> : ""} 

							{!this.state.isLargeScreen ? 
								<NavLink to="/about" className="themes-menu__link">О сайте</NavLink> : ""}
						</div>
					</div>

					{this.state.isLargeScreen ? 
					<NavLink to="/about" className="navbar__link">О сайте</NavLink> : ""}

					{this.state.isLargeScreen ? 
					<NavLink to="/testing" className="navbar__link">Тестирование</NavLink>
					: ""}

				</div>
			</header>
		);
	}
}

export default Header;
