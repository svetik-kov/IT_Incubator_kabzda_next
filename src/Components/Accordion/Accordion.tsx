import React from "react";
type AccordionPropsType={
    titleValue:string
    collapsed:boolean
    callBack:(collapsed:boolean)=>void
}
function Accordion(props:AccordionPropsType) {

    return(
        <div>
            <AccordionTitle title={props.titleValue} callBack={()=>props.callBack(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )



}
type AccordionTitlePropsType={
    title:string
    callBack:()=>void
}
function AccordionTitle(props:AccordionTitlePropsType) {
    return <h3 onClick={props.callBack}>{props.title}</h3>
}

function AccordionBody() {
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}

export default Accordion