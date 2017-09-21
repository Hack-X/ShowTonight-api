import path from "path";

export default {
  extname: '.hbs',
  layoutsDir: path.resolve('./src/views/layouts'),
  defaultLayout: 'main',
  helpers: {
    list: (items, options) => {
      let out = '';
      for(let i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i]);
      }
      return out;
    },
    selected: (foo, bar) => {
      console.log('foo', foo, 'bar', bar);
      return foo == bar ? ' selected' : ' ';
    }
  }
};