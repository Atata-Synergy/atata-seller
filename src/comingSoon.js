import React from 'react'
import styles from 'styled-components'


function ComingSoon(){
    return(
        <Container>
            <h1> This feature is not available Now! </h1>
            <small>it will be avaible soon, Thanks ❤️❤️❤️</small>
        </Container>

    )

}


const Container = styles.div`
align-content: center;
justify-content: center;
text-align: center;
margin: auto;
padding: 20% 0px;
width: 100%;
`
export default ComingSoon;

