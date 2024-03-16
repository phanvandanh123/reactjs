import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b>Chuyên khoa</b></div>
                                <div className='sub-title'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ sở y tế</b></div>
                                <div className='sub-title'>Chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Bác sĩ</b></div>
                                <div className='sub-title'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className='sub-title'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='sub-language'>
                                <i className="fas fa-question-circle">Hỗ trợ</i>
                            </div>
                            <div className='language'>VN</div>
                        </div>
                    </div>
                </div>
                <div className='home-banner'>
                    <div className='tile-content'>
                        <div className='title1'>NỀN TẢNG Y TẾ</div>
                        <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
                    </div>
                    <div className='search'>
                        <i class="fas fa-search"></i>
                        <input type='text' placeholder='Tìm chuyên khoa khám bệnh' />
                    </div>
                    <div className='option'>
                        <div className=''>
                            <i className="fas fa-home"></i>
                            <div>Khám Chuyên Khoa</div>
                        </div>
                        <div className=''>
                            <i className="fas fa-mobile-alt"></i>
                            <div>Khám Từ Xa</div>
                        </div>
                        <div className=''>
                            <i className="fas fa-hospital"></i>
                            <div>Khám Tổng Quát</div>
                        </div>
                        <div className=''>
                            <i className="fas fa-hospital"></i>
                            <div>Khám Tổng Quát</div>
                        </div>
                        <div className=''>
                            <i className="fas fa-hospital"></i>
                            <div>Khám Tổng Quát</div>
                        </div>
                        <div className=''>
                            <i className="fas fa-hospital"></i>
                            <div>Khám Tổng Quát</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
