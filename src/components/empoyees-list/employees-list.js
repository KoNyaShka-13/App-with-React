import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data}) => {//Берем массив для перебора
   
    const elements = data.map(item => {//При помощи map перебираем элементы массива
        return (
//            <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem {...item}/>//Доплнительный вариант разворачивания данных, но при помощи ... (spread оператор)
        )
    })

    return (//Отображаем перебранные элементы
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
       
}

export default EmployeesList;