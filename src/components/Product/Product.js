import "./Product.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { title, doller, images,key } = props.product;
  // console.log(props);

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
          Food
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Link to={'/product/'+ key}> {
          title
         }</Link>
        </Typography>
      </CardContent>
      <CardActions className="pd-btn">
        <Button size="small">$ {doller}</Button>
     { props.showaddToCart  && <button 
         onClick={()=>props.handleAddProduct(props.product)
         }>  
        <FontAwesomeIcon icon={faShoppingCart} />
        add to cart 
        
        </button>}
      </CardActions>
    </Card>
  );
};

export default Product;
