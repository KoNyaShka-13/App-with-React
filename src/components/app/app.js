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
                {name: 'Дмитрий Д.', salary: 5000, increase: false, rise: false, id: 1},
                {name: 'Михаил С.', salary: 990, increase: false, rise: false, id: 2},
                {name: 'Мария Я.', salary: 2400, increase: true, rise: false, id: 3}
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
            rise: false, 
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
    //Пример создания и добавления нового элемента
    //this.setState(({data}) =>{
        //    
        //const index = data.findIndex(elem => elem.id === id);//Получаем индекс
        //    
        //const old = data[index];//Берем индекс и оставляем ее, чтобы не нарушать принцип иммутабельности
        //const newItem = {...old, increase: !old.increase};//Делаем копию объекта
        //const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];//Добавляем в массив
        //    
        //return {//Возвращаем
        //    data: newArr
        //}
    //})
    this.setState(({data}) =>({//Другой способ создания нового объекта
        data: data.map(item => {//При помощь мар создаем копию
            if (item.id === id) {//Если это нужная копия, то мы ее изменяем
                return {...item, increase: !item.increase}
            }
            return item;//Возвращаем
        })
    }))
    }

    onToggleRise = (id) => {//Будет изменять райс на противоположный
        this.setState(({data}) =>({//Другой способ создания нового объекта
            data: data.map(item => {//При помощи мар создаем копию
                if (item.id === id) {//Если это нужная копия, то мы ее изменяем
                    return {...item, rise: !item.rise}
                }
                return item;//Возвращаем
            })
        }))
    }

    render() {
        const employees = this.state.data.length;//Узнаем общее число сотрудников
        const increased = this.state.data.filter(item => item.increase).length//Фильтр вернет массив с положительным параметром инкрис
        return (
            <div className='app'>
                <AppInfo employees={employees} increased={increased}/>
    
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