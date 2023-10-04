import text from '../data/text'
import t from './t'
import '@testing-library/jest-dom/extend-expect'

// Mock lodash.get and lodash.forEach since they are external dependencies
jest.mock('lodash.get', () => jest.fn())
jest.mock('lodash.foreach', () => jest.fn())

// Mock text object from '../data/text'
jest.mock('../data/text', () => ({
  greeting: 'Hello, :0!',
}))

describe('t function', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    jest.clearAllMocks()
  })

  it('should return localized text with substituted arguments', () => {
    const result = t('greeting', ['World'])
    expect(result).toBe('Hello, World!')
  })

  it('should return default value when key is missing', () => {
    const result = t('missing', [], 'Default')
    expect(result).toBe('Default')
  })

  it('should return text without substitution when args is not provided', () => {
    const result = t('greeting')
    expect(result).toBe('Hello, :0!')
  })

  it('should return text without substitution when args is null', () => {
    const result = t('greeting', null)
    expect(result).toBe('Hello, :0!')
  })

  it('should return an empty string when text key and default value are missing', () => {
    const result = t('missing')
    expect(result).toBe('')
  })

  it('should call lodash.get with the correct arguments', () => {
    t('greeting', ['World'])
    expect(require('lodash.get')).toHaveBeenCalledWith(
      text,
      'greeting',
      undefined,
    )
  })

  it('should call lodash.foreach with the correct arguments when args is provided', () => {
    t('greeting', ['World'])
    expect(require('lodash.foreach')).toHaveBeenCalledWith(
      ['World'],
      expect.any(Function),
    )
  })
})
