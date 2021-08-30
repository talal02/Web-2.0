import React, { useState, useEffect } from 'react';
import Greeter from './Greeter';



const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    const handleButtonCLicked = () => {
        setLoaded(true);
    }

    

    useEffect(() => {
        if(!loaded) {
            setTimeout(() => setLoaded(true), 3000);
        }
    }, [loaded]);
    

    if(!loaded) {
        return(
            <>
                <h1>Website Loading...</h1>
                <button onClick={handleButtonCLicked}>Click Me</button>
            </>
        );
    }

    return (
        <>
            <Greeter name="Talal" phrase="Hello There"/>
            <Greeter name="Ahmed" phrase="Hiya"/>
            <Greeter name="Ali" phrase="How are you"/>
            <input value={username} onChange={e => setUsername(e.target.value)}/>
            <p>You are logging in as: {username}</p>
        </>
    );
}

export default App;