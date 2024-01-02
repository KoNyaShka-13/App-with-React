import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDelete}) => {//Берем массив для перебора
   
    const elements = data.map(item => {//При помощи map перебираем элементы массива
        const {id, ...itemProps} = item;//Достаем id, остальное разворачиваем в виде item
        return (
//            <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}/>//Доплнительный вариант разворачивания данных, но при помощи ... (spread оператор)
        )
    })
//Допускается такой вариант, если на бекенде не написали id, а маркировка нужна. Мы просто создаем свою маркировку при помощи i
//такой вариант допускается, если порядок элементов меняться не будет или все запутается при изменении
//    const elements = data.map((item, i) => {
//        const {id, ...itemProps} = item;
//        return (
//            <EmployeesListItem key={i} {...itemProps}/>
//        )
//    })

    return (//Отображаем перебранные элементы
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
       
}

export default EmployeesList;