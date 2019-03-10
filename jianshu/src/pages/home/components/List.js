import React, {Component} from 'react';
import {ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {


    render() {
        return (
            <div>
                {
                    this.props.list.map((item) => {
                        return (
                            <ListItem key = {item.get("id")}>
                                <img className="pic" src="//upload-images.jianshu.io/upload_images/4391713-8d14dd7844edbe65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
                                <ListInfo>
                                    <h3 className = "title">20本哲学文学名著中的20个精华名句，多看多受益！</h3>
                                    <p className = "desc">20本哲学、文学名著中的20个精华名句，多看多受益！如果你还能践行，坚持，那恭喜你，你可以出师入世了。 1，你知道应该在什么场合承认自己的渺小吗...</p>
                                </ListInfo>
                            </ListItem>
                        );
                    })
                }
            </div>
        );

    };
}

const mapStateToProps = (state) => ({
    list: state.get("home").get("articleList")
});

export default connect(mapStateToProps, null)(List);