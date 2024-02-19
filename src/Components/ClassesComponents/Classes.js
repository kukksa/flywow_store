import dataClasses from "../../dataClasses";
import Class from "./Class";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/classesSlice";

const Classes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="container_type_of_products">
            {dataClasses
            .filter(type => {
                if (selectedCategory === 'ПОКАЗАТЬ ВСЁ') return true;
                return selectedCategory === type.category;
            })
            .map((type, id) => <Class type={type} key={id}/>)}
        </div>
    )
}

export default Classes;