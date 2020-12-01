import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import SearchBox from '../../components/SearchBox/index';
import MovieList from "../../components/MovieList/index"
import Home from "../../Pages/Home/Home"
import View from "../../Pages/View/View"
import Search from "../../Pages/Search/Search"

const hist = createBrowserHistory();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,11,1) 43%, rgba(2,3,33,1) 63%, rgba(170,4,12,1) 100%)',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {

        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(1,1,11,1) 43%, rgba(2,3,33,1) 63%, rgba(170,4,12,1) 100%)',

        width: drawerWidth,
    },
    drawerHeader: {
        background: '#02001d',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        background: '#02001d',
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {

        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    movieList: {
        fontSize: '30px',
        color: 'white',
        height: '60px',
        fontFamily: 'fantasy',
        padding: '15px 0px',

    },
    search: {
        position: 'absolute',
        right: 20,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        minWidth: '300px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        outline: 'none',
        width: '100%',
        border: 'none',
        padding: '8px',
        backgroundColor: 'none',
        background: 'none',
        paddingLeft: '40px'
    }
}));

export default function AppLayout() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const searchCallback = (query) => {
        alert(query);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} searchCallback={searchCallback} />
            <SideNav classes={classes} open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.heading} />

                <BrowserRouter >
                    {/* <Switch> */}
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/view" render={(props) => <View {...props} />} />
                    <Route exact path="/search" render={(props) => <Search {...props} />} />
                    {/* <Redirect to="/admin/dashboard" /> */}
                    {/* </Switch> */}
                </BrowserRouter>
                {/* <SearchBox />
                <div className={classes.movieList}>Movie List</div>
                <MovieList /> */}

            </main>
        </div>
    );
}
