import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {HomePage} from './component/home/index';
import {CarPage} from './component/car/index';
import {TelPage} from './component/tel/index';
import immutable from 'immutable';
import 'weui';
import 'isomorphic-fetch'

const d = globalData;
const store = createStore(reducer, immutable.fromJS({
    home: {
        components0: [{
            icon: d.headImgUrl,
            label: ''
        }, {
            label: '早早ID',
            val: d.zzid
        }, {
            label: '我的昵称',
            val: d.wxnickname
        }],
        components1: [{
            label: '我的车牌',
            val: d.cars.length > 0 ? d.cars[0].carNumber : '',
            url: '#car'
        }, {
            label: '我的手机',
            val: d.telephone,
            url: '#tel'
        }],
        components2: [{
            label: '我的移车名片',
            url: '#'
        }]
    },
    car: {
        openid: d.id,
        area: d.cars.length > 0 ? d.cars[0].carNumber.substr(0, 1) : '',
        letter: d.cars.length > 0 ? d.cars[0].carNumber.substr(1, 1) : '',
        carNumber: d.cars.length > 0 ? d.cars[0].carNumber.substr(2, 5) : '',
        areas: ["京", "津", "沪", "渝", "冀", "豫", "云", "辽", "黑", "湘", "皖", "鲁", "新", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "蒙", "陕", "吉", "闽", "贵", "粤", "青", "藏", "川", "宁", "琼"],
        letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    },
    tel: {
        openid: d.id,
        telephone: d.telephone,
        secCode: '',
        secCountDown: 0
    }
}));

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <Route path="/" component={HomePage} />
          <Route path="/car" component={CarPage} />
          <Route path="/tel" component={TelPage} />
      </Router>
  </Provider>,
  document.getElementById('app')
);
