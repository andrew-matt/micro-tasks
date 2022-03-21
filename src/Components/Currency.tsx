import React, {useState} from "react";

export const Currency = () => {

    type FilterType = 'both' | 'dollars' | 'rubles'

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('both')

    let currentMoney = money;
    if (filter === "dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Dollars");
    } else if (filter === "rubles") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === "Rubles");
    }

    const onClickFilterHandler = (currencyType: FilterType) => {
        setFilter(currencyType);
    }

    return (
        <>
            <ul>
                {currentMoney.map((objectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span> {objectFromMoneyArray.banknotes}</span>
                            <span> {objectFromMoneyArray.value}</span>
                            <span> {objectFromMoneyArray.number}</span>
                        </li>
                    )
                })}

            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler("both")}>Both</button>
                <button onClick={() => onClickFilterHandler("dollars")}>Dollars</button>
                <button onClick={() => onClickFilterHandler("rubles")}>Rubles</button>
            </div>
        </>
    )
}