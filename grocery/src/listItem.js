import React from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';




function MyList({ products, onProductSelect }) {

    return (
        <List>
            {
                products.map((product, i) => {
                    return (
                        <ListItem key={i}>
                          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onProductSelect(product)}> 
                          <AddShoppingCartIcon /></IconButton>
                            {product.name}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default MyList;