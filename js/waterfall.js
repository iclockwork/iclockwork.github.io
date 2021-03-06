/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function () {

    /**
     * 内容JSON
     */
    var demoContent = [
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/50x.html',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/50x.gif',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/50x.html',
            title: '欢迎',
            core_tech: 'Html',
            description: '第一个示例，没什么东西。'
        },
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/rfocus-jxt/index.html#g=1&c=1&p=index-v3',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/rfocus-jxt/images/notice-add-text-ueditor/u4404.png',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/rfocus-jxt/index.html#g=1&c=1&p=index-v3',
            title: 'rfocus系统家校通模块的后台',
            core_tech: 'Axure',
            description: 'rfocus系统家校通模块的后台'
        },
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/rfocus-jxt/index.html#g=1&p=home_2&c=1',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/rfocus-jxt/images/wechat_1/u6156.png',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/rfocus-jxt/index.html#g=1&p=home_2&c=1',
            title: 'rfocus系统家校通模块的微信端',
            core_tech: 'Axure',
            description: 'rfocus系统家校通模块的微信端'
        },
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/wx-console/index.html',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/wx-console/images/index/u94.png',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/wx-console/index.html',
            title: '微信管理控制台',
            core_tech: 'Axure',
            description: '微信管理控制台，也没什么东西。'
        },
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/Tutami/index.html#g=1&p=home&c=1',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/Tutami/images/dashboard/u1015.png',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/Tutami/index.html#g=1&p=home&c=1',
            title: 'Tutami',
            core_tech: 'Axure',
            description: '美式学习方法，不止SAT/ACT高分技巧。'
        },
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/Tutami-v2-report/index.html#g=1&p=mobile&c=1',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/Tutami-v2-report/images/wechat/u963.png',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/Tutami-v2-report/index.html#g=1&p=mobile&c=1',
            title: 'Tutami-Report',
            core_tech: 'Axure',
            description: '美式学习方法，不止SAT/ACT高分技巧。'
        },
        {
            demo_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/WeAx/index.html',
            img_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/WeAx/images/index/u0.png',
            code_link: 'https://demo-show.oss-cn-hangzhou.aliyuncs.com/axure/WeAx/index.html',
            title: 'WeAX',
            core_tech: 'Axure',
            description: 'WeAx 是WeUI的高保真Axure元件库, 目标是帮助产品设计人员轻松, 快速的为用户提供与最终产品一致的视觉体验和交互体验, 降低因沟通导致的损失, 并加速开发。'
        }
    ];

    contentInit(demoContent); //内容初始化
    waitImgsLoad(); //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
    // var htmlArr = [];
    // for (var i = 0; i < content.length; i++) {
    //     htmlArr.push('<div class="grid-item">')
    //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
    //     htmlArr.push('<img src="'+content[i].img_link+'">')
    //     htmlArr.push('</a>')
    //     htmlArr.push('<h3 class="demo-title">')
    //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
    //     htmlArr.push('</h3>')
    //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
    //     htmlArr.push('<p>'+content[i].description)
    //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
    //     htmlArr.push('</p>')
    //     htmlArr.push('</div>')
    // }
    // var htmlStr = htmlArr.join('')
    var htmlStr = '';
    for (var i = 0; i < content.length; i++) {
        htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>';
    }
    var grid = document.querySelector('.grid');
    grid.insertAdjacentHTML('afterbegin', htmlStr);
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img');
    var totalImgs = imgs.length;
    var count = 0;
    //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function () {
                // alert('onload')
                count++;
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid();
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid();
    }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20
    });
}
