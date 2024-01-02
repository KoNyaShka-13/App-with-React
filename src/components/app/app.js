import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoyees-list/employees-list';
import EmployeesAddForm from '../empoyees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [//Создали массив и настроили его в employees-list.js для динамического отбраженияданных
                {name: 'Дмитрий Д.', salary: 5000, increase: false, id: 1},
                {name: 'Михаил С.', salary: 990, increase: false, id: 2},
                {name: 'Мария Я.', salary: 2400, increase: true, id: 3},
            ]
        }
        this.maxId =4;
    }
    
    deleteItem = (id) => {//Создали шаблон удаления просто для примера, что можно из корневой папки добраться до самого низа и взаимодействовать
        this.setState(({data}) => {//state на прямую нельзя изменять, это противоречит принципу имутабельности js, по этому будем клонировать и отображать клонированный 
            //Первый способ удаления из state
            //const index = data.findIndex(elem => elem.id ===id);//Находим нужный айди, который нужно удалить
           // const before = data.slice(0, index);//Двумя строками просто пропускаем число, которое мы "удаляем"
           // const after = data.slice(index + 1);
           // const newArr = [...before, ...after];//Рзаворачиваем и собираем массивы  
           // return {
           //     data: newArr//Отображаем новый массив
           // }

           //Второй способ удаления из state
           return {
                 data: data.filter(item => item.id !== id)//У нас остануться те элементы, id которых не совпадают с указанным id в функции
            }
        })
    }

    // Пока будут добавляться пустые пользователи, в будущем исправлю, может быть)
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {//записываем в массив нового пользователя
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {//Будет изменять инкрис на противоположный
        console.log(`Increase this ${id}`);
    }

    onToggleRise = (id) => {//Будет изменять райс на противоположный
        console.log(`Rise this ${id}`);
    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;