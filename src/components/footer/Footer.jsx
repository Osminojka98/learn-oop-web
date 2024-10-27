import React from "react";
import "./Footer.scss";


class Footer extends React.Component {
	constructor(props) {
		super(props)
	}


	render() {
		return(
			<footer className="footer">
				<div className="footer__site-name">© 2024 LearnOOP, Inc</div>

				<div className="footer__contacts">tg: @Colden09</div>
			</footer>
		)
	}
}


export default Footer;
