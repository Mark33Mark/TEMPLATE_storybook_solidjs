import { createSignal, Show } from 'solid-js';
import { Header } from '../Header';
import { TasksDashboard } from '../TasksDashboard';
import { ViewportSymbol } from '../../assets/images';

export const Page = () => {
    const [user, setUser] = createSignal(undefined);

    return (
        <article className="W8D-Page">
            <Header
                user={user()}
                onLogin={() => setUser({ name: 'Jane Doe' })}
                onLogout={() => setUser(undefined)}
                onCreateAccount={() => setUser({ name: 'Jane Doe' })}
            />

            <section className="W8D-PageSection">
                <h2>Pages in Storybook</h2>
                <p>
                    Recommended to build UIs with a{' '}
                    <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
                        <strong>component-driven</strong>
                    </a>{' '}
                    process, starting with atomic components and ending with pages.
                </p>
                <p>
                    Render pages with mock data, this will simplify build and review page states without needing to
                    navigate to them in your app.
                </p>
                <p>Some handy patterns for managing page data in Storybook:</p>
                <ul>
                    <li>
                        Use a higher-level connected component, Storybook helps you compose data from the "args" of
                        child component stories
                    </li>
                    <li>
                        Assemble data in the page component from your services. You can mock these services out using
                        Storybook.
                    </li>
                </ul>
                <p>
                    Get a guided tutorial on component-driven development at{' '}
                    <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
                        <strong>Storybook tutorials</strong>
                    </a>
                    . Read more in the{' '}
                    <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
                        <strong>docs</strong>
                    </a>
                    .
                </p>
                <div className="W8D-PageTipWrapper">
                    <p className="W8D-PageTip">
                        <span className="W8D-PageTip_badge">Tip</span> adjust the width of the canvas with the
                        <ViewportSymbol className="W8D-PageViewportLogo" />
                        Viewports addon in the toolbar
                    </p>
                </div>
            </section>
            <Show when={user()}>
                <section className="W8D-PageSection">
                    <TasksDashboard />
                </section>
            </Show>
        </article>
    );
};
