import { render, screen } from '@testing-library/react';
import MealItem from "./MealItem";

describe('Meal Item component',  () => {
    test('renders list of items',  async() => {

        render(<MealItem id="m1" price={20.00} amount="2" name="Bubble Tea" />);

        const expectedText =  screen.getByText('bubble tea', {exact: false});
        expect(expectedText).toBeInTheDocument();

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});