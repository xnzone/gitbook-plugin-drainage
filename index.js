module.exports = {
  book: {
    assets: './assets',
    css: [
      'footer.css'
    ],
  },
  hooks: {
    'page:before': function(page) {
      var _bg = "https://gitee.com/ixnzone/img-bed/raw/master/wechat.jpg"
          _height = "411"
          _width = "540"
      if(this.options.pluginsConfig['drainage']) {
          _bg = this.options.pluginsConfig['drainage']['image'] || _bg
          _height = this.options.pluginsConfig['drainage']['height'] || _height
          _width = this.options.pluginsConfig['drainage']['width'] || _width
      }
      var str = ' \n\n<footer class="drainage-footer"><div style="margin:auto;height:'+_height+'px;width:'+_width+'px;"><img src="'+_bg+'" /></div></footer>'
      page.content = page.content + str;
      return page;
    }
  },
  filters: {
  }
};
