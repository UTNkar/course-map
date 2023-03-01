import {useRef} from "react"
import { StraightLine, LineL } from "react-drawline"
import Card from '@mui/material/Card'

const Grid = (body) => {
    // inside the component...
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)

  return (
    <div>
        <StraightLine
        startingElement={{
            ref: box1Ref,
            x: "right",
            y: "mid",
        }}
        endingElement={{
            ref: box2Ref,
            x: "center",
            y: "top",
        }}
        style={{backgroundColor: "red"}}
        className="beautiful-class-name"
        />

        <LineL
        startingElement={{
            ref: box1Ref,
            x: "center",
            y: "bottom",
        }}
        endingElement={{
            ref: box2Ref,
            x: "left",
            y: "mid",
        }}
        shape="upsidedownL"
        color="green"
        thickness={5}
        />

        {/* components/elements to be draw line to connect */}
        <Card sx={{ minWidth: 275 }} ref={box1Ref} style={{float: 'left', margin: '200px'}}>KURS</Card>
        <Card sx={{ minWidth: 275 }} ref={box2Ref} style={{float: 'right'}}>KUUURS</Card>
    </div>
  )
}

export default Grid