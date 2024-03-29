import './employees-list-item.css';

 const EmployeesListItem = (props) => {// Можно через props, только тогда необходимо будет указывать props.name / props.salary
    //const EmployeesListItem = ({name, salary, increase}) => { // Синтаксис дуструктуризации, то есть мы присваиваем массив или объект, а в моем случае пропс, разбив его на части

        const { name, salary, onDelete, onToggleProp, increase, rise} = props;//Убираем increase, так как он теперь будет определяться внутри компонента при помощи логики

        let classNames = "list-group-item d-flex justify-content-between";//Это все нужно для добавления классаа increase
        if (increase) {
            classNames += ' increase';//Ставим условие, а класс пишем через пробел, так как без пробела классы слипнутся в один большой
        }
        if (rise) {
            classNames += ' like';//Ставим условие, а класс пишем через пробел, так как без пробела классы слипнутся в один большой
        }

        return ( //Ставим classNames, который будет изменяться
        <li className={classNames}> 
            <span className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="rise">{name}
            </span>
            <input type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
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
export default EmployeesListItem;