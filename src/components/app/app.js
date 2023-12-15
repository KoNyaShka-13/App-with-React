import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoyees-list/employees-list';
import EmployeesAddForm from '../empoyees-add-form/employees-add-form';
import './app.css';

function App() {

    const data = [//Создали массив и настроили его в employees-list.js для динамического отбраженияданных
        {name: 'Дмитрий Д.', salary: 5000, increase: false},
        {name: 'Михаил С.', salary: 990, increase: false},
        {name: 'Мария Я.', salary: 2400, increase: true},
    ];

    return (
        <div className='app'>
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;