import { expect, userEvent, within } from 'storybook/test';

import { Page } from './Page';

const meta = {
    title: 'Example/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

export const LoggedOut = {};

export const LoggedIn = {
    play: async ({ canvas, step }) => {

        await step('Login button clicked', async () => {
            const loginButton = canvas.getByRole('button', { name: /log in/i });

            await expect(loginButton).toBeInTheDocument();
            await userEvent.click(loginButton);
            await expect(loginButton).not.toBeInTheDocument();

            const logoutButton = canvas.getByRole('button', { name: /log out/i });

            await expect(logoutButton).toBeInTheDocument();
        });

        await step('Logout button clicked', async () => {
            const logoutButton = canvas.getByRole('button', { name: /log out/i });

            await expect(logoutButton).toBeInTheDocument();
            await userEvent.click(logoutButton);
            await expect(logoutButton).not.toBeInTheDocument();

            const loginButton = canvas.getByRole('button', { name: /log in/i });

            await expect(loginButton).toBeInTheDocument();
        });

        await step('Sign up button clicked', async () => {
            const signupButton = canvas.getByRole('button', { name: /sign up/i });

            await expect(signupButton).toBeInTheDocument();
            await userEvent.click(signupButton);
            await expect(signupButton).not.toBeInTheDocument();

            const logoutButton = canvas.getByRole('button', { name: /log out/i });

            await expect(logoutButton).toBeInTheDocument();
        });

    },
};
