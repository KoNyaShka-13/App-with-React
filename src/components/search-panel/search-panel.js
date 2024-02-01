import { Component } from 'react';

import './search-panel.css';
//Панель поиска
class SearchPanel extends Component {
    constructor(props) {//Будем поднимать на верх данные, которые тут получим
        super(props);
        this.state = {
            term: ''
        }
    }

//Чтобы компонент нормально синхронизировался и можно было не только опускать данные, но и поднимать их
    onUpdateSearch = (e) => {//Есть метод, который так и называется, но только в app.js, это другой метод, хоть и название одно
        const term = e.target.value;//Получаем значение, которое ввел пользователь
        this.setState({term});//Связываем локальное состояние
        this.props.onUpdateSearch(term)//Прокидываем на верх, после props указан метод, что в app.js
    }

    render() {
        return (
            <input type="text" 
            className="form-control search-input"
            placeholder="Найти сотрудника" 
            value={this.state.term}
            onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;