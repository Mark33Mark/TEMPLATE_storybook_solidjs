import { fn, expect, userEvent } from 'storybook/test';
import { Button } from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered' /* https://storybook.js.org/docs/configure/story-layout */,
    },

    tags: ['autodocs'] /* https://storybook.js.org/docs/writing-docs/autodocs */,

    argTypes: {
        backgroundColor: { control: 'color' } /* https://storybook.js.org/docs/api/argtypes */,
    },

    args: { onClick: fn() } /*  use `fn()` to spy on the onClick arg.  Will appear in the actions 
                                    panel once invoked: 
                                    https://storybook.js.org/docs/essentials/actions#action-args 
                                */,
};
export default meta;

export const Primary = {
    args: {
        size: 'medium',
        primary: true,
        active: true,
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        size: 'medium',
        primary: false,
        label: 'Button',
    },
};

export const Disabled = {
    args: {
        size: 'medium',
        primary: false,
        active: false,
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        primary: false,
        active: true,
        label: 'Button',
    },
};

export const Medium = {
    args: {
        size: 'medium',
        primary: false,
        active: true,
        label: 'Button',
    },
    play: async ({ canvas, userEvent, step }) => {
        await step('User tabs for focus on button', async () => {
            let button = await canvas.getByRole('button', { name: /Button/i });

            await userEvent.click(button);
            await expect(button).toBeInTheDocument();

            await userEvent.tab();
            await userEvent.tab({ shift: true });

            await expect(button).toHaveFocus();
        });
    },
};

export const Large = {
    args: {
        size: 'large',
        primary: false,
        active: true,
        label: 'Button',
    },
};

// Renders all sizes in one window
export const AllSizes = {
    render: args => (
        <div>
            <div
                style={{
                    padding: '2rem',
                    display: 'flex',
                    gap: '1.5rem',
                    'align-items': 'center',
                    'background-color': 'gray',
                }}
            >
                <Button {...args} size="small" primary={true} />
                <Button {...args} size="medium" primary={true} />
                <Button {...args} size="large" primary={true} />
            </div>
            <div
                style={{
                    padding: '2rem',
                    display: 'flex',
                    gap: '1.5rem',
                    'margin-top': '2rem',
                    'align-items': 'center',
                    'background-color': 'gray',
                }}
            >
                <Button {...args} size="small" primary={false} />
                <Button {...args} size="medium" primary={false} />
                <Button {...args} size="large" primary={false} />
            </div>
        </div>
    ),
    args: {
        label: 'Button',
        primary: true,
    },
    play: async ({ canvas, userEvent, step }) => {
        await step('User presses tab key to have focus on selected button', async () => {
            const button = await canvas.getAllByRole('button', { name: /Button/i })[0];

            await userEvent.click(button);
            await expect(button).toBeInTheDocument();

            await userEvent.tab();
            await userEvent.tab({ shift: true });

            await expect(button).toHaveFocus();
        });
    },
};

// Renders all sizes with focus on all in one window
export const AllSizesFocusVisibleState = {
    render: args => (
        <div>
            <div
                style={{
                    display: 'flex',
                    gap: '1.5rem',
                    'align-items': 'center',
                    'background-color': 'gray',
                    padding: '2rem',
                }}
            >
                <Button {...args} size="small" primary={true} />
                <Button {...args} size="medium" primary={true} />
                <Button {...args} size="large" primary={true} />
            </div>
            <div
                style={{
                    padding: '2rem',
                    display: 'flex',
                    gap: '1.5rem',
                    'margin-top': '2rem',
                    'align-items': 'center',
                    'background-color': 'gray',
                }}
            >
                <Button {...args} size="small" primary={false} />
                <Button {...args} size="medium" primary={false} />
                <Button {...args} size="large" primary={false} />
            </div>
        </div>
    ),
    args: {
        label: 'Button',
        'data-focus-visible': true,
    },
};
