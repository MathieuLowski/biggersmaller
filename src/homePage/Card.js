import { useState } from "react"
import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardText, Button, Row, Col, Input } from "reactstrap"

const GameCard = () => {

  const [firstNumber, setFirsNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const [thirdumber, setThirdumber] = useState(null)

  const [biggestNumber, setBiggestNumber] = useState(null)
  const [smallestNumber, setSmallestNUmber] = useState(null)

  const numbers = []
  numbers.push(firstNumber, secondNumber, thirdumber)

  const highestNumber = Math.max(...numbers)
  const lowestNumber = Math.min(...numbers)

  const biggestChecker = () => {
    setBiggestNumber(highestNumber)
  }

  const lowestChecker = () => {
    setSmallestNUmber(lowestNumber)
  }

    return(
    <>
      <Card className="my-2 w-75 p-3" style={{ width: '18rem' }}>
        <CardHeader>
          Let's pick Bigger or Smaller
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            Please input your numbers below:
          </CardTitle>
          <CardText>
            <Row>
              <Col >
                <Input value={firstNumber} className="" placeholder="1st Number" onChange={e => {setFirsNumber(e.target.value)}} />
              </Col>
              <Col>
                <Input className="" placeholder="2nd Number" onChange={e => {setSecondNumber(e.target.value)}} />
              </Col>
              <Col>
                <Input
                placeholder="3rd Number"
                onChange={(e) => {setThirdumber(e.target.value)}} />
              </Col>
            </Row>
          </CardText>
        </CardBody>
        <Row className="p-4">
          <Col>
            <Button onClick={() => biggestChecker()} >
              Pick Bigger Number
            </Button>
          </Col>
            <Col>
            <Button onClick={() => {lowestChecker()}} >
              Pick Lower Number
            </Button>
          </Col>
        </Row>
        <CardFooter>
          <Row>
            <Col><h2>Highest: {biggestNumber}</h2></Col>
            <Col><h2>Lowest: {smallestNumber}</h2></Col>
          </Row>
        </CardFooter>
      </Card>
    </>)
}

export default GameCard
