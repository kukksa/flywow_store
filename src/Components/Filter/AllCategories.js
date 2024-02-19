import Filter from "./Filter";

const AllCategories = () => {
    return (
            <div className="container_allCategories">
            {['РАЗОВЫЕ ЗАНЯТИЯ', 'АБОНЕМЕНТЫ', 'АРЕНДА', 'СЕРТИФИКАТЫ', 'ПРОЧЕЕ', 'ПОКАЗАТЬ ВСЁ', ]
            .map((category, id) => <Filter category = {category} key = {id}/>)}
            </div>    
        
    )
}

export default AllCategories;