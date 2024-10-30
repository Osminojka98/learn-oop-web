import React from "react";
import Code from "../micro-components/Code";


class Polimorphysm extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main className="main">
				<div className="title">Полиморфизм в ООП на JavaScript</div>

				<div className="subtitle">Введение</div>
				<div className="prgh">
					Полиморфизм — это фундаментальный принцип объектно-ориентированного программирования (ООП), позволяющий объектам разных классов обрабатывать одно и то же сообщение или метод по-разному. В JavaScript полиморфизм способствует созданию кода, который легче расширять и поддерживать, обеспечивая гибкость за счет возможности изменять поведение объектов на основе их типа.
				</div>

				<div className="subtitle">Что такое полиморфизм?</div>
				<div className="info">
					Определение: Полиморфизм — это способность объектов разных классов иметь общий интерфейс, но при этом реализовывать его по-разному. Он помогает в создании универсального кода, который может обрабатывать различные типы объектов, не зная их конкретных классов.
				</div>

				<div className="prgh">
					Полиморфизм в JavaScript реализуется через переопределение методов и наследование, а также с помощью общего интерфейса для взаимодействия с объектами разных типов. Давайте рассмотрим различные способы использования полиморфизма на практике.
				</div>

				<div className="subtitle">1. Полиморфизм через переопределение методов</div>
				<div className="prgh">
					Один из наиболее распространенных видов полиморфизма — это переопределение методов в дочерних классах. Это позволяет каждому дочернему классу иметь собственную реализацию метода, который был определен в родительском классе.
				</div>

				<Code code={`class Animal {
  speak() {
    return "Животное издает звук";
  }
}

class Dog extends Animal {
  speak() {
    return "Собака лает";
  }
}

class Cat extends Animal {
  speak() {
    return "Кошка мяукает";
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(animal => console.log(animal.speak()));`} language={`js`} />

				<div className="prgh">
					В этом примере метод 'speak' базового класса 'Animal' переопределен в дочерних классах 'Dog' и 'Cat'. Это позволяет каждому классу реализовать собственное поведение при вызове метода 'speak'.
				</div>

				<div className="subtitle">2. Полиморфизм через интерфейсы</div>
				<div className="prgh">
					Хотя JavaScript не поддерживает интерфейсы нативно, можно создать методы с одинаковыми именами в разных классах. Это позволяет одному и тому же коду взаимодействовать с различными объектами, вызывая методы, определенные в этих классах.
				</div>

				<Code code={`class Printer {
  print(content) {
    return "Печать: " + content;
  }
}

class PDFPrinter extends Printer {
  print(content) {
    return "Печать в PDF: " + content;
  }
}

class HTMLPrinter extends Printer {
  print(content) {
    return "Печать в HTML: " + content;
  }
}

const printers = [new Printer(), new PDFPrinter(), new HTMLPrinter()];
printers.forEach(printer => console.log(printer.print("Документ")));`} language={`js`} />

				<div className="prgh">
					Здесь общий метод 'print' переопределяется в классах 'PDFPrinter' и 'HTMLPrinter', и каждый из них реализует собственную логику печати. Это позволяет использовать один и тот же метод 'print' для различных видов печати в зависимости от типа объекта.
				</div>

				<div className="subtitle">3. Полиморфизм через динамическое поведение объектов</div>
				<div className="prgh">
					В JavaScript можно также динамически присваивать методы объектам, что позволяет моделировать полиморфизм, изменяя поведение объектов в зависимости от их типа.
				</div>

				<Code code={`class Shape {
  draw() {
    return "Рисуем фигуру";
  }
}

class Circle extends Shape {
  draw() {
    return "Рисуем круг";
  }
}

class Square extends Shape {
  draw() {
    return "Рисуем квадрат";
  }
}

const shapes = [new Circle(), new Square(), new Shape()];
shapes.forEach(shape => console.log(shape.draw()));`} language={`js`} />

				<div className="prgh">
					В этом примере у каждого класса, наследующего 'Shape', есть свой метод 'draw', который реализует разное поведение в зависимости от конкретного типа фигуры.
				</div>

				<div className="subtitle">Преимущества полиморфизма</div>
				<div className="prgh">
					Использование полиморфизма в JavaScript предоставляет разработчикам следующие преимущества:
				</div>

				<div className="prgh">
					<ul>
						<li>Гибкость кода: Можно добавлять новые классы, не меняя существующий код, что повышает его расширяемость.</li>
						<li>Упрощение сопровождения: Полиморфизм упрощает поддержку и улучшает структуру кода.</li>
						<li>Упрощенное тестирование: Модульное тестирование легче выполнять, так как интерфейсы классов остаются неизменными.</li>
					</ul>
				</div>

				<div className="subtitle">Заключение</div>
				<div className="prgh">
					Полиморфизм — это мощный инструмент для разработки гибких и удобных в сопровождении приложений. В JavaScript полиморфизм помогает создавать классы, которые могут изменять свое поведение в зависимости от их конкретной реализации, делая код более универсальным и легким для расширения. Этот принцип ООП особенно полезен в проектах, где важна адаптивность и расширяемость кода.
				</div>

				<div className="prgh">
					Понимание и использование полиморфизма позволяет разработчикам создавать адаптивные приложения, которые могут легко изменяться по мере изменения требований. Полиморфизм — это один из тех принципов, которые позволяют достигать высокой гибкости и упрощают архитектуру приложения.
				</div>

			</main>
		)
	}
}

export default Polimorphysm;
