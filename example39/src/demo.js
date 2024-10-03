import React from 'react';

export const MyComponent = (props) => {
    const [myName, setUsername] = React.useState("");

    React.useState(() => {
        setTimeout(() => {
            setUsername("Gabriel");
        }, 3500)
    }, []);

    return (
        <>
             <h4>
                {myName}
             </h4>
             <input value={myName}
             onChange = {(e) => setUsername(e.target.value)} />
        </>
    )
}