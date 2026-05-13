const React = require('react')
const favori = require('./favori')
const Favori = favori.default || favori;
require('@testing-library/jest-dom');
const { render, screen, fireEvent, cleanup } = require('@testing-library/react');
const mockAdd = jest.fn();
const mockDelete = jest.fn()



jest.mock('@/features/favoris/api',()=>({
    _esModule:true,
    default:(...args)=>mockAdd(...args),
      DeleteFav: (...args) => mockDelete(...args),
}));

jest.mock('react-icons/ci', () => ({
  CiHeart: (props) => React.createElement('span', Object.assign({ 'data-testid': 'ci-heart' }, props)),
}));
jest.mock('react-icons/fa', () => ({
  FaHeart: (props) => React.createElement('span', Object.assign({ 'data-testid': 'fa-heart' }, props)),
}));
beforeEach(() => {
  mockAdd.mockClear();
  mockDelete.mockClear();
  cleanup();
  // clear jsdom localStorage
  if (global.localStorage && typeof global.localStorage.clear === 'function') {
    global.localStorage.clear();
  }
});
test('renders outlined heart when there is no matching favorite in localStorage', () => {
  // no fav in localStorage
  render(React.createElement(Favori, { idFav: '123', slug: 'slug-a' }));
  expect(screen.getByTestId('ci-heart')).toBeInTheDocument();
});

test('renders filled heart when localStorage contains matching slug', () => {
  global.localStorage.setItem('fav', JSON.stringify([{ slug: 'slug-b' }]));
  render(React.createElement(Favori, { idFav: '123', slug: 'slug-b' }));
  expect(screen.getByTestId('fa-heart')).toBeInTheDocument();
});


