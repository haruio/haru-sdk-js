import React, { addons } from 'react/addons'
import expect from 'expect.js'
import PopularTag from './PopularTag'

const { describe, it } = global
const { TestUtils } = addons

describe('Component: PopularTag', () => {
  it('has PopularTag class', () => {
    const PopularTag = TestUtils.renderIntoDocument(<PopularTag/>)
    const PopularTagNode = React.findDOMNode(PopularTag)
    expect(PopularTagNode.classList.contains('Container')).to.equal(true)
  })
})
