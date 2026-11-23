require('@testing-library/jest-dom');

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ value: [] }),
  }),
);

jest.mock('react-slick', () => {
  const React = require('react');
  return function MockSlider({ children }) {
    return React.createElement('div', { 'data-testid': 'work-slider' }, children);
  };
});