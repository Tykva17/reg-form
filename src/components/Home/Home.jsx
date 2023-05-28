import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import "./Home.css";
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} xl={2}>
        <Menu></Menu>
      </Grid>
      <Grid item xs={9} xl={10}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default Home;
