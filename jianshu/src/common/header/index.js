import React, {Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchInfo,
    SearchInfoTitle,
    SearchWrapper,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    NavSearch,
    Addition,
    Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store/';

class Header extends Component {

    getListArea() {
        const {focused, list} = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map((item) => {
                                return (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                );
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ""}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className="writing">写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(["header", "focused"]),
        list: state.getIn(["header", "list"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);