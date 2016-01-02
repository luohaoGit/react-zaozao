/**
 * Created by lh on 15/12/31.
 */

"use strict";

import React from 'react';
import * as actions from '../../action';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Page from '../page/index';
import {Cells, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';

import './index.less';

export const Home = React.createClass({

    mixins: [PureRenderMixin],

    _renderItem(components) {
        return (components.map(function(v, k) {
            let component = v.toJS()
            let header = ''
            let footer = <div>{component.val}</div>
            if(component.icon){
                header = <img className="icon_nav" src={component.icon} alt=""/>
            }

            if(component.url){
                footer = <CellFooter>{component.val}</CellFooter>
            }
            return (
                <Cell key={k} className="global_navs" href={component.url} >
                    <CellHeader>
                        {header}
                    </CellHeader>
                    <CellBody>{component.label}</CellBody>
                    {footer}
                </Cell>
            );
        }, this))
    },

    render() {
        return (
            <Page className="home">
                <Cells access>
                    {
                        this._renderItem(this.props.components0)
                    }
                </Cells>
                <Cells access>
                    {
                        this._renderItem(this.props.components1)
                    }
                </Cells>
                <Cells access>
                    {
                        this._renderItem(this.props.components2)
                    }
                </Cells>
            </Page>
        );
    }
});

function mapStateToProps(state) {
    return {
        components0: state.getIn(['home', 'components0']),
        components1: state.getIn(['home', 'components1']),
        components2: state.getIn(['home', 'components2'])
    };
}

export const HomePage = connect(
    mapStateToProps,
    actions
)(Home);
