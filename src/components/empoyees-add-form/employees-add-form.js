import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {//Создаем конструктор, в котором будут состояния для создания новых сотрудников
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {//Будет принимать аргумент объекта события, а затем изменять состояние
        this.setState({//Можно и через коллбэк функцию
            //Пример записи свойств в объект, когда свойство составное из нескольких объектов, как в нашем случае
            [e.target.name]: e.target.value //Так как к разным даннм атрибута будет только одно обращение, нужно создать один атрибут, от которого будем отталкиваться, в нашем случае name
        }) 
    }

    onSubmit = (e) => {//Создание самого сотрудника при нажатии на кнопку
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;