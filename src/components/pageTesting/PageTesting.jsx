import React, { Component } from "react";
import "./PageTesting.scss"
import TestQuestion from "../micro-components/TestQuestion";


class PageTesting extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return(
			<div>
				<div className="title">Тестирование по ООП:</div>

				<div className="test">
					<TestQuestion 
						question={"ДИМА ЯВЛЯЕТСЯ ГЕЕМ ЛЕсбиянкой?"}
						ans1={"Да"}
						ans2={"Yes"}
						ans3={"Эйе"}
					/>
				</div>
			</div>
		)
	}
}

export default PageTesting;
