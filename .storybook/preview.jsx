import '../src/styles'; // you only have to import the style sheets with global settings
// as I'm not importing styles into each component, I'm importing
// all styles here.



const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
