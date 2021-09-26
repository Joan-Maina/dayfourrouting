 import React, { useState, useEffect } from "react";
 import axios from 'axios';
 import '../App.css';
import { useSelector } from "react-redux";

function AboutUs() {

    // string, array, null, '', undefined, number, boolean
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(({ data }) => setPosts(data))
            .catch(({ message }) => console.log(message))
    }

    // componentDidMount
    // useEffect(callback(), [])

    // componentDidUpdate
    // useEffect(callback(), [put in something here])

    // componentWillUnmount
    // uses a cleanup function

    useEffect(() => {

        const unsubscribe = getPosts();
        return unsubscribe;

    }, [setPosts])

    console.log('Outside useEffect');
    
    return(
        <ul>
            <li>Joan Maina</li>
        </ul>
    )
}

export default AboutUs;