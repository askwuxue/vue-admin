export const pageContentConfig = {
  showIndex: true,
  showSelect: true,
  title: '商品中心',
  propsData: [
    { prop: 'name', label: '商品名', minWidth: 100, slotName: 'name' },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: 100,
      slotName: 'oldPrice',
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: 100,
      slotName: 'newPrice',
    },
    { prop: 'imgUrl', label: '商品图片', minWidth: 100, slotName: 'imgUrl' },
    { prop: 'status', label: '状态', minWidth: 100, slotName: 'status' },
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
}
