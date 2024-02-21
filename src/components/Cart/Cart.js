
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Toast } from "bootstrap";

const Cart = (props) => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: "0 4px",
        },
      }));
      const cart =props.cart;
      const totalPrice =cart.reduce((total,prd)=> total+ prd.doller * prd.quantity,0)
    return (
        <div>
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
            <h4>Total Price :  ${totalPrice}</h4>
        </div>
    );
};

export default Cart;