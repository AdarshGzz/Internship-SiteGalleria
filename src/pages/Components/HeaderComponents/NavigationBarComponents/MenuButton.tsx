import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiChevronDown } from 'react-icons/fi'

interface Props{
    title: string;
    items: string[];
}

const MenuButton = ({ title, items }:Props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-demo-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="text"
                size='large'
                // color="primary"
                onClick={handleClick}
                sx={
                    { color: '#ffffff', typography: 'subtitle2' }
                }
            >
                {title}<FiChevronDown />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="basic-demo-button"
            >
                {
                    items.map((item) =>(
                        (<MenuItem onClick={handleClose} >{item}</MenuItem>)
                    ))
                }
            </Menu>
        </div>
    );
};


export default MenuButton;