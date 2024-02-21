import Filter from "./Filter";

const AllCategories = () => {
    return (
            <div className="container_allCategories">
            {['РАЗОВЫЕ ЗАНЯТИЯ', 'АБОНЕМЕНТЫ', 'АРЕНДА', 'СЕРТИФИКАТЫ', 'ПРОЧЕЕ', 'ПОКАЗАТЬ ВСЁ', ]
            .map((category) => <Filter category = {category} key = {category.id}/>)}
            </div>    
        
    )
}

export default AllCategories;