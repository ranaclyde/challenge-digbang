import { fireEvent, render, screen } from '@testing-library/react'

import ActionButtons from '../components/ActionButtons'
import { beforeEach } from 'vitest'

describe('ActionButtons test', () => {
  beforeEach(() => {
    render(
      <ActionButtons totalAmount={50000} deadline={3} isDisabled={false} />
    )
  })

  test('Should render the ActionButtons component', () => {
    expect(screen.getByText('Obtené crédito')).toBeDefined()
  })

  test('Should not show the CustomModal component at the start', () => {
    expect(screen.queryByText('Detalle de cuotas')).toBeNull()
  })

  test('Should show the CustomModal component when the button is clicked', () => {
    const button = screen.getByText('Ver detalle de cuotas')
    fireEvent.click(button)

    expect(screen.queryByText('Detalle de cuotas')).toBeDefined()
  })
})
