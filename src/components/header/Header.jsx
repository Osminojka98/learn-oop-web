import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"


class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<header className="header">
				<NavLink to={"/main"} className="logo header__logo">
					<div className="logo__icon"></div>
					<div className="logo__title">LEARN-OOP</div>
				</NavLink>

				<div className="navbar header__navbar">
					<div className="themes-menu navbar__themes-menu">
						<div className="themes-menu__btn">
							<span className="themes-menu__btn-title">Темы</span>
							<div className="themes-menu__btn-icon"></div>
						</div>

						<div className="themes-menu__list">
							<NavLink to="/oop-basics" className="themes-menu__link">Основы ООП</NavLink>

							<NavLink to="/inheritance" className="themes-menu__link">Наследование</NavLink>

							<NavLink to="/encapsulating" className="themes-menu__link">Инкапсуляция</NavLink>

							<NavLink to="/polymorphysm" className="themes-menu__link">Полиморфизм</NavLink>
						</div>
					</div>

					<NavLink to="/point1" className="navbar__link">О сайте</NavLink>
					<NavLink to="/point2" className="navbar__link">Тестирование</NavLink>
				</div>

				<div className="header__course">
					Записаться на курс по JS
					<br />
					<a href="tel:+78005553535">8 800 555 35 35</a>
				</div>
			</header>
		)
	}
}

export default Header;
