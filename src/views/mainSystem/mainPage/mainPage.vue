<template>
  <div id="main" class="cf">
    <div :class="menuWidth">
      <div class="main-divider poabsolute-h50" @click="toggleCollapsed">
        <img v-if="collapsedBtn" src="@/icon/img/menu/hide.png" class="dis width100" />
        <img v-else src="@/icon/img/menu/un-H.png" class="dis width100" />
      </div>
      <img v-bind:src="mainMenuLogo" class="dis width100">
      <div class="padding5_10 tcenter bgfff cf">
        <div :class="btnDivider" class="area_25" v-if="btnBj">
          <div @click="changeMenu('BJ')">
            <img src="@/icon/img/menu/menu-j.png" class="btn-size">
          </div>
          <img v-if="selectMenuBtn === 'BJ'" src="@/icon/img/main/agv.png" class="dis width40 marginauto" />
        </div>
        <div :class="btnDivider" class="area_25" v-if="btnSh">
          <div @click="changeMenu('SH')">
            <img src="@/icon/img/menu/menu-h.png" class="btn-size">
          </div>
          <img v-if="selectMenuBtn === 'SH'" src="@/icon/img/main/agv.png" class="dis width40 marginauto" />
        </div>
        <div :class="btnDivider" class="area_25" v-if="btnSz">
          <div @click="changeMenu('SZ')">
            <img src="@/icon/img/menu/menu-s.png" class="btn-size">
          </div>
          <img v-if="selectMenuBtn === 'SZ'" src="@/icon/img/main/agv.png" class="dis width40 marginauto" />
        </div>
        <div class="area_25" v-if="btnSearch">
          <img src="@/icon/img/main/search.png" class="btn-size" />
        </div>
      </div>
      <div class="menu">
        <!-- <a-menu mode="vertical" :inline-collapsed="collapsed" v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys" @click="handleClick">
          <template v-for="item in list.data">
            <template v-if="!item.children">
              <a-menu-item :key="item.key" :title="item.title">
                <template #icon>
                  <img v-bind:src="item.icon" class="menu-icon" />
                </template>
                {{ item.title }}
              </a-menu-item>
            </template>
            <template v-else>
              <sub-menu :menu-info="item" :key="item.key" :title="item.title" />
            </template>
          </template>
        </a-menu> -->
        <ul>
          <li class="positionRelative" v-for="item in list.data" :key="item.key" :title="item.title">
            <div class="menu-item">
              <div @click="handleClick(item)" class="disflex">
                <img v-bind:src="item.icon" class="menu-icon" />
                <span class="menu-item-title menu-first">{{ item.title }}</span>
              </div>
              <div class="icon_menuleft" @click="clickMenuItem(item.key)">
                <i v-show="item.children" class="ant-menu-submenu-arrow menu-first"></i>
              </div>
            </div>
            <ul :class="item.key == menuTitle ? 'dis' : 'undis'">
              <li class="menu-child" v-for="childerItem in item.children" :key="childerItem.key"
                :title="childerItem.title">
                <div class="menu-childitem">
                  <div @click="handleClick(childerItem)">
                    <span class="menu-item-title">{{ childerItem.title }}</span>
                  </div>
                  <div class="icon_menuleft" @click="clickMenuChildrenItem(childerItem.key)">
                    <i v-show="childerItem.children" class="ant-menu-submenu-arrow"></i>
                  </div>
                </div>
                <ul :class="childerItem.key == menuChildrenTitle ? 'dis' : 'undis'">
                  <li class="menu-threechild" v-for="childerThreeItem in childerItem.children"
                    :key="childerThreeItem.key" :title="childerThreeItem.title">
                    <div class="menu-childitem" @click="handleClick(childerThreeItem)">
                      <span class="menu-item-title">{{ childerThreeItem.title }}</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div :id="mainWidth">
      <div class="main-header">
        <div class="main-header-tabs">
          <div id="main-header-tab-first">
            <div class="main-header-tab-pane" @Click="openMain">首 页</div>
          </div>
          <div id="main-header-tab-other">
            <div :id="tabOther">
              <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @prevClick="callback"
                @nextClick="callback" @tabClick="openContent">
                <a-tab-pane v-for="pane in panes.filter(item => item.title !== '首页')" :key="pane.key"
                  :closable="pane.closable">
                  <template #tab>
                    <div class="main-header-tab-pane-edit" :style="'width:' + tabPaneWidth + 'px'">
                      <div class="m-pe-item">
                        <a-font class="padding0_5 localColor localColor-sh" v-if="pane.localColor === 'localColor-sh'">
                          {{ pane.local }}</a-font>
                        <a-font class="padding0_5 localColor localColor-bj" v-if="pane.localColor === 'localColor-bj'">
                          {{ pane.local }}</a-font>
                        <a-font class="padding0_5 localColor localColor-sz" v-if="pane.localColor === 'localColor-sz'">
                          {{ pane.local }}</a-font>
                        <p class="pe-i-text">{{ pane.title }}</p>
                        <img src="@/icon/img/main/tab-c.png" @click="removeTab(pane.key)" class="icon_close" />
                      </div>
                    </div>
                  </template>
                </a-tab-pane>
              </a-tabs>
            </div>
             <div class="main-header-tab-switch">
                <a-dropdown :trigger="['click']" placement="bottomCenter" v-model="DropdownVisible">
                  <template #overlay>
                    <a-menu class="margintop5" @click="openContentDropdown">
                      <a-menu-item v-for="pane in panesHidden.filter(item => item.title !== '首页')" :key="pane.key">
                        <img src="@/icon/img/main/tab-1.png" />{{ pane.title }}
                        <CloseOutlined @click="removeTab(pane.key)" class="icon_mclose" />
                      </a-menu-item>
                    </a-menu>
                  </template>
                  <img src="@/icon/img/main/tab-1.png" class="dis" />
                </a-dropdown>
              </div>
          </div>
        </div>
        <div class="main-header-right">
          <div class="main-header-right-content">
            <img src="@/icon/img/main/user.png" class="dis main-manager" />
            <p class="h6 colorfff mian-r-text">管理员Q54900***</p>
            <div class="positionRelative cursor-pointer">
              <img src="@/icon/img/main/user-2.png" class="dis main-notice" />
              <span class="main-notice-type">5</span>
            </div>
            <img src="@/icon/img/main/user-1.png" class="dis main-lock" />
          </div>
          <div class="main-header-right-min-close">
            <img src="@/icon/img/main/m.png" @click="minimizeWin" class="dis area_45" />
            <img src="@/icon/img/main/c.png" @click="closeWin" class="dis area_45 fright" />
          </div>
        </div>
      </div>
      <div class="bgf5f5f5 cf">
        <div class="padding20 cf" v-show="visible === 0">
          <router-view v-slot="{ Component }">
            <keep-alive :include="includeList">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
        <div v-show="visible === 1">
          <iframe
            v-for="item in panes.filter(item => item.title !== '首页')"
            :key="item.key"
            v-show="iframePath === item.path"
            :src="item.path"
            style="width: 100%; height: 100vh"
            frameborder="0"
            ref="item.keep"
            :id="item.keep"
            ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./mainPage.ts">
</script>
<style src="./mainPage.css" scoped>
</style>
