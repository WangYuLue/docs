const feed_options = {
  canonical_base: 'https://wangyulue.com',
};

module.exports = [
  ['feed', feed_options],
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs')
        return dayjs(timestamp).format('YYYY-MM-DD')
      }
    }
  ],
];