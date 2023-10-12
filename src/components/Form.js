import { useState } from 'react'
import "./Form.css"
import axios from 'axios';

import TextAreaInput from "./inputs/TextAreaInput"
import TextInput from './inputs/TextInput';
import IMGInput from './inputs/IMGInput';
import FilterInput from "./inputs/FilterInput"
import MoneyTypeInput from "./inputs/MoneyTypeInput"
import NumInfoInput from './inputs/NumInfoInput';

const backLink = "http://localhost:5000/"

const Form = () => {

	const [form, setForm] = useState({
		title: "",
    subTitle: "",
    sell: "",
    rent: "",
    squareImg: [],
    mainIMG: [],
		iconMapIMG: [],
    filterTag: ["All"],
    cost: [
      {
        img: `${backLink}src/iconBitCoin.svg`,
        value: false,
      },
      {
        img: `${backLink}src/iconTonCoin.svg`,
        value: false,
      },
      {
        img: `${backLink}src/iconEfirCoin.svg`,
        value: false,
      },
      {
        img: `${backLink}src/iconDHCoin.png`,
        value: false,
      },
      {
        img: `${backLink}src/iconBCoin.png`,
        value: false,
      },
    ],
    infoNumber:[
      {
        text:"",
        Num: "",
      },
    ],
    tag: [
      '',
      ''
    ], 
    textInfo:[
      ""
    ],
    linkInfo: "#",
		compInfo: [
      {
        title: "",
        text: ""
      },
      {
        title: "",
        text: ""
      } 
    ],
  }
	)

	const postObj = () => {
		const { title, subTitle, sell, rent, link, img, squareImg, mainIMG, filterTag, compInfo, cost, infoNumber, iconMapIMG, tag, textInfo, linkInfo,} = form
		axios.post(backLink, {title, subTitle, sell, rent, link, img, squareImg, mainIMG, filterTag, compInfo, cost, infoNumber, iconMapIMG, tag, textInfo, linkInfo})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	const postPhoto = (file) => {
    const data = new FormData();
    data.append('file', file);
    axios.post(`${backLink}post-photo`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

	const saveForm = () => {
		console.log(form)
		postObj()
	}

	const setValueForm = (value, name) => {
		console.log(form)
		form[name] = value
	}

  const changeFile = (event, Name) => {
		const files = event.target.files
		const arr = []
		for(let i = 0; i< files.length; i++){
			arr.push( `${backLink}uploads/`+files[i].name)
			postPhoto(files[i])
		}
		setValueForm(arr, Name)
  }

  const handleButtonClick = (value) => {
    const newArray = [...form.filterTag];
    const index = newArray.indexOf(value);
    if (index !== -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(value);
    }
    setForm({
      ...form,
      filterTag: newArray
    });
  };

	return ( 
		<div>
			<TextInput inputDescription={"Title"} setInputValue={(value)=>setValueForm(value, "title")}/>
			<TextInput inputDescription={"Address"} setInputValue={(value)=>setValueForm(value, "subTitle")}/>
			<TextInput inputDescription={"How many cost for sell"} setInputValue={(value)=>setValueForm(value, "sell")}/>
			<TextInput inputDescription={"How many cost for rent"} setInputValue={(value)=>setValueForm(value, "rent")}/>
			<IMGInput inputDescription={"mainIMG"} inputMultiple changeEvent={(event)=>changeFile(event, "mainIMG")} />
			<IMGInput inputDescription={"squareImg"} inputMultiple changeEvent={(event)=>changeFile(event, "squareImg")} />
			<IMGInput inputDescription={"iconMapIMG"} inputMultiple={false} changeEvent={(event)=>changeFile(event, "iconMapIMG")} />
			<FilterInput inputDescription={"filterTag"} handleButtonClick={(value)=>handleButtonClick(value)} form={form}/>
			<MoneyTypeInput inputDescription={"Cost money"} form={form} />
      <TextAreaInput inputDescription={"Description"} setInputValue={(value)=>setValueForm(value, "textInfo")}/>
      <NumInfoInput/>
			<button onClick={saveForm}>Save</button>
		</div>
	);
}
 
export default Form;