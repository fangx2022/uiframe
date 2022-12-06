import { defineComponent, reactive, ref, toRefs, VNodeChild } from 'vue'
import { CloseOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import subMenu from '@/views/mainSystem/menu/subMenu.vue'
import router from '@/router'
import menutab from '@/utils/menuTab'
interface MenuInfo {
  key: string;
  title: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}
interface paneInfo{
  local: string,
  localColor: string,
  title: string,
  path: string,
  key: string,
  closable: string
}
window.onload = openHomePage
// ifrema菜单
const iframePath = ref('./sh/index.html')
const visible = ref(0)
// 加载首页默认
function openHomePage () {
  router.push({
    path: '/homePage'
  })
  tabPaneWidth.value = (getTabsWidth(tabOther.value)) / 5
}
// 获取标签页范围起始坐标
function getX () {
  // 响应式设置获取范围的x横向的值、起始值
  const x = ref<number>(0)
  const tabNavAnimatedTransform = ref<string>(null)
  tabNavAnimatedTransform.value = document.defaultView.getComputedStyle(document.getElementsByClassName('ant-tabs-nav ant-tabs-nav-animated')[0], null).transform
  if (tabNavAnimatedTransform.value !== 'none') {
    x.value = parseFloat(tabNavAnimatedTransform.value.substring(7).split(',')[4])
  }
  return x
}
// 获取当前标签页滚动条的宽度
function getTabsWidth (tabsId) {
  return document.getElementById(tabsId).clientWidth
}
// 菜单列表SH
const listSH = [
  {
    key: '/1',
    title: '清算管理',
    icon: require('@/icon/img/menu/qsgl.png'),
    children: [
      {
        key: '/',
        title: '清算管理',
        children: [{ key: './sh/index.html#zhywzdQsgl', title: '清算管理', keep: 'zhywzdQsgl' }]
      }
    ]
  },
  {
    key: '/2',
    title: '交收管理',
    icon: require('@/icon/img/menu/jsgl.png'),
    children: [
      {
        key: '/',
        title: '交收管理',
        children: [{ key: './sh/index.html#zhywzdJsgl', title: '交收管理', keep: 'zhywzdJsgl' }]
      }
    ]
  },
  {
    key: './sh/index.html#zhywzdFxgl',
    title: '风险管理',
    icon: require('@/icon/img/menu/fxgl.png'),
    keep: 'zhywzdFxgl'
  },
  {
    key: '/4',
    title: '证券账户管理',
    icon: require('@/icon/img/menu/zqzhgl.png'),
    children: [
      {
        key: './sh/index.html#zhywzdZqzhgl',
        title: '证券账户管理',
        keep: 'zhywzdZqzhgl'
      }
    ]
  },
  {
    key: '/5',
    title: '证券发行',
    icon: require('@/icon/img/menu/zqfx.png'),
    children: [
      {
        key: './sh/index.html#zhywzdZqfx',
        title: '证券发行',
        keep: 'zhywzdZqfx'
      }
    ]
  },
  {
    key: '/6',
    title: '证券登记',
    icon: require('@/icon/img/menu/zqdj.png'),
    children: [
      {
        key: './sh/index.html#zhywzdZqdj',
        title: '证券登记',
        keep: 'zhywzdZqdj'
      }
    ]
  },
  {
    key: '/7',
    title: '发行人任务',
    icon: require('@/icon/img/menu/fxrfw.png'),
    children: [
      {
        key: './sh/index.html#zhywzdFxrfw',
        title: '发行人任务',
        keep: 'zhywzdFxrfw'
      }
    ]
  },
  {
    key: '/8',
    title: '资金库存2.0',
    icon: require('@/icon/img/menu/zjkc.png'),
    children: [
      {
        key: '/20',
        title: '资金划拨',
        children: [{ key: './sh/index.html#/fund/transfer/entry', title: '资金划拨录入', keep: 'fundTransferEntry' }]
      }
    ]
  },
  {
    key: '/9',
    title: '在线业务受理系统',
    icon: require('@/icon/img/menu/zxywsl.png'),
    children: [
      {
        key: './sh/index.html#zhywzdZxywsl',
        title: '在线业务受理',
        keep: 'zhywzdZxywsl'
      }
    ]
  },
  {
    key: '/10',
    title: '公共服务',
    icon: require('@/icon/img/menu/ggfw.png'),
    children: [
      {
        key: './sh/index.html#zhywzdGgfw',
        title: '公共服务',
        keep: 'zhywzdGgfw'
      }
    ]
  }
]
// 菜单列表北京
const listBJ = [
  {
    key: '/11',
    title: '测试菜单',
    icon: require('@/icon/img/menu/qsgl.png'),
    children: [
      {
        key: '/',
        title: '测试菜单',
        children: [{ key: '/zhywzdCs', title: '测试菜单', keep: 'zhywzdCs' }]
      }
    ]
  }
]
// 菜单列表深圳
const listSZ = [
  {
    key: '/1',
    title: '深圳菜单1',
    icon: require('@/icon/img/menu/qsgl.png'),
    children: [
      {
        key: '/',
        title: '子菜单1',
        children: [{ key: './sz/index.html#/exampleSzOne', title: '子-菜单1', keep: 'exampleSzOne' }]
      }
    ]
  },
  {
    key: '/2',
    title: '深圳菜单2',
    icon: require('@/icon/img/menu/jsgl.png'),
    children: [
      {
        key: '/',
        title: '菜单2',
        children: [{ key: './sz/index.html#/exampleSzTwo', title: '子-菜单2', keep: 'exampleSzTwo' }]
      }
    ]
  }
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// 遍历树形数组寻找相应key下的菜单信息
function recursionFindObj (data: T[], key:string) {
  let result = null
  if (!data) {
    // return; 中断执行
    return
  }
  let i = 0
  const len = data.length
  for (;i < len; i++) {
    // 已经找到了属性值所在的对象就终止循环,以免后面的循环覆盖result,导致出错
    if (result !== null) {
      break
    }
    const item = data[i]
    if (item.key === key) {
      result = item
      break
    } else if (item.children) {
      result = recursionFindObj(item.children, key)
    }
  }
  return result
}
const tabOther = ref('ant-tabs-nav-wrap')
const tabPaneWidth = ref(0)
export default defineComponent({
  components: {
    CloseOutlined,
    subMenu
  },
  setup: function () {
    // 菜单列表
    const list:any = reactive({ data: listSH })
    // 在方法体中的调用方法
    const router = useRouter()
    // 需要缓存的标签页
    // 初始化标签页 只有首页 且类型为不可关闭
    const panes = ref([
      {
        local: '',
        localColor: '',
        title: '首页',
        path: '/homePage',
        key: 'newTab',
        closable: 'false'
      }
    ])
    // 标签页按钮大小
    const size = ref('small')
    // 菜单选中北京上海深圳
    const selectMenuBtn = ref('SH')
    // 当前菜单是北上广 默认是沪
    const local = ref('沪')
    const localColor = ref('localColor-sh')
    // 当前标签页选中的标签
    const activeKey = ref('')
    const newTabIndex = ref(0)
    const panesHidden = ref<paneInfo[]>([])
    const removeTab = (targetKey: string) => {
      let key = ''
      let vis = 0
      // 清除标签
      remove(targetKey)
      key = activeKey.value
      vis = visible.value
      // 重新计算小书本中被隐藏的标签页
      setTimeout(() => {
        refreshHiddenTags()
        activeKey.value = key
        visible.value = vis
      }, 300)
    }
    // 删除标签页
    const remove = (targetKey: string) => {
      let lastIndex = 0
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
          // 删除标签页标签的同时 把缓存清除
          const item = recursionFindObj(list.data, pane.path)
        }
      })
      panes.value = panes.value.filter(pane => pane.key !== targetKey)
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex > 0) {
          visible.value = 1
          iframePath.value = panes.value[lastIndex].path
          activeKey.value = panes.value[lastIndex].key
        } else {
          activeKey.value = panes.value[0].key
          openMain()
        }
      }
    }
    // 打开标签页内容 通过标签页
    const openContent = (targetKey: any) => {
      visible.value = 1
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          iframePath.value = pane.path
        }
      })
    }
    // 打开标签页内容 通过下拉菜单
    const openContentDropdown = ({ key } : MenuInfo) => {
      // 当前标签页选中
      activeKey.value = key
      // 打开标签页内容
      panes.value.forEach((pane, i) => {
        if (pane.key === key) {
          iframePath.value = key
          visible.value = 1
        }
      })
      // 重新计算小书本中被隐藏的标签页
      setTimeout(() => {
        refreshHiddenTags()
      }, 500)
    }

    // 打开首页
    const openMain = () => {
      debugger
      visible.value = 0
      // 路由形式
      router.push({
        path: '/homePage'
      })
      // 重新计算小书本中被隐藏的标签页
      setTimeout(() => {
        refreshHiddenTags()
      }, 500)
    }

    const state = reactive({
      includeList: [],
      selectedKeys: [],
      openKeys: []
    })
    const menuTitle = ref('')
    const menuChildrenTitle = ref('')
    const clickMenuItem = (e:string) => {
      if (menuTitle.value === e) {
        menuTitle.value = ''
        menuChildrenTitle.value = ''
      } else {
        menuTitle.value = e
        menuChildrenTitle.value = ''
      }
    }
    const clickMenuChildrenItem = (e:string) => {
      if (menuChildrenTitle.value === e) {
        menuChildrenTitle.value = ''
      } else {
        menuChildrenTitle.value = e
      }
    }
    // 选择菜单提交
    const handleClick = (e: MenuInfo) => {
      // 添加标签页并打开
      tabClick(e)
      menuTitle.value = ''
      menuChildrenTitle.value = ''
      setTimeout(() => {
        // 刷新隐藏标签页汇总
        refreshHiddenTags()
      }, 1000)
    }
    // 标签页左滑右滑按钮的回调
    const callback = (val: string) => {
      setTimeout(() => {
        // 刷新隐藏标签页汇总
        refreshHiddenTags()
      }, 500)
    }
    const tabClick = (e: MenuInfo) => {
      // 如果当前key已经添加到标签页 则直接打开
      let flag = false
      const item = recursionFindObj(list.data, e.key)
      for (let i = 0; i < panes.value.length; i++) {
        if (panes.value[i].path === e.key && panes.value[i].title === item.title) {
          flag = true
          break
        }
      }
      if (flag) {
        // 如果当前key已经添加到标签页 则直接打开
        panes.value.forEach((pane, i) => {
          if (pane.path === e.key) {
            activeKey.value = pane.key
          }
        })
        iframePath.value = './sh/index.html'
        iframePath.value = e.key
        visible.value = 1
        // 页面组件形式
        // tabKey.value = e.key
      } else {
        // 查找相应key下的title
        if (item.title) {
          // 页面路由形式
          iframePath.value = './sh/index.html'
          iframePath.value = e.key
          visible.value = 1
          // 页面组件形式localColor
          // tabKey.value = e.key
          // 并添加标签页页面并缓存
          menutab.addPane(e.key, item.title, local.value, localColor.value, panes, activeKey, newTabIndex)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          state.includeList.push(item.keep)
        }
        tabOther.value = 'main-header-tab-other-left'
      }
    }
    // 切换菜单
    const changeMenu = (s:string) => {
      if (s === 'BJ') {
        list.data = listBJ
        local.value = '京'
        localColor.value = 'localColor-bj'
        selectMenuBtn.value = 'BJ'
      } else if (s === 'SZ') {
        list.data = listSZ
        local.value = '深'
        localColor.value = 'localColor-sz'
        selectMenuBtn.value = 'SZ'
      } else {
        list.data = listSH
        local.value = '沪'
        localColor.value = 'localColor-sh'
        selectMenuBtn.value = 'SH'
      }
    }
    // 重新计算隐藏标签页的标签内容
    const refreshHiddenTags = () => {
      // 获取标签页的宽度
      const tabsWidth = getTabsWidth(tabOther.value)
      // 重新计算小书本中被隐藏的标签页
      panesHidden.value = []
      const changex = ref<number>(0)
      const x = getX()
      changex.value = changex.value + x.value
      console.log(x.value, changex.value)
      for (let i = 1; i < panes.value.length; i++) {
        if (changex.value + 3 < 0) {
          panesHidden.value.push({
            local: panes.value[i].local,
            localColor: panes.value[i].localColor,
            title: panes.value[i].title,
            path: panes.value[i].path,
            key: panes.value[i].key,
            closable: panes.value[i].closable
          })
          changex.value = changex.value + tabPaneWidth.value
        } else if (changex.value >= 0 && (changex.value + tabPaneWidth.value) <= tabsWidth) {
          changex.value = changex.value + tabPaneWidth.value
        } else if (changex.value + tabPaneWidth.value > tabsWidth) {
          panesHidden.value.push({
            local: panes.value[i].local,
            localColor: panes.value[i].localColor,
            title: panes.value[i].title,
            path: panes.value[i].path,
            key: panes.value[i].key,
            closable: panes.value[i].closable
          })
          changex.value = changex.value + tabPaneWidth.value
        }
      }
    }
    // 当前按钮展开还是收起 true为展开
    const collapsedBtn = ref(true)
    // 菜单布局 id
    const menuWidth = ref('main-menu')
    const mainWidth = ref('main-header-content')
    const btnDivider = ref('btn-divider')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mainMenuLogo = ref(require('@/icon/img/logo/logo1.png'))
    const btnBj = ref<boolean>(true)
    const btnSh = ref<boolean>(true)
    const btnSz = ref<boolean>(true)
    const btnSearch = ref<boolean>(true)
    const collapsed = ref<boolean>(false)
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
      if (collapsedBtn.value === true) {
        collapsedBtn.value = false
        mainWidth.value = 'main-header-content-2'
        menuWidth.value = 'main-menu-2'
        btnDivider.value = 'btn-divider-1'
        if (local.value === '京') {
          btnSh.value = false
          btnSz.value = false
          btnBj.value = true
        } else if (local.value === '沪') {
          btnSh.value = true
          btnSz.value = false
          btnBj.value = false
        } else {
          btnSh.value = false
          btnSz.value = true
          btnBj.value = false
        }
        btnSearch.value = false
        mainMenuLogo.value = require('@/icon/img/logo/PROP-mini.png')
        selectMenuBtn.value = ''
        setTimeout(() => {
          // 刷新隐藏标签页汇总
          tabPaneWidth.value = (getTabsWidth(tabOther.value)) / 6
          refreshHiddenTags()
        }, 1000)
      } else {
        collapsedBtn.value = true
        mainWidth.value = 'main-header-content'
        menuWidth.value = 'main-menu'
        btnDivider.value = 'btn-divider'
        btnSh.value = true
        btnSz.value = true
        btnBj.value = true
        btnSearch.value = true
        if (local.value === '京') {
          selectMenuBtn.value = 'BJ'
        } else if (local.value === '沪') {
          selectMenuBtn.value = 'SH'
        } else {
          selectMenuBtn.value = 'SZ'
        }
        mainMenuLogo.value = require('@/icon/img/logo/logo1.png')
        tabPaneWidth.value = (getTabsWidth(tabOther.value)) / 5
        setTimeout(() => {
          // 刷新隐藏标签页汇总
          tabPaneWidth.value = (getTabsWidth(tabOther.value)) / 5
          refreshHiddenTags()
        }, 1000)
      }
    }
    // 最小化页面
    const minimizeWin = () => {
      window.opener = null
      window.open('about:blank', '_top').close()
    }
    // 关闭页面
    const closeWin = () => {
      window.opener = null
      window.open('about:blank', '_top').close()
    }
    return {
      ...toRefs(state),
      handleClick,
      clickMenuItem,
      clickMenuChildrenItem,
      menuChildrenTitle,
      menuTitle,
      panes,
      activeKey,
      removeTab,
      openMain,
      list,
      changeMenu,
      size,
      // tabKey,
      openContent,
      toggleCollapsed,
      collapsedBtn,
      selectMenuBtn,
      menuWidth,
      mainWidth,
      minimizeWin,
      collapsed,
      btnBj,
      btnSh,
      btnSz,
      btnSearch,
      mainMenuLogo,
      btnDivider,
      DropdownVisible: true, // 选择标签页后不收回菜单
      openContentDropdown,
      tabOther,
      panesHidden,
      callback,
      tabPaneWidth,
      iframePath,
      visible,
      closeWin
    }
  }
})
