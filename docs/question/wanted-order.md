```
<template>
  <headerMenu>
    <form class="ui form">
      <div class="inline fields">
        <div class="field flex">
          <label>查询内容</label>
          <div id="ipt-search-comp"
               class="ui search selection dropdown"
               style="min-width: 16em;">
            <input
              id="ipt-search"
              class="search"
              tabindex="0"
              autocomplete="off"
              placeholder="输入查询条件"
              v-model="searchValue"
            />
            <div class="close" v-show="schVal" @click="clear">
              <i class="remove icon"></i>
            </div>
            <div
              id="ipt-search-menu"
              class="menu"
              @click="(e) => setSearchScope(e.target.innerText)"
              tabindex="-1"
            >
              <div class="item">
                <span style="color: grey;">关键词:</span>
                {{ searchValue }}
              </div>
              <div class="item">
                <span style="color: grey;">&nbsp;&nbsp;&nbsp;&nbsp;渠道:</span>
                {{ searchValue }}
              </div>
              <div class="item" :data-value="searchValue">
                <span style="color: grey;">&nbsp;&nbsp;&nbsp;&nbsp;来源:</span>
                {{ searchValue }}
              </div>
              <div class="item">
                <span style="color: grey;">&nbsp;&nbsp;&nbsp;&nbsp;标题:</span>
                {{ searchValue }}
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label>身份信息</label>
          <div class="ui radio checkbox">
            <input
              id="radio-isIdentity-all"
              type="radio"
              v-model="params.query_params.has_identity"
              :value="-1"
              name="identity"
            />
            <label for="radio-isIdentity-all">全部</label>
          </div>
          <div class="ui radio checkbox" style="margin-right: 1em">
            <input
              id="radio-isIdentity-y"
              type="radio"
              v-model="params.query_params.has_identity"
              :value="0"
              name="identity"
            />
            <label for="radio-isIdentity-y">没有</label>
          </div>
          <div class="ui radio checkbox">
            <input
              id="radio-isIdentity-n"
              type="radio"
              v-model="params.query_params.has_identity"
              :value="1"
              name="identity"
            />
            <label for="radio-isIdentity-n" style="margin-right: 2em">有</label>
          </div>
        </div>



       <div class="field flex">
        <label>爬取时间</label>
        <myCalendar @change="changeCreateTime"
                    style="min-width:15.6em"></myCalendar>
      </div>
        <div class="field flex">
          <label>机器判断</label>
          <div :class="['ui', 'selection', 'dropdown',
          'selectDropdown',params.query_params.auto_check !== -1 ?
          'clearable' : '']"
               id="auto_check"
               style="width: 12em">
            <input type="hidden" name="language" value="auto_check" />
            <i class="dropdown icon"></i>
            <div class="default text">请选择</div>
            <div class="menu">
              <div class="item" :data="0">待分析</div>
              <div class="item" :data="1">通缉令</div>
              <div class="item" :data="2">非通缉令</div>
              <div class="item" :data="3">未知</div>
            </div>
          </div>
        </div>

      </div>

      <div class="inline fields">
        <div class="field flex">
          <label>人工复核</label>
          <div :class="['ui', 'selection', 'dropdown',
          'selectDropdown',params.query_params.manual_check !== -1 ?
          'clearable' : '']"
               id="manual_check"
               style="width: 16em">
            <input type="hidden" name="language" value="manual_check" />
            <i class="dropdown icon"></i>
            <div class="default text">请选择</div>
            <div class="menu">
              <div class="item" :data="0">待标记</div>
              <div class="item" :data="1">通缉令</div>
              <div class="item" :data="2">非通缉令</div>
            </div>
          </div>
        </div>

         <div class="field">
          <label>处理状态</label>
          <div class="ui radio checkbox">
            <input
              id="radio-all"
              type="radio"
              v-model="params.query_params.state"
              :value="-1"
              name="pushed"
            />
            <label for="radio-all">全部</label>
          </div>
          <div class="ui radio checkbox">
            <input
              id="radio-pushed"
              type="radio"
              v-model="params.query_params.state"
              :value="1"
              name="pushed"
            />
            <label for="radio-pushed">未处理</label>
          </div>
          <div class="ui radio checkbox">
            <input
              id="radio-forbidden"
              type="radio"
              v-model="params.query_params.state"
              :value="2"
              name="pushed"
            />
            <label for="radio-forbidden">已处理</label>
          </div>
        </div>


      <div class="field flex">
        <label>发布时间</label>
        <myCalendar @change="changePublicTime"
                    style="min-width:15.5em"></myCalendar>
      </div>
        <div class="field flex">
          <label>标记备注</label>
          <div :class="['ui', 'selection', 'dropdown',
          'selectDropdown',params.query_params.untrust !== -1 ?
          'clearable' : '']"
               id="untrust"
               style="width: 12em">
            <input type="hidden" name="language" value="untrust" />
            <i class="dropdown icon"></i>
            <div class="default text">请选择</div>
            <div class="menu">
              <div class="item" :data="0">可信渠道</div>
              <div class="item" :data="1">不可信渠道</div>
            </div>
          </div>
          <button
            class="ui button"
            @click="search"
            type="button"
            style="margin-left: 10px"
          >查询</button>

          <button
            class="ui button"
            @click="down"
            type="button"
            style="margin-left: 10px"
          >下载</button>

        </div>

      </div>
    </form>

    <myTable ref="table" :columns="columns" :list="list" @sort="sort"
             @search="searchID">
      <template #dup_id="{ data }">
          <a v-if="data" style="cursor: pointer" @click="gotoPage(data)">{{ data
            }}</a>
          <span v-else>-</span>
      </template>
      <template #title="{ data, list }">
        <div class="line" :data-content="list.url">
          <a :href="list.url" target="_blank">{{ data || '-' }}</a>
        </div>
      </template>
      <template #manual_check="{ data, list }">
        <select
          class="ui selection dropdown check"
          :value="data || ''"
          @change="(value) => manualCheck(value, list.id)"
        >
          <option value>请选择</option>
          <option :value="1">是</option>
          <option :value="2">否</option>
        </select>
      </template>
      <template #untrust="{ data, list }">
        <select
          class="ui selection dropdown check"
          :value="data"
          @change="(value) => untrustChange(value, list.id)"
        >
          <option value>请选择</option>
          <option :value="0">可信渠道</option>
          <option :value="1">不可信</option>
        </select>
      </template>
      <template #state="{ data, list }">
        <div class="deal_state">
          <a :class="['ui',
          data === 1 ? 'green' : 'grey','empty','circular','label']"></a>
          <span :style="{paddingLeft: '5px',
          color:  data === 1 ? '' : 'grey'}">{{data === 1 ? '未处理' : '已处理'}}</span>
        </div>
      </template>
      <template #option="{ data, list }">
        <div>
<!--          <a :href="list.url+'?wanted_order_src_id='+list.id" target="_blank">校验</a>&nbsp;&nbsp;|&nbsp;-->
          <span style="color: #4183c4;cursor: pointer" @click="openUrlWithRecord(list.id,list.url)">校验</span>&nbsp;&nbsp;|&nbsp;
<!--          <NuxtLink target="_blank" :to="`/record?id=${list.id}&url=${list.url}`">校验</NuxtLink>&nbsp;&nbsp;|&nbsp;-->
          <a target="_blank" @click="showModal(list.id)" style="cursor: pointer">详细</a>
        </div>
      </template>
    </myTable>
    <myPage :totals="totals" @current-change="pageChange" :currentPage="params.page_params.page"></myPage>
    <modal ref="identity"></modal>
  </headerMenu>
</template>
<script setup>
import headerMenu from '../../components/common/header-menu';
import myTable from '../../components/common/my-table';
import myPage from '../../components/common/my-page';
import myCalendar from '../../components/common/my-calendar';
import message from '../../components/common/message/index';
import modal from './modal';
import columns from './columns.js';
import copyContent from '../../utils/copyContent';
import { getWantedOrderList, setManualCheck, setUntrust, wantedOrderListById } from
                                                            '../../api/checkList';
import {
  reactive, ref, nextTick, onMounted, onUpdated, getCurrentInstance,
  computed
}                                             from '@nuxtjs/composition-api';

const keyword = ref('')
let list = ref([]);
let totals = ref(0);
let searchValue = ref('');
let searchScope = ref('标题');
const ctx = getCurrentInstance()
const params = reactive({
  page_params: {
    page: 1,
    page_size: 10
  },
  order_params: { name: 'create_time', direction: 0 },
  query_params: {
    // create_time: { begin: null, end: null },
    // public_time: { begin: null, end: null },
    state: -1,
    auto_check: -1,
    manual_check: -1,
    has_identity: -1,
    untrust: -1,
    keyword: ''
  }
});

const initDropdown = () => {
  $('.ui.dropdown.check').dropdown()
}

const gotoPage = async (id) => {
  let res = await wantedOrderListById({id})
  let url = JSON.parse(res.data.data).url
  window.open(url, '_blank')
}

onMounted(async () => {
  await getList(params);

  nextTick(() => {
    initDropdown()
    bindPopup()
  })

  $('#ipt-search').focus(function () {
    let val = searchValue?.value;
    val = val?.replace(/关键词[:：]|渠道[:：]|来源[:：]|标题[:：]/, '');
    searchValue.value = val?.trim();
    this.parentElement.classList.add('active', 'visible');
    $('#ipt-search-menu').addClass(['transition', 'visible']);
  })

  $('#ipt-search').blur(function () {
    setTimeout(() => {
      this.parentElement.classList.remove('active', 'visible');
      $('#ipt-search-menu').removeClass('transition', 'visible');
      let searchValue1 = searchValue?.value;
      let searchScope1 = searchScope?.value;
      if (searchScope1 && searchValue1?.indexOf(searchScope1) === -1) {
        let value = searchScope1 + ":" + searchValue1.replace(/关键词[:：]|渠道[:：]|来源[:：]|标题[:：]/, '');
        searchValue.value = value?.trim();
      }
    }, 200);
  })
})


onUpdated(() => {
  nextTick(() => {
    initDropdown()
    bindPopup()
  })
})

const bindPopup = () => {
    $('.line').popup({
      position: 'bottom center',
      hoverable: true,
      delay: {
        show: 300,
        hide: 500
      },
      onShow: () => {
        $('.ui.popup').on('click', copyContent)
      },
      onHide: () => {
        $('.ui.popup').off('click', copyContent)
      }
    });

    $('.selectDropdown').each(function () {
      $(this).dropdown({
        onChange: (value, text, $selectedItem) => {
          let val = value ? parseInt($selectedItem.attr('data')) : -1
          params.query_params[$(this).attr('id')] = val
        },
      })
    });
}


const getList = async function (params) {
  let res = await getWantedOrderList(params);
  let data = JSON.parse(res.data.data);
  list.value = data.data;
  totals.value = data.page_info.count;
  // this.$refs.table.reset()
  ctx.refs.table.reset()
  // console.log(ctx.refs.table, 'table');
  // this.$refs.loading.finish()
};

const manualCheck = async (e, id) => {
  const res = await setManualCheck({
    id: id,
    manual_check: e.target.selectedIndex,
    check_user: 'test'
  })
  if (res.data.retcode === 0) ctx.proxy.$message('success', '修改成功')
  await getList(params);
}

const untrustChange = async (e, id) => {
  const res = await setUntrust({
    id: id,
    untrust: e.target.selectedIndex-1,
  })
  if (res.data.retcode === 0) ctx.proxy.$message('success', '修改成功')
  await getList(params);
}

const pageChange = async function (page) {
  params.page_params.page = page;
  await getList(params);
};
const changeCreateTime = (date) => {
  // params.query_params.create_time = date
  params.query_params.create_time = {
    begin : date.begin && `${ date.begin } 00:00:00`,
    end   : date.end && `${ date.end } 23:59:59`
  }
}
const changePublicTime = (date) => {
  // params.query_params.public_time = date
  params.query_params.public_time = {
    begin : date.begin && `${ date.begin } 00:00:00`,
    end   : date.end && `${ date.end } 23:59:59`
  }
}


const schVal = computed(() =>
  searchValue.value?.replace(/关键词[:：]|渠道[:：]|来源[:：]|标题[:：]/, ''))

const search = async () => {
  // let schVal = searchValue.value;
  let scpVal = searchScope.value;
  let qparams = params.query_params;
  params.page_params.page = 1
  qparams.keyword = '';
  qparams.source = '';
  qparams.title = '';
  qparams.channel = '';
  // schVal = schVal.replace(/关键词[:：]|渠道[:：]|来源[:：]|标题[:：]/, '');
  if (scpVal === '渠道') {
    qparams.channel = schVal.value;
  } else if (scpVal === '来源') {
    qparams.source = schVal.value;
  } else if (scpVal === '标题') {
    qparams.title = schVal.value;
  } else {
    qparams.keyword = schVal.value;
  }
  await getList(params);
}

const sort = async (param) => {
  params.order_params = { name: param.sortColumn, direction: param.sortBy }
  await getList(params);
}

const identity = ref(null);
const showModal = (id) => {
  // message.success('111')
  identity.value.show(id)
}

const setSearchScope = (value) => {
  value = value.split(':')[0];
  searchScope.value = value ? value.trim() : '';
}

let otherWin   = ref(null)
let sendParams = reactive({})
const openUrlWithRecord = (id, url) => {
  sendParams.id   = id;
  otherWin.value  = window.open(url);
}

const clear = () => {
  searchValue.value = `${searchScope.value}:`
}

const searchID = async (filter) => {
  let id = filter[0]?.value || ''
  if (!id){
    await getList(params);
  } else {
    let res = await wantedOrderListById({id})
    let data = JSON.parse(res.data.data)
    if(data) {
      list.value = [data]
      totals.value = 1
    }else {
      list.value = []
      totals.value = 0
    }
  }
}

const down = async () => {
  let downList = []
  for (let i = 1; i <= Math.ceil(totals.value/5000); i++) {
    let res = await getWantedOrderList({
      page_params: {
        page: i,
        page_size: 5000
      },
      order_params: { name: 'create_time', direction: 0 },
      query_params: {}
    });
    let data = JSON.parse(res.data.data).data;
    downList = downList.concat(data)
  }
  let blob = new
  Blob([JSON.stringify(downList, null, 2)],{type:'application/json,charset=utf-8;'});
  let Link = document.createElement('a');
  Link.setAttribute('href', window.URL.createObjectURL(blob))
  Link.setAttribute('download', 'wanted-order.json')
  Link.style.display = 'none'
  Link.click()
  // Link.download = "wanted-order.txt";
  // Link.style.display = 'none';
  // 字符内容转变成blob地址
  // let blob = new Blob(downList);
  // Link.href = URL.createObjectURL(blob);
  // 触发点击
  // document.body.appendChild(Link);
  // Link.click();
  // 然后移除
  // document.body.removeChild(Link);
}

onMounted(() => {
  // 监听window.open打开的子页面发送过来的消息
  window.addEventListener('message', (e) => {
    if (e.data.cmd === 'DOMLoaded') {
      otherWin.value.postMessage({
        cmd    : 'wanted_order_src_id',
        content: sendParams.id
      }, '*')
    }
  })
})
</script>

<style scoped>
.ui.button {
  background: #3e91f7;
  color: white;
}

::v-deep .ui.form .inline.fields .field {
  padding-right: 4em;
}

/*::v-deep #search > .ui.selection.dropdown option {*/
/*  min-width: 4em;*/
/*}*/

::v-deep .ui.selection.dropdown,
.ui.selection.dropdown.option {
  min-width: 3em;
}

.ui.radio.checkbox {
  padding-right: 1em;
  cursor: pointer;
}
::v-deep .ui.form .inline.fields .field>label {
  font-size: 14px;
  /* color: #606266; */
  /* font-weight: normal; */
}

.deal_state{
  display: flex;
  justify-content:center;
  align-items: center;
}

.deal_state a {
  font-size: .5em;
}

.option {
  display: flex;
  justify-content: space-around;
}

.ui.radio.checkbox {
    padding-right: 0.5em
}

  .flex {
    display: flex;
    align-items: center;
  }

  .close {
    position: absolute;
    right: .5em;
    top: 10px;
    color: rgb(167, 167, 167);
    cursor: pointer;
    z-index: 1000;
  }
</style>


```

