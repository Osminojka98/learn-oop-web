// Code.jsx
import React, { Component } from 'react';
import './Code.scss';
import Prism from 'prismjs';
import "prismjs/themes/prism-okaidia.css"; // Импорт темы для подсветки синтаксиса

class Code extends Component {
  componentDidMount() {
    Prism.highlightAll(); // Подсвечиваем синтаксис после монтирования компонента
  }

  componentDidUpdate() {
    Prism.highlightAll(); // Переподсвечиваем синтаксис при обновлении компонента
  }

  render() {
    const { code, language } = this.props;

    return (
      <div className="code-example">
        <pre>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    );
  }
}

export default Code;
