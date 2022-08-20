import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnnOff/OnOff";
import UnControlledAccordion from "./Components/Accordion/UnControlledAccordion";

import {UnControlledOnOff} from "./Components/OnnOff/UnControlledOnOff";
import {UnControlledRating} from "./Components/Rating/UnControlledRating";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCallapsed, setaccordionCallapsed] = useState(true)
  let [swichOn, setswichOn] = useState(false)
  return (
      <div className="App">

        <OnOff on={swichOn} onchange={ setswichOn}/>



        <PageTitle title={'This is APP components'}/>
        <PageTitle title={'My friends'}/>
        Article 1

        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Accordion titleValue={"Menu"} collapsed={accordionCallapsed} callBack={setaccordionCallapsed}/>

        <UnControlledAccordion titleValue={"Menu"}/>

        Article 2
        <UnControlledRating/>

        <UnControlledOnOff onChange={ setswichOn}/> {swichOn.toString()}
      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {

  return (
      <div><h1>{props.title}</h1></div>
  )

}


export default App;
