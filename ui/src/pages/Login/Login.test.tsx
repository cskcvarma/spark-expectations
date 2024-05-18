import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@test-utils';
import { LoginPage } from './Login';
import { useAuthStore } from '@/store';

describe('LoginPage', () => {
  it('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByText('Token')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('submits the form and sets token', async () => {
    render(<LoginPage />);
    const tokenInput = screen.getByRole('textbox', { name: 'Token' });
    const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(tokenInput, {
      target: { value: '12345' },
    });
    fireEvent.click(loginButton);

    await vi.waitFor(() => {
      // Access the mocked store directly from the import
      const { setToken, setUserName } = useAuthStore();
      expect(setToken).toHaveBeenCalledWith('12345');
      expect(setUserName).toHaveBeenCalledWith('test-user');
    });
  });
});
