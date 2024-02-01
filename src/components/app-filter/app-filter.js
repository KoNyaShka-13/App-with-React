import './app-filter.css'



const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;//Устанавливаем активный фильтр, чтобы потом переписывать эти филььтры у кнопок
        const clazz = active ? 'btn-light' : 'btn-outline-light';//Условие, если тру, то первый класс, иначе второй класс 
        //clazz - означает класс, но так как class сам по себе зарезервирован программой, для ясности используем другое значение для понятия семантического значения
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/*<button 
                className="btn btn-light"
                type="button">
                Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                З/П больше 1000$
            </button>*/}   
        </div>
    );
}

export default AppFilter;