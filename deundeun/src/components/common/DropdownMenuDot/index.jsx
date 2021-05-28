import { IconButton, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
const DropdownMenuDot = ({ options, selectedIndex, setSelectedIndex }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const onClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onClickMenuItem = (event, index) => {
        if (index === 'backdropClick') {
            setAnchorEl(null);
        } else {
            setSelectedIndex(index);
        }
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;
    return (
        <>
            <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={onClickMenu}>
                <BsThreeDots />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={onClickMenuItem}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch'
                    }
                }}
            >
                {options.map((option, index) => (
                    <MenuItem key={option} selected={index === selectedIndex} onClick={(event) => onClickMenuItem(event, index)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default DropdownMenuDot;
