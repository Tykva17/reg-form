import { useSelector } from "react-redux";
import CardProduct from "../../CardProduct/CardProduct";
import { Grid } from '@mui/material';
import { getAllProducts } from "../../../store/products/productsSelectors";

const Content = () => {
  const products = useSelector(getAllProducts)
  return (
    <Grid container spacing={4}>
      {products.map((_) => (
        <Grid key={_.id} item lg={3} md={4} sm={5} sx={6} >
          <CardProduct  product={_} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
