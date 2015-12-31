/**
 * Created by lh on 15/12/31.
 */

"use strict";

import React from 'react';
import {Link} from 'react-router';
import Page from '../../../component/page/page';
import {Cells, Cell, CellHeader, CellBody, CellFooter} from 'react-weui';

let appStore = require('../../store');

import './index.less';

export default class Home extends React.Component {

    state = appStore.data().get("home")

    _renderItem(components) {
        return (components.toSeq().map(function(v, k) {
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
        }, this).toList().toJS())
    }

    render() {
        return (
            <Page className="home">
                <Cells access>
                    {
                        this._renderItem(this.state.get("components0"))
                    }
                </Cells>
                <Cells access>
                    {
                        this._renderItem(this.state.get("components1"))
                    }
                </Cells>
                <Cells access>
                    {
                        this._renderItem(this.state.get("components2"))
                    }
                </Cells>
            </Page>
        );
    }
};