import React from 'react';
import './App.css';
import {useGitDetails} from "./store";


export const Left= (): React.JSX.Element => {
    const {token, addToken} = useGitDetails();


    return (
        <>
            <div className="Left">{token}</div>
            <button onClick={
                () => addToken("New Tokens")
            }>Click Me
            </button>
        </>

    );
}

export const Right = (): React.JSX.Element => {
    const {token} = useGitDetails();

    return (
        <div className="Right">{token}</div>
    );
}


export const App = (): React.JSX.Element => {
    return (
        <>
            <Left/> | <Right/>
      </>
  );
}

