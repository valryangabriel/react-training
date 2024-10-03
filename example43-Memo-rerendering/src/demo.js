import React from 'react';

export const MyComponent = props => {
  const [userInfo, setUserInfo] = React.useState({
    name : "Val",
    lastname : "Gabriel"
  });

  return (
    <>
      <DisplayUsername name = {userInfo.name} lastName = {userInfo.lastname}/>
      <input value={userInfo.name} onChange={(e) => setUserInfo({
        ...userInfo,
        name : e.target.value
      })} />
      
      <input value={userInfo.lastname} onChange={(e) => setUserInfo({
        ...userInfo,
        lastname : e.target.value
      })} />
    </>
  )
}

export const DisplayUsername = React.memo(props => {
  console.log("Update the name then this method will be called")
  return <h3> {props.name} {props.lastName}</h3>
})