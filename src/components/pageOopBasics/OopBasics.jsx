import React, { Component } from "react";
import "./OopBasics.scss";
import Code from "../micro-components/Code";


class OopBasics extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return(
			<main className="main">
				<div className="title">Основы ООП</div>

				<div className="prgh">Итак, сейчас мы разберем что такое ООП и "с чем его есть". Определение ООП:</div>

				<div className="info">
					<i><b>Объектно-ориентированное программирование</b></i> (ООП) — это парадигма программирования, основанная на представлении программы как совокупности объектов, каждый из которых имеет состояние и поведение. В ООП объектами являются сущности, объединяющие данные (состояние) и методы для их обработки (поведение).
				</div>

				<div className="prgh">Сложно? Да. Обьясним более простым языком :)</div>

				<div className="prgh">
					Объектно-ориентированное программирование (ООП) — это способ писать код, где всё представляется как объекты. Объекты — это как вещи или сущности, у которых есть свои свойства (в ооп - поля) и то, что они могут делать (функции, в ооп - методы).
				</div>

				<div className="subtitle">Зачем нужно ООП?</div>

				<div className="prgh">
					Оно помогает упорядочить код и сделать его понятнее. ООП полезно, когда программа становится большой, потому что легче работать с отдельными объектами, чем с огромным списком команд.
				</div>

				<div className="subtitle">Простой пример:</div>

				<div className="prgh">
					Представьте, что вы создаёте игру, где есть разные виды машин. У каждой машины есть такие свойства, как цвет и скорость, и такие действия, как "поехать" или "остановиться". <br /><br />

					В ООП это можно представить так: <br />

					1) Класс — это шаблон для создания объектов. Например, мы можем создать класс Car, который определяет общие свойства и действия машины. <br /><br />
					2) Объекты — это конкретные экземпляры класса, например, "красная машина" или "синяя машина". Они будут обладать свойствами и действиями, описанными в классе Car.
				</div>

				<div className="subtitle">Код пример:</div>

      <Code code={`// Класс для машины
class Car {
  constructor(color, speed) {
    this.color = color; // цвет машины
    this.speed = speed; // скорость машины
  }

  drive() {
    console.log(\`Машина \${this.color} цвета едет со скоростью \${this.speed} км/ч.\`);
  }

  stop() {
    console.log(\`Машина \${this.color} цвета остановилась.\`);
  }
}

// Создаём объекты машины
const redCar = new Car("красный", 120);
const blueCar = new Car("синий", 90);

redCar.drive(); // Машина красного цвета едет со скоростью 120 км/ч.
blueCar.stop(); // Машина синего цвета остановилась.
`} language="js" />

				<div className="subtitle">Что здесь происходит?</div>

				<div className="prgh">
					Класс Car описывает, какие у машины есть свойства (цвет и скорость) и что она умеет делать (ехать и останавливаться). <br /><br />

					Объекты redCar и blueCar созданы из класса Car. Каждый объект имеет свои значения для цвета и скорости и может выполнять действия, описанные в классе. <br /><br />

					Это позволяет легко создавать много машин с разными свойствами, но использовать один и тот же класс для их описания, упрощая код и делая его более понятным.
				</div>

				<div className="prgh">Теперь разберем всё подробнее</div>

				<div className="title">Что такое ООП</div>

				<div className="prgh">
					По сути, ООП — это способ написания кода, позволяющий создавать объекты с помощью одного объекта. В этом также заключается суть шаблона проектирования «Конструктор». Общий объект, обычно, называется планом, классом или схемой (blueprint), а создаваемые с его помощью объекты — экземплярами (instances).
				</div>

				<div className="prgh">
					Каждый экземпляр имеет как свойства, наследуемые от родителя, так и собственные свойства. Например, если у нас имеется проект Human (человек), мы можем создавать на его основе экземпляры с разными именами.
				</div>

				<div className="prgh">
					Второй аспект ООП состоит в структурировании кода, когда у нас имеется несколько проектов разного уровня. Это называется наследованием (inheritance) или классификацией (созданием подклассов) (subclassing).
				</div>

				<div className="prgh">
					Третий аспект ООП — инкапсуляция, когда мы скрываем детали реализации от посторонних, делая переменные и функции недоступными извне. В этом заключается суть шаблонов проектирования «Модуль» и «Фасад».
				</div>

				<div className="prgh">Перейдем с способам создания объектов.</div>

				<div className="title">Способы создания объекта</div>

				<div className="subtitle">Функция-конструктор</div>

				<div className="prgh">
					Конструкторами являются функции, в которых используется ключевое слово «this».
				</div>

				<Code code={`function Human(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}`} language={"js"} />

				<div className="prgh">
					this позволяет сохранять и получать доступ к уникальным значениям создаваемого экземпляра. По сути это ссылка на экземпляр, который будет создан конструктором. Экземпляры создаются с помощью ключевого слова «new».
				</div>

				<Code code={`const chris = new Human('Chris', 'Coyier')
console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier

const zell = new Human('Zell', 'Liew')
console.log(zell.firstName) // Zell
console.log(zell.lastName) // Liew`} language={'js'} />

				<div className="subtitle">Класс</div>

				<div className="prgh">
					Классы являются абстракцией («синтаксическим сахаром») над функциями-конструкторами. Они облегчают задачу создания экземпляров.
				</div>

				<Code code={` class Human {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
    }`} language={'js'} />

				<div className="prgh">
					Обратите внимание, что constructor содержит тот же код, что и функция-конструктор, приведенная выше. Мы должны это делать, чтобы инициализировать this. Мы может опустить constructor, если нам не требуется присваивать начальные значения.
				</div>

				<div className="prgh">
				На первый взгляд, классы кажутся сложнее, чем конструкторы — приходится писать больше кода. Придержите лошадей и не делайте поспешных выводов. Классы — это круто. Чуть позже вы поймете почему.
				</div>

				<div className="prgh">
				Экземпляры также создаются с помощью ключевого слова «new».
				</div>

				<Code code={`const chris = new Human('Chris', 'Coyier')

console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier`} language={'js'} />


				<div className="subtitle">Определение свойств и методов</div>

				<div className="prgh">
				Методы — это функции, объявленные в качестве свойств объекта. <br /><br />

				Для определения свойства в экземпляре необходимо добавить его в функцию-конструктор. Убедитесь, что добавляете свойство к this.
				</div>

				<Code code={`function Human (firstName, lastName) {
  // Определяем свойства
  this.firstName = firstName
  this.lastname = lastName

  // Определяем методы
  this.sayHello = function () {
    console.log(\`Hello, I'm \${firstName}\`)
  }
}

const chris = new Human('Chris', 'Coyier')
console.log(chris)`} language={'js'} />

				<div className="prgh">
				Методы, обычно, определяются в прототипе, поскольку это позволяет избежать создания функции для каждого экземпляра, т.е. позволяет всем экземплярам использовать одну функцию (такую функцию называют общей или распределенной).
				</div>

				<div className="subtitle">Определение свойств и методов в классе</div>

				<div className="prgh">Свойства экземпляра можно определить в constructor.</div>

				<Code code={`class Human {
  constructor (firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName

      this.sayHello = function () {
        console.log(\`Hello, I'm \${firstName}\`)
      }
  }
}`} language={'js'} />

				<div className="prgh">
				Свойства прототипа определяются после constructor в виде обычной функции.
				</div>

				<Code code={`class Human (firstName, lastName) {
  constructor (firstName, lastName) { /* ... */ }

  sayHello () {
    console.log(\`Hello, I'm \${this.firstName}\`)
  }
}`} language={'js'} />

				<div className="title">Предварительный вывод</div>

				<div className="prgh">
					В данной главе мы изучили общие принципы ООП. Разобрали что такое классы и конструкторы и научились их создавать. Насчёт того, что использовать, функцию конструктор или класс, я бы посоветовал пользоваться классами, так как в них более простое и удобное взаимодействие. <br />
					Далее можете начать читать главу - "Наследование" <br /><br />

					Удачи ;)
				</div>


			</main>
		)
	}
}

export default OopBasics;
