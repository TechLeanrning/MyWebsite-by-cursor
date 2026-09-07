// AI 服务数据
// price 为预留字段：留空时页面统一展示「价格详询」并引导微信咨询，
// 后续确定定价后直接填入（如 '¥500 起'）即可上线，无需改动组件。
export const services = [
  {
    id: 'weknora-deploy',
    icon: 'fas fa-server',
    name: 'WeKnora 私有部署',
    tagline: '把 AI 知识库部署到你自己的机器上，数据不出门',
    featured: true,
    description:
      '基于 WeKnora 开源知识库框架，为中小企业与个人提供一站式私有化部署：' +
      '从环境搭建、模型接入到微信问答渠道，交付即可日常使用。' +
      'Windows / Linux 双平台交付物均已实测验证，流程标准化，最快 1 周内交付。',
    highlights: [
      '数据全程留在客户自己的服务器，不出私域',
      '支持微信直接提问，秒级响应（实测 0.7 秒）',
      '交付附使用与备份说明，接手即用'
    ],
    tiers: [
      { name: '基础版', desc: '完成部署并跑通：知识库创建、文档导入、模型接入、问答验证' },
      { name: '标准版', desc: '基础版之上：绑定域名 + HTTPS 证书 + 反向代理，可对外安全访问' },
      { name: '旗舰版', desc: '标准版之上：接入微信问答渠道，团队在微信里直接向知识库提问' }
    ],
    delivery: '1 周内交付',
    price: ''
  },
  {
    id: 'maintenance',
    icon: 'fas fa-screwdriver-wrench',
    name: '年度维护订阅',
    tagline: '部署只是开始，长期稳定运行才是目的',
    featured: false,
    description:
      '面向部署客户的长期保障：系统升级、故障排查、备份巡检，' +
      'AI 辅助运维让响应更快、成本更低。服务范围在订阅时白纸黑字写清，边界明确、无隐形收费。',
    highlights: [
      '版本升级跟进：知识库与模型网关的安全更新',
      '故障排查：远程诊断与恢复，响应时效明确',
      '定期备份巡检：数据可恢复性定期检查',
      '服务范围书面约定，超出范围透明报价'
    ],
    tiers: [],
    delivery: '',
    price: ''
  },
  {
    id: 'lite',
    icon: 'fas fa-box-open',
    name: 'Lite 单机版',
    tagline: '双击即用的个人知识库',
    featured: false,
    badge: '实验性预览',
    description:
      '把私有知识库装进一台 Windows 电脑：开箱即用的单机交付物，' +
      '适合想要「自己电脑上的私人知识库」的个人用户。' +
      '当前为实验性预览版本，注册等部分功能受限，购买含一次远程协助安装。',
    highlights: [
      '双击即用，无需命令行与 Docker 知识',
      '含一次远程协助，装到能用为止',
      '实验性预览：注册等部分功能受限，介意勿拍'
    ],
    tiers: [],
    delivery: '',
    price: ''
  }
]

// 统一的价格展示：预留字段为空时显示「价格详询」
export function priceLabel(service) {
  return service.price || '价格详询'
}
