import React, { Component } from "react";
import "./Inheritance.scss"
import Code from "../micro-components/Code";


class Inheritance extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return(
			<div>
				<div className="title">ООП: Наследование</div>

				<div className="prgh">
					Итак, в этой главе мы изучим принципы наследования классов на языке JavaScript :)))
				</div>

				<div className="subtitle">Что такое наследование?</div>

				<div className="prgh">
				В JavaScript наследование означает передачу свойств от родительского объекта к дочернему, т.е. от проекта к экземпляру.
				</div>

				<div className="prgh">
				Это происходит двумя способами: <br /><br />

				с помощью инициализации экземпляра <br />
				с помощью цепочки прототипов <br /><br />

				Во втором случае имеет место расширение родительского проекта с помощью дочернего проекта. Это называется созданием подклассов, но некоторые также называют это наследованием.
				</div>
				
				<div className="subtitle">Зачем нужно наследование?</div>

				<div className="prgh">
				Наследование позволяет создавать специализированные классы, которые используют базовую функциональность существующих классов, но могут добавлять собственные свойства или переопределять методы. Это удобно, когда несколько классов имеют общие черты, но также требуют специфичного поведения.
				</div>

				<div className="subtitle">Основные элементы наследования</div>

				<div className="prgh">
				Базовый (родительский) класс: класс, от которого наследуют другие классы. <br /><br />

				Производный (дочерний) класс: класс, который наследует свойства и методы базового класса. <br /><br />
				Ключевое слово extends: используется для объявления наследования в JavaScript.
				</div>

				<div className="prgh">
					Создание подклассов — это когда дочерний проект расширяет родительский. <br />

					Рассмотрим это на примере классов. <br />

					Для расширения родительского класса используется ключевое слово «extends». <br />

					Например, давайте создадим класс «Developer», расширяющий класс «Human».
				</div> <br /><br />

				<Code code={`// Базовый класс Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Метод для базового класса
  makeSound() {
    console.log(\`\${this.name} издает звук\`);
  }
}

// Дочерний класс Dog, наследующий от Animal
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Вызов конструктора родительского класса
    this.breed = breed;
  }

  // Переопределение метода makeSound
  makeSound() {
    console.log(\`\${this.name} лает\`);
  }

  // Новый метод, доступный только для класса Dog
  fetch() {
    console.log(\`\${this.name} приносит мяч\`);
  }
}

// Использование
const myDog = new Dog("Бобик", 3, "Бульдог");
myDog.makeSound(); // Вывод: Бобик лает
myDog.fetch(); // Вывод: Бобик приносит мяч
`} language={'js'} /> <br /><br />

				<div className="subtitle">Объяснение</div>

				<div className="prgh">
					Animal — базовый класс с методами и свойствами, общими для всех животных. <br /><br />
					Dog — дочерний класс, который наследует от Animal и расширяет его. <br /><br />
					super(name, age) — вызов конструктора базового класса для инициализации свойств name и age. <br /><br />
					Переопределение метода — метод makeSound переопределяется в классе Dog, чтобы добавить уникальное поведение для собаки.
				</div>

				<div className="subtitle">Использование функции super</div>

				<div className="prgh">
				Ключевое слово super позволяет вызывать методы родительского класса из дочернего. Это важно для конструктора, так как базовый класс может иметь свойства, которые необходимо инициализировать.
				</div><br />

				<Code code={`class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  getInfo() {
    console.log(\`Имя: \${this.name}, Должность: \${this.position}\`);
  }
}

class Manager extends Employee {
  constructor(name, position, department) {
    super(name, position); // Инициализация name и position из родительского класса Employee
    this.department = department;
  }

  getInfo() {
    super.getInfo(); // Вызов метода getInfo из родительского класса
    console.log(\`Отдел: \${this.department}\`);
  }
}

// Использование
const manager = new Manager("Алексей", "Менеджер", "Продажи");
manager.getInfo();
// Вывод:
// Имя: Алексей, Должность: Менеджер
// Отдел: Продажи
`} language={'js'}/> <br />

				<div className="prgh">
				В этом примере метод getInfo в Manager сначала вызывает getInfo из Employee, а затем добавляет информацию о департаменте.
				</div>

				<div className="subtitle">Наследование и иерархия классов</div>

				<div className="prgh">
				Когда мы создаем классы, основанные на наследовании, стоит задуматься об их иерархии. Например, если бы мы добавили еще один класс Bird, унаследованный от Animal, он также мог бы иметь свои уникальные методы, например, fly. Вот пример более сложной иерархии.
				</div> <br /><br />

				<Code code={`class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(\`\${this.name} издает звук\`);
  }
}

class Mammal extends Animal {
  constructor(name, furType) {
    super(name);
    this.furType = furType;
  }
}

class Dog extends Mammal {
  makeSound() {
    console.log(\`\${this.name} лает\`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(\`\${this.name} летит\`);
  }
}

const myDog = new Dog("Бобик", "короткая шерсть");
myDog.makeSound(); // Вывод: Бобик лает

const myBird = new Bird("Попугай");
myBird.fly(); // Вывод: Попугай летит
`} language={`js`} /> <br /><br />

				<div className="subtitle">Когда использовать наследование?</div>

				<div className="prgh">
				Наследование полезно, когда: <br />

				Классы имеют много общего: если у классов множество общих свойств или методов, которые вы хотите разделить в базовый класс. <br /><br />
				Есть логическая связь: когда один класс является расширением другого по смыслу (например, Dog — это частный случай Animal). <br /><br />
				Переопределение методов: если дочерние классы должны иметь собственную реализацию некоторых методов родительского класса.
				</div>

				<div className="subtitle">Когда не стоит использовать наследование?</div>

				<div className="prgh">
				Иногда наследование приводит к избыточной сложности, особенно когда иерархия классов становится слишком глубокой. Это затрудняет поддержку и делает код менее гибким. В таких случаях может быть полезно использовать композицию (сочетание объектов с разными обязанностями), а не наследование.
				</div>

				<div className="subtitle">Предварительный вывод</div>

				<div className="prgh">
				Наследование — это мощный инструмент ООП, который позволяет переиспользовать код и создавать иерархии классов, сохраняя логическую структуру и иерархию объектов. Оно подходит для моделирования сложных систем, где есть четкая иерархия и общий функционал между классами, но требует тщательного планирования, чтобы избежать избыточности и излишней сложности.
				</div>
			</div>
		)
	}
}

export default Inheritance;
