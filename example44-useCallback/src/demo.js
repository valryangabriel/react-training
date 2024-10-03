import React from 'react';

export const MyComponent = props => {
  const [username, setUsername] = React.useState("RyVal");
  const [lastname, setLastname] = React.useState("Gabriel");

  const resetNameCallback = React.useCallback(() => {
    setUsername('');
    setLastname('');
  }, []);


  return (
    <>
      <h3> {username} {lastname} </h3>
      <input value = {username} onChange={e => setUsername(e.target.value)} />
      <input value = {lastname} onChange={e => setLastname(e.target.value)} />

      <ResetValue onReset = {resetNameCallback}> Reset Name </ResetValue>
    </>
  )
}

export const ResetValue = React.memo(props => {
  console.log("Rendered for first time");

  return (
    <button onClick={props.onReset}> Reset Value</button>
  )
})