import * as React from 'react';
import ThisSlider from "./ThisSlider";

export class Header extends React.Component {

        render() {
            return (
                <header>
                    <div className="header-wrap">
                        <figure>
                            <img src="/images/title.png" alt="Substitute This!" />
                        </figure>
                        <div>
                            <ThisSlider />
                        </div>
                    </div>
                </header>
            );
        }
}

export default Header;