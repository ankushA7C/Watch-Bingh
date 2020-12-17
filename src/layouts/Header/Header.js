import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

export default function Header(props) {
    const [search, setSearch] = React.useState('');
    const onChange = (event) => {
        setSearch(event.target.value);
    }
    const keyPress = (e) => {
        if (e.key == "Enter") {
            props.searchCallback(search)
        }
    }
    return (
        <AppBar
            position="fixed"
            className={clsx(props.classes.appBar, {
                [props.classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(props.classes.menuButton, props.open && props.classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    <a href="/Watch-Bingh"> Bing Watch</a>
                </Typography>
                <div className={props.classes.search}>
                    <div className={props.classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <input
                        className={props.classes.searchInput}
                        placeholder='Search…'
                        name='Search'
                        onChange={onChange}
                        value={search}
                        onKeyPress={keyPress}
                    />
                </div>
            </Toolbar>

        </AppBar>

    );
}
