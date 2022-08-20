import React, {useState} from 'react';


type OnOffPropsType = {
    onChange:(on:boolean)=>void
}
export const UnControlledOnOff = (props: OnOffPropsType) => {
    let [on,setOn]=useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor:on?'green':'white'

    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor:on?'white':'red'
    }
    const indicatorStyle = {
        width: '10px',//ширина
        height: '10px',//высота
        borderRadius: '50%',//радиус
        border: '1px solid black',// граница
        display: 'inline-block',//выстраивание в линию
        marginLeft: '5px',//отступ слева
        padding: '2px',//внутренние отступы
        backgroundColor:on?'green':'red'//цвет

    }


    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked }>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

