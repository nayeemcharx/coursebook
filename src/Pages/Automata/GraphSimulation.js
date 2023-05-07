import React from 'react'
import {Graphviz} from 'graphviz-react'
const regParser = require('automata.js')

const GraphSimulation = () => {
  const parser = new regParser.RegParser('a*b')
  const nfa = parser.parseToNFA()
  console.log(nfa.toDotScript())
  return (
    <div>
      <Graphviz dot={nfa.toDotScript()} options={{zoom: true}} />
    </div>
  )
}

export default GraphSimulation