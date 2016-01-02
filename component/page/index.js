
"use strict";

import React from 'react';
import './index.less';

export default React.createClass({
    render: function() {
        const {spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
});