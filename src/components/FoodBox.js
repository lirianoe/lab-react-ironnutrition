




import { Card, Col, Button, Row} from 'antd';

// Iteration 2
function FoodBox(props) {
  return (
    <Row>
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>Total Calories: <span>{props.food.calories} * {props.food.servings}</span> </b> kcal
        </p>
        <Button onClick={() => {props.click(props.food)}}  type="primary"> Delete </Button>
      </Card>
    </Col>
    </Row>
  );
}

export default FoodBox;
