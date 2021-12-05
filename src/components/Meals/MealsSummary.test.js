import { render, screen } from '@testing-library/react';
import MealsSummary from "./MealsSummary";

describe('Meals Summary component', () => {
    test('renders "Delicious Food, Delivered To You" as a text',  () => {

        render(<MealsSummary />);

        const expectedText =  screen.getByText('Delicious Food, Delivered To You');
        expect(expectedText).toBeInTheDocument();
    });
});