import { render } from '@testing-library/react';
import Button from '../Components/Button';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
      .create(<Button label="Click Me"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders Button Component', () => {
    const wrapper = render(<Button label="Click Me"/>);
    const {getByTestId} = wrapper;
    expect(getByTestId('button-component').textContent).toBe("Click Me")
});

