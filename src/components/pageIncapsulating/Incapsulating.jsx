import React from "react";
import Code from "../micro-components/Code";


class Incapsulating extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<main className="main">
				<div class="title">Инкапсуляция в ООП на JavaScript</div>

				<div class="subtitle">Введение</div>
				<div class="prgh">
					Инкапсуляция является одной из ключевых концепций объектно-ориентированного программирования (ООП), наряду с наследованием, полиморфизмом и абстракцией. В JavaScript, который изначально не был создан как строго объектно-ориентированный язык, инкапсуляция часто достигается специфическими способами, включая использование классов, замыканий и модулей.
				</div>

				<div class="subtitle">Что такое инкапсуляция?</div>
				<div class="info">
					Определение: Инкапсуляция — это механизм, с помощью которого данные и методы, связанные с определенным объектом, скрываются от внешнего мира и предоставляются только через публичный интерфейс объекта.
				</div>

				<div class="prgh">
					В JavaScript инкапсуляция позволяет защитить внутреннее состояние объекта и ограничить доступ к нему, скрыв реализацию методов и свойств. Это повышает безопасность данных и способствует логическому разделению кода. Давайте рассмотрим основные способы реализации инкапсуляции в JavaScript.
				</div>

				<div class="subtitle">1. Инкапсуляция через замыкания</div>
				<div class="prgh">
					Замыкания в JavaScript позволяют создавать приватные переменные и функции, доступные только внутри функции, в которой они были созданы. Это один из первых способов инкапсуляции, который использовался до появления классов в JavaScript.
				</div>

				<Code code={`function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1`} language={`js`} />

				<div class="prgh">
					Здесь переменная count остается приватной, так как доступ к ней возможен только через методы increment и getCount, доступные извне.
				</div>

				<div class="subtitle">2. Инкапсуляция с использованием классов</div>
				<div class="prgh">
					С введением классов в ES6 (ECMAScript 2015) появился более удобный способ управления доступом к данным объекта. Классы позволяют разделять методы на публичные и приватные, скрывая логику через специальные соглашения.
				</div>

				<Code code={`class Car {
  #speed = 0; // Приватное поле
  
  constructor(model) {
    this.model = model;
  }
  
  accelerate(amount) {
    if (amount > 0) {
      this.#speed += amount;
    }
  }
  
  getSpeed() {
    return this.#speed;
  }
}

const car = new Car('Toyota');
car.accelerate(50);
console.log(car.getSpeed()); // 50
console.log(car.#speed); // Ошибка: приватное поле`} language={`js`} />

				<div class="prgh">
					В данном примере #speed является приватным полем, доступным только внутри класса Car. Это достигается с использованием синтаксиса # для приватных свойств и методов.
				</div>

				<div class="subtitle">3. Модули как способ инкапсуляции</div>
				<div class="prgh">
					JavaScript поддерживает модули, которые позволяют организовать код в отдельных файлах и скрывать некоторые части реализации. Экспортируя только необходимые элементы, мы можем ограничить доступ к внутренним функциям и переменным.
				</div>

				<Code code={`// module.js
const privateData = 'Скрытые данные';

export function publicFunction() {
  return privateData;
}

// main.js
import { publicFunction } from './module.js';

console.log(publicFunction()); // 'Скрытые данные'`} language={`js`} />

				<div class="prgh">
					Здесь privateData остается закрытым внутри модуля module.js, а доступ к нему можно получить только через publicFunction.
				</div>

				<div class="subtitle">4. Соглашения для имитации инкапсуляции</div>
				<div class="prgh">
					До появления #-синтаксиса приватных свойств использовалось соглашение об именовании, например, добавление подчеркивания _ перед именем переменной или метода, чтобы обозначить их как приватные.
				</div>

				<Code code={`class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
  
  get balance() {
    return this._balance;
  }
}`} language={`js`} />

				<div class="prgh">
					Здесь свойство _balance условно считается приватным, хотя оно все еще доступно извне. Это соглашение помогает другим разработчикам понять, что данное свойство не следует изменять напрямую.
				</div>

				<div class="subtitle">Преимущества инкапсуляции</div>
				<div class="prgh">
					Инкапсуляция предоставляет следующие важные преимущества:
				</div>
				<div class="prgh">
					<ul>
						<li>Безопасность данных: Приватные данные защищены от несанкционированного доступа и случайного изменения.</li>
						<li>Легкость сопровождения: Код становится проще поддерживать, так как скрытая реализация минимизирует возможные изменения в основной логике.</li>
						<li>Повышение гибкости: Разработчики могут менять внутреннюю логику, не влияя на внешний интерфейс.</li>
						<li>Переиспользование кода: Компоненты, созданные с использованием инкапсуляции, проще интегрировать в другие части проекта.</li>
					</ul>
				</div>

				<div class="subtitle">Заключение</div>
				<div class="prgh">
					Инкапсуляция является важным принципом ООП, который помогает улучшить архитектуру и безопасность кода. В JavaScript инкапсуляция реализуется с помощью классов, замыканий, модулей и соглашений об именах. Понимание и грамотное использование инкапсуляции позволяет создавать более устойчивые и поддерживаемые приложения, где логика скрыта и четко определена.
				</div>

				<div class="prgh">
					С развитием JavaScript инкапсуляция стала проще в использовании, а вместе с новыми инструментами и подходами она дает возможность создавать надежные и гибкие приложения.
				</div>

			</main>
		)
	}
}

export default Incapsulating;
