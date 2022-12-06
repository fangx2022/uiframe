<template>
  <div class="content-left">
    <div class="bgfff cf block-padding marginbottom30">
      <div class="cl-title">
        <p class="h5">我的常用菜单</p>
        <img src="@/icon/img/main/setting.png" class="dis cursor-pointer" />
      </div>
      <!-- bj -->
      <div class="bgfaf4f4 margintop20">
        <img src="@/icon/img/main/J.png" class="dis icon_city">
      </div>
      <div class="paddingtop20 row5 cf">
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">股权激励期权初始登记</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">公司债兑付兑息业务办理</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">清算结果查询</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">股权激励期权初始登记</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">公司债兑付兑息业务办理</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">清算结果查询</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">股权激励期权初始登记</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">公司债兑付兑息业务办理</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">清算结果查询</div>
        </div>
      </div>
      <!-- sh -->
      <div class="bgfcf6f0 margintop20">
        <img src="@/icon/img/main/H.png" class="dis icon_city">
      </div>
      <div class="paddingtop20 row5 cf">
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">预约划款录入</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">B股资金划拨录入</div>
        </div>
      </div>
      <!-- sz -->
      <div class="bgf0f8fc margintop20">
        <img src="@/icon/img/main/S.png" class="dis icon_city">
      </div>
      <div class="paddingtop20 row5 cf">
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">当日日终股份查询</div>
        </div>
        <div class="area_20 padding5">
          <div class="content-menu-item com-rows_1 h6">红利派发申报</div>
        </div>
      </div>
    </div>
    <div class="bgfff cf block-padding marginbottom30">
      <div class="cl-title">
        <p class="h5">历史记录</p>
        <img src="@/icon/img/main/setting.png" class="dis cursor-pointer" />
      </div>
      <div class="margintop20">
        <div class="content-history-title colorc467ff">京</div>
        <div class="content-history-box cf">
          <div class="area_20 padding5">
            <div class="content-menu-item positionRelative">
              <p class="com-rows_1 h6">当日日终股份查询</p>
              <i class="icon_hc"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="margintop20">
        <div class="content-history-title colorf87b00">沪</div>
        <div class="content-history-box cf">
          <div class="area_20 padding5">
            <div class="content-menu-item positionRelative">
              <p class="com-rows_1 h6">当日日终股份查询</p>
              <i class="icon_hc"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="margintop20">
        <div class="content-history-title color12a2e5">深</div>
        <div class="content-history-box cf">
          <div class="area_20 padding5">
            <div class="content-menu-item positionRelative">
              <p class="com-rows_1 h6">当日日终股份查询</p>
              <i class="icon_hc"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content-right">
    <div class="content-right-date">
      <div class="h5">
        {{ nowDateYmd }}{{ nowDateWeek }}
      </div>
      <div class="h5">
        {{ nowDateTime }}{{ nowDateHmd }}
      </div>
    </div>
    <div class="content-right-info">
      <div class="cl-title">
        <p class="h5">连接信息</p>
      </div>
      <div class="link-infor cf paddingtop10">
        <img src="@/icon/img/main/ljxx.png" class="dis">
        <div class="link-infor-box cf">
          <div class="area_33 padding5">
            <div class="content-menu-item">北京 <i class="icon_point pointbf0000"></i></div>
          </div>
          <div class="area_33 padding5">
            <div class="content-menu-item">上海 <i class="icon_point point43cb7d"></i></div>
          </div>
          <div class="area_33 padding5">
            <div class="content-menu-item">深圳 <i class="icon_point pointbf0000"></i></div>
          </div>
        </div>
      </div>
      <div class="line-ebebeb margintop10 marginbottom10"></div>
      <div class="cl-title">
        <p class="h5">用户信息</p>
      </div>
      <div class="paddingtop10">
        <div class="user-infor">
          <img src="@/icon/img/main/user.png" class="dis">
          <p class="h5 paddingleft5">管理员Q54900***</p>
        </div>
        <div class="h6 paddingtop5 cf row5">
          <div class="area_25 padding5">
            <div class="user-infor-set">修改密码</div>
          </div>
          <div class="area_25 padding5">
            <div class="user-infor-set">权限设置</div>
          </div>
          <div class="area_25 padding5">
            <div class="user-infor-set">配色选择</div>
          </div>
        </div>
      </div>
      <div class="line-ebebeb margintop10 marginbottom10"></div>
      <div class="cl-title">
        <p class="h5">软件信息</p>
        <span class="opacity0_5 h6">软件版本: 202120.2.1.5v</span>
      </div>
      <div class="paddingtop5 cf row5">
        <div class="area_33 padding5">
          <div class="version-infor">
            <img src="../../../icon/img/main/J.png" class="dis marginauto">
            <p>业务版本</p>
            <p>211225.01.2v</p>
          </div>
        </div>
        <div class="area_33 padding5">
          <div class="version-infor">
            <img src="../../../icon/img/main/H.png" class="dis marginauto">
            <p>业务版本</p>
            <p>211225.01.2v</p>
          </div>
        </div>
        <div class="area_33 padding5">
          <div class="version-infor">
            <img src="../../../icon/img/main/S.png" class="dis marginauto">
            <p>业务版本</p>
            <p>211225.01.2v</p>
          </div>
        </div>
      </div>
      <div class="line-ebebeb margintop10 marginbottom10"></div>
      <div class="cl-title">
        <p class="h5">证书信息</p>
      </div>
      <div class="padingtop10 opacity0_8">
        <div class="padding2 bgf5f5f5 h6 margintop10">证书序列号:H0F040089156534</div>
        <div class="padding2 bgf5f5f5 h6 margintop5">用户代码: Q31100**</div>
        <div class="padding2 bgf5f5f5 h6 margintop5">证书有效期:2022-03-30 - 2022-04-05</div>
        <div class="padding2 bgf5f5f5 h6 margintop5">证书备注: 951753</div>
      </div>
      <div class="line-ebebeb margintop10 marginbottom10"></div>
      <div class="cl-title">
        <p class="h5">帮助信息</p>
      </div>
        <div class="h6 paddingtop5 cf row5">
          <div class="area_25 padding5">
            <div class="user-infor-set">软件手册</div>
          </div>
          <div class="area_25 padding5">
            <div class="user-infor-set">业务手册</div>
          </div>
          <div class="area_25 padding5">
            <div class="user-infor-set">技术指导</div>
          </div>
        </div>
    </div>
    <img src="@/icon/img/logo/logo2.png" class="dis width100">
  </div>
</template>
<script lang="ts" src="./homePage.ts">
</script>
<style src="./homePage.css">
</style>
