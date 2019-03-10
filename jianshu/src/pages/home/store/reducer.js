import {fromJS} from "immutable";

const defaultState = fromJS({
    topicList : [
        {
            id: 1,
            title: "社会热点"
        },
        {
            id: 2,
            title: "手绘"
        }
    ],
    articleList: [
        {
            id: 1,
            title: "20本哲学文学名著中的20个精华名句，多看多受益！",
            desc: "20本哲学、文学名著中的20个精华名句，多看多受益！如果你还能践行，坚持，那恭喜你，你可以出师入世了。 1，你知道应该在什么场合承认自己的渺小吗...",
            imgUrl: "//upload-images.jianshu.io/upload_images/4391713-8d14dd7844edbe65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id: 2,
            title: "20本哲学文学名著中的20个精华名句，多看多受益！",
            desc: "20本哲学、文学名著中的20个精华名句，多看多受益！如果你还能践行，坚持，那恭喜你，你可以出师入世了。 1，你知道应该在什么场合承认自己的渺小吗...",
            imgUrl: "//upload-images.jianshu.io/upload_images/4391713-8d14dd7844edbe65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id: 3,
            title: "20本哲学文学名著中的20个精华名句，多看多受益！",
            desc: "20本哲学、文学名著中的20个精华名句，多看多受益！如果你还能践行，坚持，那恭喜你，你可以出师入世了。 1，你知道应该在什么场合承认自己的渺小吗...",
            imgUrl: "//upload-images.jianshu.io/upload_images/4391713-8d14dd7844edbe65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        },
        {
            id: 4,
            title: "20本哲学文学名著中的20个精华名句，多看多受益！",
            desc: "20本哲学、文学名著中的20个精华名句，多看多受益！如果你还能践行，坚持，那恭喜你，你可以出师入世了。 1，你知道应该在什么场合承认自己的渺小吗...",
            imgUrl: "//upload-images.jianshu.io/upload_images/4391713-8d14dd7844edbe65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
        },
        {
            id: 2,
            imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png"
        }
    ]
});

export default (state = defaultState, action) => {
    return state;
};