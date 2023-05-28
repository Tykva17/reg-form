import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesUniqNames } from "../../../store/products/productsSelectors";

const Menu = () => {
  const categories = useSelector(getCategoriesUniqNames)
  return <ul>
    {categories.map(_ => <li key={_}><Link to={`categories/${_}`}>{_}</Link></li>)}
  </ul>
}

export default Menu;