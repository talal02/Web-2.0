import React from "react";

const App = () => {

    const myList = [<li key="1">One</li>, <li key="2">Two</li>, <li key="3">Three</li>];
        
    return (
        <>
            <ol>
                {myList}
            </ol>
        </>    
    );
};

export default App;
