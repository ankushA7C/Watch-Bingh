import React, { useEffect } from 'react';
import "./style.css"


export default function Search(props) {
    useEffect(() => {
        console.log("Search:", props);

    }, [])

    return (
        <>
            Search Pageeeeeee
        </>
    );
}
