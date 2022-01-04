export const pageContentConfig = {
  showIndex: false,
  showSelect: false,
  title: '菜单列表',
  propsData: [
    { prop: 'name', label: '用户名', minWidth: 100 },
    {
      prop: 'url',
      label: '地址',
      minWidth: 100,
    },
    {
      prop: 'icon',
      label: '图标',
      minWidth: 100,
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 100,
      slotName: 'createAt',
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: 100,
      slotName: 'updateAt',
    },
    {
      label: '操作',
      minWidth: 200,
      slotName: 'handler',
    },
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children',
    },
  },
  showFooter: false,
}
