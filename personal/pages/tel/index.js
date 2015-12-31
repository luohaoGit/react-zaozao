/**
 * Created by lh on 15/12/31.
 */

"use strict";

import React from 'react';
import Page from '../../../component/page/page';
import {Cells, Cell, CellsTitle, Button, ButtonArea} from 'react-weui';

import './index.less';

export default class Tel extends React.Component {

    state = {

    };

    render() {
        return (
            <Page className="cell">
                <Cells className="weui_cells_form">
                    <Cell>
                        <div className="weui_cell_hd"><label className="weui_label">手机号</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input className="weui_input" maxLength="11" type="tel" placeholder="请输入手机号"/>
                        </div>
                    </Cell>
                    <Cell>
                        <div className="weui_cell_hd"><label className="weui_label">验证码</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                            <input className="weui_input" maxLength="6" type="tel" placeholder="请输入验证码"/>
                            <div className="security sec-hidden"></div>
                        </div>
                    </Cell>
                </Cells>
                <ButtonArea>
                    <Button>确定</Button>
                </ButtonArea>
            </Page>
        );
    }
};