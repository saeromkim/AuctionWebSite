import React from 'react';
import styles from './RoomList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const RoomList = () => (
  <RoomList className={cx('RoomList')}>
    <div className={cx('title')}>실시간 인기 거래방</div>
    <button class="medium ui black basic button">방 만들기</button>
  </RoomList>
);


export default RoomList;