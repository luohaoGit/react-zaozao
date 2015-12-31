/**
 * Created by lh on 15/12/31.
 */

"use strict";

import React from 'react';
import Page from '../../../component/page/page';
import {Cells, Cell, CellsTitle, Button, ButtonArea} from 'react-weui';
import {msg} from 'iflux';

let appStore = require('../../store');

import './index.less';

export default class Car extends React.Component {

    state = appStore.data().get("car")

    _onSelect = () => {

    }

    _onChange = (e) => {
        msg.emit('carChange', e.target.value)
    }

    render() {
        return (
            <Page className="cell">
                <CellsTitle>请输入您的车牌号</CellsTitle>
                <Cells className="weui_cells_form">
                    <Cell className="weui_cell_select weui_select_before">
                        <div className="weui_cell_hd">
                            <select value={this.state.get("area")} onChange={this._onSelect()} className="weui_select">
                                {this.state.get("areas").map(function(v, k) {
                                    return (
                                        <option key={k} value={v}>{v}</option>
                                    )
                                }, this).toList().toJS()}
                            </select>
                        </div>
                        <div className="weui_cell_hd">
                            <select  value={this.state.get("letter")} onChange={this._onSelect()} className="weui_select">
                                {this.state.get("letters").map(function(v, k) {
                                    return (
                                        <option key={k} value={v}>{v}</option>
                                    )
                                }, this).toList().toJS()}
                            </select>
                        </div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input onChange={this._onChange} value={this.state.get("carNumber")} maxLength="5" className="weui_input" autofocus type="text" placeholder="请输入车牌号"/>
                        </div>
                    </Cell>
                </Cells>
                <ButtonArea>
                    <Button className={this.state.get("valid") ? "" : "weui_btn_disabled"}>确定</Button>
                </ButtonArea>
            </Page>
        );
    }
};