import React, { useState } from 'react'
import './Form.css'

export default function Form() {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [bmi, setBmi] = useState(null);
    const [bmiCatagory, setBmiCatagory] = useState('');
    function heightChangeHandler(e) {
        console.log('height', height);
        setHeight(e.target.value);
    }
    function weightChangeHandler(e) {
        console.log('weight', weight);
        setWeight(e.target.value);
    }
    function Catagory(result) {
        if (result <= 18.5) {
            return 'Underweight';
        } else if (result > 18.5 && result < 25) {
            return 'Normal weight';
        } else if (result >= 25 && result < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
    function displayBmi() {
        let BMI = Number(((weight / height / height) * 10000).toFixed(2));
        setBmi(BMI);
        let status = Catagory(BMI);
        setBmiCatagory(status);
        const container = document.querySelector('.container');
        container.style.display = 'block';
    }
    return (
        <div className="form">
            <form action="#">
                <div className="inputs">
                    <label htmlFor="height">Enter your height in cm:</label>
                    <input type="text" id="height" placeholder="Enter height" onChange={heightChangeHandler} value={height} pattern="[0-9]+" required />
                </div>
                <div className="inputs">
                    <label htmlFor="weight">Enter your weight in kg:</label>
                    <input type="text" id="weight" placeholder="Enter weight" onChange={weightChangeHandler} value={weight} pattern="[0-9]+" required />
                </div>
                <div>
                    <button onClick={displayBmi}>Submit</button>
                </div>
            </form>


            <div className="container">
                <div>Your BMI is {bmi}</div>
                <div>You are: {bmiCatagory}</div>
            </div>
        </div>
    )
}
