import React from 'react';
import SearchBox from '../../components/SearchBox/index'
import MovieList from '../../components/MovieList/index'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import GetMovie from "../../API/MovieAPI/GetMovie"
import LoaderObject from "../../components/Loader/index"

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
    const [movieCount, setMovieCount] = React.useState([]);
    const [check, setCheck] = React.useState(false);
    const [isLoader, setIsLoader] = React.useState(true);
    const onMessage = (list) => {
        setMovieCount(list);
        setCheck(true);
        setIsLoader(false);
    }
    const classes = useStyles();
    return (
        <>
            <GetMovie callback={onMessage} />
            <SearchBox list={movieCount} check={check} />
            <div className={classes.movieList}>Movie List</div>
            <MovieList list={movieCount} />
            {isLoader && <LoaderObject />}
        </>
    );
}
export default withRouter(Home)