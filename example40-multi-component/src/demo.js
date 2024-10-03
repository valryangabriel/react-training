import React from 'react';

export const MyComponent = (props) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <>
            {visible && <MyChildComponent />}

            <button onClick = {() => setVisible(!visible)}>
                Toggle Child Component Display
            </button>

        </>
    )

    const MyChildComponent = () => {
        const [userInfo, setUserInfo] = React.useState({
            console.log("Called when component is mounted");

            return ( => console.log("Called on component unmounted"));
        });

        return (
            <>
                <h4> {userInfo.name} {userInfo.lastName} </h4>
                <input value={user.userInfo.name}
                    onChange={(e) => {
                        ...userInfo,
                        name : e.target.value
                    }}} />

                <input value={user.userInfo.name}
                onChange={(e) => {
                    ...userInfo,
                    name : e.target.value
                }}} />
            </>
        )
    }
}