import { mergeProps } from 'solid-js';
import { Button } from '../../components';
import { AcmeLogo } from '../../assets/images';

export const Header = _props => {
    const props = mergeProps({ user: undefined }, _props);

    return (
        <header>
            <div className='W8D-Header'>
                <div>
                    <AcmeLogo />
                    <h1>Acme</h1>
                </div>
                <div>
                    {props.user ? (
                        <>
                            <span className='W8D-HeaderUserWelcome'>
                                Welcome, <b>{props.user.name}</b>!
                            </span>
                            <Button size="small" onClick={props.onLogout} label="Log out" />
                        </>
                    ) : (
                        <>
                            <Button size="small" onClick={props.onLogin} label="Log in" />
                            <Button primary size="small" onClick={props.onCreateAccount} label="Sign up" />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
