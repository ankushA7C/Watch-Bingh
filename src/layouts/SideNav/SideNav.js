import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function SideNav(props) {
    return (
        <Drawer
            className={props.classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: props.classes.drawerPaper,
            }}
        >
            <div className={props.classes.drawerHeader}>
                <IconButton onClick={props.handleDrawerClose}>
                    {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
        </Drawer>

    );
}
