import { render, screen } from '@testing-library/react'

import FlatFee from '../components/FlatFee'

describe('FlatFee test', () => {
  test('Should render the FlatFee component', () => {
    render(<FlatFee isError={false} price={5000} />)

    expect(screen.getByText('Cuota fija por mes')).toBeDefined()
  })

  test('Should show "$ ---" when isError is true', () => {
    render(<FlatFee isError={true} price={5000} />)

    expect(screen.getByText('$ ---')).toBeDefined()
  })
})
