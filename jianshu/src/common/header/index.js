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
        const {focused, list, page, totalPage, mouseIn, handleChangePage, handleMouseEnter, handleMouseLeave} = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {
                            handleChangePage(page, totalPage)
                        }}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, list, handleInputFocus, handleInputBlur} = this.props;
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
                                onFocus={() => handleInputFocus(list)}
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
        list: state.getIn(["header", "list"]),
        page: state.getIn(["header", "page"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        totalPage: state.getIn(["header", "totalPage"])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size == 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.pageChange(page + 1));
            } else {
                dispatch(actionCreators.pageChange(1));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);