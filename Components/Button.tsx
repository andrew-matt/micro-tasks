import React from "react";

type ButtonType = {
    name: string
    callback: () => void
}

export const Button: React.FC<ButtonType> = (props) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}