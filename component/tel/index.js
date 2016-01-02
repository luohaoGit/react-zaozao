/**
 * Created by lh on 15/12/31.
 */

"use strict";

import React from 'react';
import * as actions from '../../action';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Page from '../page/index';
import {Cells, Cell, CellsTitle, Button, ButtonArea} from 'react-weui';

import './index.less';

export const Tel = React.createClass({

    mixins: [PureRenderMixin],

    _onTelChange(e) {
        let val = e.target.value.replace(/[^0-9]*/g,"");
        this.props.setTel(val)
    },

    _onSecChange(e) {
        let val = e.target.value.replace(/[^0-9]*/g,"");
        this.props.setSec(val)
    },

    isDisabled() {
        if(/^(13|14|15|17|18)\d{9}$/.test(this.props.telephone) && this.props.secCode.length == 6){
            return true;
        }
        return false;
    },

    render() {
        return (
            <Page className="cell">
                <Cells className="weui_cells_form">
                    <Cell>
                        <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input value={this.props.telephone}
                                   onChange={this._onTelChange}
                                   className="weui_input"
                                   maxLength="11" type="tel" placeholder="请输入手机号"/>
                        </div>
                    </Cell>
                    <Cell>
                        <div className="weui_cell_hd"><label className="weui_label">验证码</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input value={this.props.secCode}
                                   onChange={this._onSecChange}
                                   className="weui_input"
                                   maxLength="6" type="tel" placeholder="请输入验证码"/>
                            <div className="security sec-hidden"></div>
                        </div>
                    </Cell>
                </Cells>
                <ButtonArea>
                    <Button className={this.isDisabled() ? "" : "weui_btn_disabled"}>确定</Button>
                </ButtonArea>
            </Page>
        );
    }
});

function mapStateToProps(state) {
    return {
        openid: state.getIn(['tel', 'openid']),
        telephone: state.getIn(['tel', 'telephone']),
        secCode: state.getIn(['tel', 'secCode'])
    };
}

export const TelPage = connect(
    mapStateToProps,
    actions
)(Tel);
