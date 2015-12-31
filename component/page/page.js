
"use strict";

import React from 'react';
import './page.less';

export default class Page extends React.Component {
    render() {
        const {spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};