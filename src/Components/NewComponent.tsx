import React from "react";

type TopCarsType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    cars: Array<TopCarsType>
}

export const NewComponent: React.FC<NewComponentType> = (props) => {
    return (
        <ul>
            {props.cars.map((car) => {
                return (
                    <table>
                        <tr>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    </table>
                )
            })}
        </ul>
    );
};

