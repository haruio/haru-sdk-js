import React, { addons } from 'react/addons'
import expect from 'expect.js'
import Banner from './Banner'

const { describe, it } = global
const { TestUtils } = addons

describe('Component: Container', () => {
  it('has hello class', () => {
    const Banner = TestUtils.renderIntoDocument(<Banner/>)
    const helloNode = React.findDOMNode(Banner)
    expect(helloNode.classList.contains('Container')).to.equal(true)
  })


})
