import React from 'react';

export const MyComponent = props => {
    const [filter, setFilter ] = React.useState("");

    const [userCollection, setUserCollection ] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/user?name_like=${filter}`)
        .then(response => response.json())
        .then(json => setUserCollection(json));
    }, [filter]);

    return (
        <div>
            <input value = {filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {userCollection.map((user, index) => (
                    <li key={index}> {user.name} </li>
                ))}
            </ul>
        </div>
    )
}