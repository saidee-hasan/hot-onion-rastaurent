import "./Product.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = (props) => {
  const { title, doller, images } = props.product;
  console.log(props);

  return (
    <Card className="product" sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {
          title
         }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">$ {doller}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
