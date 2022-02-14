import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import About from './index'

describe('About', function () {
  it('should display "About page" with just jest', function () {
    let container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
      ReactDOM.render(<About />, container)
    })
    const header = container.querySelector('h1')
    expect(header?.textContent).toBe('About page')
  })

  it('should display "About page" with testing in library', function () {
    const { container } = render(<About />)
    const header = container.querySelector('h1')
    expect(header).toHaveTextContent('About page')
  })
})
