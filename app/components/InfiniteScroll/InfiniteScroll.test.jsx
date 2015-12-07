import React, { addons } from 'react/addons'
import expect from 'expect.js'
import List from './List'

const { describe, it } = global
const { TestUtils } = addons

describe('Component: List', () => {
  it('has List class', () => {
    const List = TestUtils.renderIntoDocument(<List/>)
    const helloNode = React.findDOMNode(List)
    expect(helloNode.classList.contains('Container')).to.equal(true)
  })


})
