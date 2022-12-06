import router from '@/router'
interface menuTab {
  [propName: string]: any
}
const menutab: menuTab = {}
/**
 * @description: 选择菜单添加标签
 */
menutab.addPane = (key: string, title:string, local:string, keep: string, localColor:string, panes, activeKey, newTabIndex): void => {
  activeKey.value = `newTab${newTabIndex.value++}`
  panes.value.push({
    local: `${local}`,
    localColor: `${localColor}`,
    title: `${title}`,
    path: key,
    keep: keep,
    key: activeKey.value,
    closable: 'true'
  })
}
/**
 * @description: 打开标签页内容 加载页面
 */
menutab.openContent = (panes, targetKey: string): void => {
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      router.push({
        path: pane.path
      })
      // tabKey.value = pane.path
    }
  })
}
export default menutab
