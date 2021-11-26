export interface PostProp {
  name: string;
  author: string;
  content: string;
  description?: string;
  post_img: string;
  post_date: string;
  last_date: string;
}

/* eslint-disable @typescript-eslint/no-unsafe-return */
export const columns = [
  {
      name: 'name',
      required: true,
      label: '文章标题',
      align: 'left',
      field: (row) => row.name,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      format: val => `${val}`,
      sortable: true
  },
  {
    name: 'author',
    align: 'left',
    label: '作者',
    field: 'author',
    sortable: true
  },
  {
    name: 'post_date',
    label: '发布时间',
    align: 'left',
    field: 'post_date',
    sortable: true
  },
  {
    name: 'last_date',
    label: '最后修改时间',
    align: 'left',
    field: 'last_date'
  },
  {
    name: 'option',
    label: '操作',
    field: 'option'
  },
]

export const data = [
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
  {
    name: 'Vue指南',
    author: '自己',
    post_date: '2020年10月25日',
    last_date: '2020年10月25日',
    option: '添加'
  },
]
