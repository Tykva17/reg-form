import "./CardProduct.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardProduct = ({ product: { image, title, price } }) => {
  return (
    <Card sx={{ maxWidth: 200, minWidth:200, maxHeight: 300, minHeight:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {title.length > 80 ? `${title.slice(0, 80)}...`:title}
          </Typography>
          <Typography variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;
