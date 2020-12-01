import React from 'react';
import SearchBox from '../../components/SearchBox/index'
import MovieList from '../../components/MovieList/index'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
    movieList: {
        fontSize: '30px',
        color: 'white',
        height: '60px',
        fontFamily: 'fantasy',
        padding: '15px 0px',

    }
}));

function Home(props) {
    const classes = useStyles();
    return (
        <>
            <SearchBox />
            <div className={classes.movieList}>Movie List</div>
            <MovieList />
        </>
    );
}
export default withRouter(Home)