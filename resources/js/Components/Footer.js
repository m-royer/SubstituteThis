import * as React from 'react';

export class Footer extends React.Component {

        render() {
            return (
                <footer>
                    <svg id="footerFlair" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path id="footPath1" d="M0 0 L50 100 L100 0 Z" />
                        <path id="footPath2" d="M50 100 L0 40 L0 0 Z" />
                    </svg>
                    <p>&copy; 2020 Substitute This!</p>
                </footer>
            );
        }
}

export default Footer;