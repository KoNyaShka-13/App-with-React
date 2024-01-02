import { Component } from 'react';

import './employees-list-item.css';

// const EmployeesListItem = (props) => { Можно через props, только тогда необходимо будет указывать props.name / props.salary
    //const EmployeesListItem = ({name, salary, increase}) => { // Синтаксис дуструктуризации, то есть мы присваиваем массив или объект, а в моем случае пропс, разбив его на части
class EmployeesListItem extends Component{
        
    constructor(props) {// Это все для премии, increase: false - это отсутствие премии
        super(props);
        this.state = {
            increase: false,
            rise: false

        }
    }

    onIncrease = () => {//Для премии
        this.setState(({increase}) =>({
            increase: !increase
        }))
    }

    onRise = () => {//Для пометки избранного работника
        this.setState(({rise}) =>({
            rise: !rise
        }))
    }

    render() {
        const { name, salary, onDelete} = this.props;//Убираем increase, так как он теперь будет определяться внутри компонента при помощи логики
        const {increase, rise} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";//Это все нужно для добавления классаа increase
        if (increase) {
            classNames += ' increase';//Ставим условие, а класс пишем через пробел, так как без пробела классы слипнутся в один большой
        }
        if (rise) {
            classNames += ' like';//Ставим условие, а класс пишем через пробел, так как без пробела классы слипнутся в один большой
        }



        return ( //Ставим classNames, который будет изменяться
        <li className={classNames}> 
            <span className="list-group-item-label" onClick={this.onRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        )
    }
} 

export default EmployeesListItem;