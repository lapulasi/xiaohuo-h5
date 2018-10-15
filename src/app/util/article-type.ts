
export const ArticleType = {
  list: [
    {name: '招聘', value: 'zhaopin'},
    {name: '二手', value: 'ershou'},
    {name: '招租', value: 'zhaozu'},
    {name: '代购', value: 'daigou'},
    {name: '转让', value: 'zhuanrang'}
    ],

  getName: function(val: String) {
    return this.list.filter(p => p.value === val).map(p => p.name)[0];
  }

};
