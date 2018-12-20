import React from 'react';
import styles from './RoomChat.scss';
import classNames from 'classnames/bind';

const cx=classNames.bind(styles);

const RoomChat = () => {
    return (
		<div className={cx('chat-wrapper')}> 
			<div className={cx('countdown')}>
				경매 완료까지 00:00:00 남았습니다
			</div>
			<div className={cx('chat-wrapper2')}>
				<div className={cx('product')}>
					<div className={cx('product-picture')}>
					클릭하면 사진 확대 및 넘겨보기 가능
					</div>
					<div className={cx('product-info')}>
						<div className={cx('product-prop')}>
							거래유형<br/>
							원하는 거래 위치 <br/>
							원하는 제품 상태<br/>
							거래 희망 금액
						</div>
						<div className={cx('product-val')}>
							택배/직거래<br/>
							서울 서대문구<br/>
							새것같은 중고<br/>
							10000원
						</div>
					</div>
				</div>
				<div className={cx('pick')}>
					<div className={cx('pick-title')}>
						구매자가 PICK한 거래 조건
					</div>
					<div className={cx('pick-info')}>
						아직 선택하지 않았어요!
											
					</div>
					<div className={cx('pick-decision')}>
						<div className={cx('final-select')}>
							낙찰하기
						</div>
						<div className={cx('giveup')}>
							경매 포기하기
						</div>
					</div>
				</div>
				<div className={cx('chat')}>
					<div className={cx('product-name')}>
						삽니다 > '멘큐의 경제학 7판' 경매 거래방
						<div className={cx('user-max')}> 7
						</div>
					</div>
					<div className={cx('contents')}>
						<div className={cx('notice')}>
							<div className={cx('notice-comment')}>
							채팅방 관련 공지
							</div>
						</div>
					</div>
					<div className={cx('icons')}>
						<img src="" className={cx('reset-money-icon')}/>
						<img src="" className={cx('comment-icon')}/>
						<img src="" className={cx('picture-icon')}/>
					</div>
					<div className={cx('input')}>
						<input type="text" placeholder="   채팅 내용을 입력해 주세요" className={cx('comment-input')}/>
						<div className={cx('send')}>
							send
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default RoomChat;