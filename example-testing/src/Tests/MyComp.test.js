import { render, fireEvent} from '@testing-library/react';
import MyComp from '../Components/MyComp';

test('Writes Output in MyComp component', () => {
    const wrapper = render(<MyComp />);
    const {getByLabelText, getByText} = wrapper;
    const input = getByLabelText("Username");
    fireEvent.change(input, {target: {value: 'CesarEncinas90873'}});
    fireEvent.click(getByText('Display Username'));
    expect(getByText('CesarEncinas90873')).toBeInTheDocument();
});


