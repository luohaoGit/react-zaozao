/**
 * Created by lh on 15/12/31.
 */

"use strict";

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from '../../action';
import Page from '../../component/page/index';
import {connect} from 'react-redux';
import {Cells, Cell, CellsTitle, Button, ButtonArea} from 'react-weui';

import './index.less';

export const Car = React.createClass({

    mixins: [PureRenderMixin],

    _onSelectArea(e) {
        this.props.setArea(e.target.value)
    },

    _onSelectLetter(e) {
        this.props.setLetter(e.target.value)
    },

    _onChange(e) {
        let val = e.target.value.replace(/[^A-Za-z0-9]*/g,"").toUpperCase();
        this.props.setCarNumber(val)
    },

    _isValid() {
        return this.props.carNumber.length == 5;
    },

    _submit() {
        if(this._isValid()){
            let carNumber = this.props.area + this.props.letter + this.props.carNumber;
            fetch('/weixin/h5/carnumber.json?carNumber=' + carNumber)
                .then(function(response) {
                    if (response.status >= 400) {
                        alert("Bad response from server");
                    }
                    return response.json();
                })
                .then(function(stories) {
                    console.log(stories);
                });
        }
    },

    render() {
        return (
            <Page className="cell">
                <CellsTitle>请输入您的车牌号</CellsTitle>
                <Cells className="weui_cells_form">
                    <Cell className="weui_cell_select weui_select_before">
                        <div className="weui_cell_hd">
                            <select value={this.props.area} onChange={this._onSelectArea} className="weui_select">
                                {this.props.areas.map(function(v, k) {
                                    return (
                                        <option key={k} value={v}>{v}</option>
                                    )
                                }, this)}
                            </select>
                        </div>
                        <div className="weui_cell_hd">
                            <select value={this.props.letter} onChange={this._onSelectLetter} className="weui_select">
                                {this.props.letters.map(function(v, k) {
                                    return (
                                        <option key={k} value={v}>{v}</option>
                                    )
                                }, this)}
                            </select>
                        </div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input onChange={this._onChange} value={this.props.carNumber} maxLength="5" className="weui_input" autofocus type="text" placeholder="请输入车牌号"/>
                        </div>
                    </Cell>
                </Cells>
                <ButtonArea>
                    <Button onClick={this._submit}
                        className={this._isValid() ? "" : "weui_btn_disabled"}>确定</Button>
                </ButtonArea>
            </Page>
        );
    }
});


function mapStateToProps(state) {
    return {
        valid: state.getIn(['car', 'valid']),
        openid: state.getIn(['car', 'openid']),
        area: state.getIn(['car', 'area']),
        letter: state.getIn(['car', 'letter']),
        carNumber: state.getIn(['car', 'carNumber']),
        areas: state.getIn(['car', 'areas']),
        letters: state.getIn(['car', 'letters'])
    };
}

export const CarPage = connect(
    mapStateToProps,
    actions
)(Car);
