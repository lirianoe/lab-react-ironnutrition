import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json'
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Input} from 'antd'
function App() {

  const [foods, setFoods] = useState(foodsData)
  const [filteredFoods, setFilteredFoods] = useState(foodsData)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  const updatedName = event =>{
    setName(event.target.value)
  }
  const updatedImage = event =>{
    setImage(event.target.value)
  }
  const updatedCalories = event =>{
    setCalories(event.target.value)
  }
  const updatedServings = event =>{
    setServings(event.target.value)
  }

  const submitFunction = (event) => {
    event.preventDefault()
    const copyFoodArray = [...foods]
    copyFoodArray.push({name,image,calories,servings})
    setFoods(copyFoodArray)
    setFilteredFoods(copyFoodArray)
    setServings(0)
    setName('')
    setImage('')
    setCalories(0)

  }

  const onChangeFunction = (event) => {
    const newList = foods.filter(singleFood => {
      return (
        singleFood.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setFilteredFoods(newList)
  }

  const deleteFunction = (singleFood) => {
    const newArray = filteredFoods.filter(element => {
      return (
        element.name !== singleFood.name
      )
    })
    setFilteredFoods(newArray)
    setFoods(newArray)
  }

  return (
    <div >
       <AddFoodForm  
       submit={submitFunction}
       
       name={name} image={image} calories={calories} servings={servings} updatedName={updatedName} updatedImage={updatedImage} updatedCalories={updatedCalories} updatedServings={updatedServings} />
       <Search
       
       change={onChangeFunction}/>
       
       <h1>Food List</h1>
       <Row>
      {filteredFoods.map(singleFood => {
        return (
          <div>
            
          <FoodBox food ={singleFood} click={deleteFunction}/>
          
        </div>
         
        )
      })}
     </Row>
    </div>
  );
}

export default App;
