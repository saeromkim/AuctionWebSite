import React from 'react';
import styles from './RoomList.scss';
import classNames from 'classnames/bind';
import 'semantic-ui-css/semantic.min.css';

const cx = classNames.bind(styles);

const RoomList = () => (
  <roomlist className={cx('roomlist')}>
    <div className={cx('title')}>실시간 인기 거래방</div>
    <div className={cx('button')}>
      <button class="medium ui right floated black basic button">방 만들기</button>
    </div>
  </roomlist>
);


export default RoomList;