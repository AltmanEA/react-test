
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Button from '../../src/components/Button';

describe('Button Component', () => {
    beforeEach(cleanup)
    it('renders the button with the correct label', () => {
        render(<Button label="Click Me" onClick={() => { }} />);
        expect(screen.getByText('Click Me')).toBeDefined();
    });

    it('calls the onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(2);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(3);
    });
});