import{_ as i,o as n,c as e,e as l}from"./app.659fa32e.js";const s={},d={class:"language-text ext-text line-numbers-mode"},t=l(`<pre class="language-text"><code>&lt;template&gt;
  &lt;headerMenu&gt;
    &lt;form class=&quot;ui form&quot;&gt;
      &lt;div class=&quot;inline fields&quot;&gt;
        &lt;div class=&quot;field flex&quot;&gt;
          &lt;label&gt;\u67E5\u8BE2\u5185\u5BB9&lt;/label&gt;
          &lt;div id=&quot;ipt-search-comp&quot;
               class=&quot;ui search selection dropdown&quot;
               style=&quot;min-width: 16em;&quot;&gt;
            &lt;input
              id=&quot;ipt-search&quot;
              class=&quot;search&quot;
              tabindex=&quot;0&quot;
              autocomplete=&quot;off&quot;
              placeholder=&quot;\u8F93\u5165\u67E5\u8BE2\u6761\u4EF6&quot;
              v-model=&quot;searchValue&quot;
            /&gt;
            &lt;div class=&quot;close&quot; v-show=&quot;schVal&quot; @click=&quot;clear&quot;&gt;
              &lt;i class=&quot;remove icon&quot;&gt;&lt;/i&gt;
            &lt;/div&gt;
            &lt;div
              id=&quot;ipt-search-menu&quot;
              class=&quot;menu&quot;
              @click=&quot;(e) =&gt; setSearchScope(e.target.innerText)&quot;
              tabindex=&quot;-1&quot;
            &gt;
              &lt;div class=&quot;item&quot;&gt;
                &lt;span style=&quot;color: grey;&quot;&gt;\u5173\u952E\u8BCD:&lt;/span&gt;
                {{ searchValue }}
              &lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;
                &lt;span style=&quot;color: grey;&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\u6E20\u9053:&lt;/span&gt;
                {{ searchValue }}
              &lt;/div&gt;
              &lt;div class=&quot;item&quot; :data-value=&quot;searchValue&quot;&gt;
                &lt;span style=&quot;color: grey;&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\u6765\u6E90:&lt;/span&gt;
                {{ searchValue }}
              &lt;/div&gt;
              &lt;div class=&quot;item&quot;&gt;
                &lt;span style=&quot;color: grey;&quot;&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;\u6807\u9898:&lt;/span&gt;
                {{ searchValue }}
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;field&quot;&gt;
          &lt;label&gt;\u8EAB\u4EFD\u4FE1\u606F&lt;/label&gt;
          &lt;div class=&quot;ui radio checkbox&quot;&gt;
            &lt;input
              id=&quot;radio-isIdentity-all&quot;
              type=&quot;radio&quot;
              v-model=&quot;params.query_params.has_identity&quot;
              :value=&quot;-1&quot;
              name=&quot;identity&quot;
            /&gt;
            &lt;label for=&quot;radio-isIdentity-all&quot;&gt;\u5168\u90E8&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ui radio checkbox&quot; style=&quot;margin-right: 1em&quot;&gt;
            &lt;input
              id=&quot;radio-isIdentity-y&quot;
              type=&quot;radio&quot;
              v-model=&quot;params.query_params.has_identity&quot;
              :value=&quot;0&quot;
              name=&quot;identity&quot;
            /&gt;
            &lt;label for=&quot;radio-isIdentity-y&quot;&gt;\u6CA1\u6709&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ui radio checkbox&quot;&gt;
            &lt;input
              id=&quot;radio-isIdentity-n&quot;
              type=&quot;radio&quot;
              v-model=&quot;params.query_params.has_identity&quot;
              :value=&quot;1&quot;
              name=&quot;identity&quot;
            /&gt;
            &lt;label for=&quot;radio-isIdentity-n&quot; style=&quot;margin-right: 2em&quot;&gt;\u6709&lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;



       &lt;div class=&quot;field flex&quot;&gt;
        &lt;label&gt;\u722C\u53D6\u65F6\u95F4&lt;/label&gt;
        &lt;myCalendar @change=&quot;changeCreateTime&quot;
                    style=&quot;min-width:15.6em&quot;&gt;&lt;/myCalendar&gt;
      &lt;/div&gt;
        &lt;div class=&quot;field flex&quot;&gt;
          &lt;label&gt;\u673A\u5668\u5224\u65AD&lt;/label&gt;
          &lt;div :class=&quot;[&#39;ui&#39;, &#39;selection&#39;, &#39;dropdown&#39;,
          &#39;selectDropdown&#39;,params.query_params.auto_check !== -1 ?
          &#39;clearable&#39; : &#39;&#39;]&quot;
               id=&quot;auto_check&quot;
               style=&quot;width: 12em&quot;&gt;
            &lt;input type=&quot;hidden&quot; name=&quot;language&quot; value=&quot;auto_check&quot; /&gt;
            &lt;i class=&quot;dropdown icon&quot;&gt;&lt;/i&gt;
            &lt;div class=&quot;default text&quot;&gt;\u8BF7\u9009\u62E9&lt;/div&gt;
            &lt;div class=&quot;menu&quot;&gt;
              &lt;div class=&quot;item&quot; :data=&quot;0&quot;&gt;\u5F85\u5206\u6790&lt;/div&gt;
              &lt;div class=&quot;item&quot; :data=&quot;1&quot;&gt;\u901A\u7F09\u4EE4&lt;/div&gt;
              &lt;div class=&quot;item&quot; :data=&quot;2&quot;&gt;\u975E\u901A\u7F09\u4EE4&lt;/div&gt;
              &lt;div class=&quot;item&quot; :data=&quot;3&quot;&gt;\u672A\u77E5&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

      &lt;/div&gt;

      &lt;div class=&quot;inline fields&quot;&gt;
        &lt;div class=&quot;field flex&quot;&gt;
          &lt;label&gt;\u4EBA\u5DE5\u590D\u6838&lt;/label&gt;
          &lt;div :class=&quot;[&#39;ui&#39;, &#39;selection&#39;, &#39;dropdown&#39;,
          &#39;selectDropdown&#39;,params.query_params.manual_check !== -1 ?
          &#39;clearable&#39; : &#39;&#39;]&quot;
               id=&quot;manual_check&quot;
               style=&quot;width: 16em&quot;&gt;
            &lt;input type=&quot;hidden&quot; name=&quot;language&quot; value=&quot;manual_check&quot; /&gt;
            &lt;i class=&quot;dropdown icon&quot;&gt;&lt;/i&gt;
            &lt;div class=&quot;default text&quot;&gt;\u8BF7\u9009\u62E9&lt;/div&gt;
            &lt;div class=&quot;menu&quot;&gt;
              &lt;div class=&quot;item&quot; :data=&quot;0&quot;&gt;\u5F85\u6807\u8BB0&lt;/div&gt;
              &lt;div class=&quot;item&quot; :data=&quot;1&quot;&gt;\u901A\u7F09\u4EE4&lt;/div&gt;
              &lt;div class=&quot;item&quot; :data=&quot;2&quot;&gt;\u975E\u901A\u7F09\u4EE4&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;

         &lt;div class=&quot;field&quot;&gt;
          &lt;label&gt;\u5904\u7406\u72B6\u6001&lt;/label&gt;
          &lt;div class=&quot;ui radio checkbox&quot;&gt;
            &lt;input
              id=&quot;radio-all&quot;
              type=&quot;radio&quot;
              v-model=&quot;params.query_params.state&quot;
              :value=&quot;-1&quot;
              name=&quot;pushed&quot;
            /&gt;
            &lt;label for=&quot;radio-all&quot;&gt;\u5168\u90E8&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ui radio checkbox&quot;&gt;
            &lt;input
              id=&quot;radio-pushed&quot;
              type=&quot;radio&quot;
              v-model=&quot;params.query_params.state&quot;
              :value=&quot;1&quot;
              name=&quot;pushed&quot;
            /&gt;
            &lt;label for=&quot;radio-pushed&quot;&gt;\u672A\u5904\u7406&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;ui radio checkbox&quot;&gt;
            &lt;input
              id=&quot;radio-forbidden&quot;
              type=&quot;radio&quot;
              v-model=&quot;params.query_params.state&quot;
              :value=&quot;2&quot;
              name=&quot;pushed&quot;
            /&gt;
            &lt;label for=&quot;radio-forbidden&quot;&gt;\u5DF2\u5904\u7406&lt;/label&gt;
          &lt;/div&gt;
        &lt;/div&gt;


      &lt;div class=&quot;field flex&quot;&gt;
        &lt;label&gt;\u53D1\u5E03\u65F6\u95F4&lt;/label&gt;
        &lt;myCalendar @change=&quot;changePublicTime&quot;
                    style=&quot;min-width:15.5em&quot;&gt;&lt;/myCalendar&gt;
      &lt;/div&gt;
        &lt;div class=&quot;field flex&quot;&gt;
          &lt;label&gt;\u6807\u8BB0\u5907\u6CE8&lt;/label&gt;
          &lt;div :class=&quot;[&#39;ui&#39;, &#39;selection&#39;, &#39;dropdown&#39;,
          &#39;selectDropdown&#39;,params.query_params.untrust !== -1 ?
          &#39;clearable&#39; : &#39;&#39;]&quot;
               id=&quot;untrust&quot;
               style=&quot;width: 12em&quot;&gt;
            &lt;input type=&quot;hidden&quot; name=&quot;language&quot; value=&quot;untrust&quot; /&gt;
            &lt;i class=&quot;dropdown icon&quot;&gt;&lt;/i&gt;
            &lt;div class=&quot;default text&quot;&gt;\u8BF7\u9009\u62E9&lt;/div&gt;
            &lt;div class=&quot;menu&quot;&gt;
              &lt;div class=&quot;item&quot; :data=&quot;0&quot;&gt;\u53EF\u4FE1\u6E20\u9053&lt;/div&gt;
              &lt;div class=&quot;item&quot; :data=&quot;1&quot;&gt;\u4E0D\u53EF\u4FE1\u6E20\u9053&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;button
            class=&quot;ui button&quot;
            @click=&quot;search&quot;
            type=&quot;button&quot;
            style=&quot;margin-left: 10px&quot;
          &gt;\u67E5\u8BE2&lt;/button&gt;

          &lt;button
            class=&quot;ui button&quot;
            @click=&quot;down&quot;
            type=&quot;button&quot;
            style=&quot;margin-left: 10px&quot;
          &gt;\u4E0B\u8F7D&lt;/button&gt;

        &lt;/div&gt;

      &lt;/div&gt;
    &lt;/form&gt;

    &lt;myTable ref=&quot;table&quot; :columns=&quot;columns&quot; :list=&quot;list&quot; @sort=&quot;sort&quot;
             @search=&quot;searchID&quot;&gt;
      &lt;template #dup_id=&quot;{ data }&quot;&gt;
          &lt;a v-if=&quot;data&quot; style=&quot;cursor: pointer&quot; @click=&quot;gotoPage(data)&quot;&gt;{{ data
            }}&lt;/a&gt;
          &lt;span v-else&gt;-&lt;/span&gt;
      &lt;/template&gt;
      &lt;template #title=&quot;{ data, list }&quot;&gt;
        &lt;div class=&quot;line&quot; :data-content=&quot;list.url&quot;&gt;
          &lt;a :href=&quot;list.url&quot; target=&quot;_blank&quot;&gt;{{ data || &#39;-&#39; }}&lt;/a&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template #manual_check=&quot;{ data, list }&quot;&gt;
        &lt;select
          class=&quot;ui selection dropdown check&quot;
          :value=&quot;data || &#39;&#39;&quot;
          @change=&quot;(value) =&gt; manualCheck(value, list.id)&quot;
        &gt;
          &lt;option value&gt;\u8BF7\u9009\u62E9&lt;/option&gt;
          &lt;option :value=&quot;1&quot;&gt;\u662F&lt;/option&gt;
          &lt;option :value=&quot;2&quot;&gt;\u5426&lt;/option&gt;
        &lt;/select&gt;
      &lt;/template&gt;
      &lt;template #untrust=&quot;{ data, list }&quot;&gt;
        &lt;select
          class=&quot;ui selection dropdown check&quot;
          :value=&quot;data&quot;
          @change=&quot;(value) =&gt; untrustChange(value, list.id)&quot;
        &gt;
          &lt;option value&gt;\u8BF7\u9009\u62E9&lt;/option&gt;
          &lt;option :value=&quot;0&quot;&gt;\u53EF\u4FE1\u6E20\u9053&lt;/option&gt;
          &lt;option :value=&quot;1&quot;&gt;\u4E0D\u53EF\u4FE1&lt;/option&gt;
        &lt;/select&gt;
      &lt;/template&gt;
      &lt;template #state=&quot;{ data, list }&quot;&gt;
        &lt;div class=&quot;deal_state&quot;&gt;
          &lt;a :class=&quot;[&#39;ui&#39;,
          data === 1 ? &#39;green&#39; : &#39;grey&#39;,&#39;empty&#39;,&#39;circular&#39;,&#39;label&#39;]&quot;&gt;&lt;/a&gt;
          &lt;span :style=&quot;{paddingLeft: &#39;5px&#39;,
          color:  data === 1 ? &#39;&#39; : &#39;grey&#39;}&quot;&gt;{{data === 1 ? &#39;\u672A\u5904\u7406&#39; : &#39;\u5DF2\u5904\u7406&#39;}}&lt;/span&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template #option=&quot;{ data, list }&quot;&gt;
        &lt;div&gt;
&lt;!--          &lt;a :href=&quot;list.url+&#39;?wanted_order_src_id=&#39;+list.id&quot; target=&quot;_blank&quot;&gt;\u6821\u9A8C&lt;/a&gt;&amp;nbsp;&amp;nbsp;|&amp;nbsp;--&gt;
          &lt;span style=&quot;color: #4183c4;cursor: pointer&quot; @click=&quot;openUrlWithRecord(list.id,list.url)&quot;&gt;\u6821\u9A8C&lt;/span&gt;&amp;nbsp;&amp;nbsp;|&amp;nbsp;
&lt;!--          &lt;NuxtLink target=&quot;_blank&quot; :to=&quot;\`/record?id=\${list.id}&amp;url=\${list.url}\`&quot;&gt;\u6821\u9A8C&lt;/NuxtLink&gt;&amp;nbsp;&amp;nbsp;|&amp;nbsp;--&gt;
          &lt;a target=&quot;_blank&quot; @click=&quot;showModal(list.id)&quot; style=&quot;cursor: pointer&quot;&gt;\u8BE6\u7EC6&lt;/a&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/myTable&gt;
    &lt;myPage :totals=&quot;totals&quot; @current-change=&quot;pageChange&quot; :currentPage=&quot;params.page_params.page&quot;&gt;&lt;/myPage&gt;
    &lt;modal ref=&quot;identity&quot;&gt;&lt;/modal&gt;
  &lt;/headerMenu&gt;
&lt;/template&gt;
&lt;script setup&gt;
import headerMenu from &#39;../../components/common/header-menu&#39;;
import myTable from &#39;../../components/common/my-table&#39;;
import myPage from &#39;../../components/common/my-page&#39;;
import myCalendar from &#39;../../components/common/my-calendar&#39;;
import message from &#39;../../components/common/message/index&#39;;
import modal from &#39;./modal&#39;;
import columns from &#39;./columns.js&#39;;
import copyContent from &#39;../../utils/copyContent&#39;;
import { getWantedOrderList, setManualCheck, setUntrust, wantedOrderListById } from
                                                            &#39;../../api/checkList&#39;;
import {
  reactive, ref, nextTick, onMounted, onUpdated, getCurrentInstance,
  computed
}                                             from &#39;@nuxtjs/composition-api&#39;;

const keyword = ref(&#39;&#39;)
let list = ref([]);
let totals = ref(0);
let searchValue = ref(&#39;&#39;);
let searchScope = ref(&#39;\u6807\u9898&#39;);
const ctx = getCurrentInstance()
const params = reactive({
  page_params: {
    page: 1,
    page_size: 10
  },
  order_params: { name: &#39;create_time&#39;, direction: 0 },
  query_params: {
    // create_time: { begin: null, end: null },
    // public_time: { begin: null, end: null },
    state: -1,
    auto_check: -1,
    manual_check: -1,
    has_identity: -1,
    untrust: -1,
    keyword: &#39;&#39;
  }
});

const initDropdown = () =&gt; {
  $(&#39;.ui.dropdown.check&#39;).dropdown()
}

const gotoPage = async (id) =&gt; {
  let res = await wantedOrderListById({id})
  let url = JSON.parse(res.data.data).url
  window.open(url, &#39;_blank&#39;)
}

onMounted(async () =&gt; {
  await getList(params);

  nextTick(() =&gt; {
    initDropdown()
    bindPopup()
  })

  $(&#39;#ipt-search&#39;).focus(function () {
    let val = searchValue?.value;
    val = val?.replace(/\u5173\u952E\u8BCD[:\uFF1A]|\u6E20\u9053[:\uFF1A]|\u6765\u6E90[:\uFF1A]|\u6807\u9898[:\uFF1A]/, &#39;&#39;);
    searchValue.value = val?.trim();
    this.parentElement.classList.add(&#39;active&#39;, &#39;visible&#39;);
    $(&#39;#ipt-search-menu&#39;).addClass([&#39;transition&#39;, &#39;visible&#39;]);
  })

  $(&#39;#ipt-search&#39;).blur(function () {
    setTimeout(() =&gt; {
      this.parentElement.classList.remove(&#39;active&#39;, &#39;visible&#39;);
      $(&#39;#ipt-search-menu&#39;).removeClass(&#39;transition&#39;, &#39;visible&#39;);
      let searchValue1 = searchValue?.value;
      let searchScope1 = searchScope?.value;
      if (searchScope1 &amp;&amp; searchValue1?.indexOf(searchScope1) === -1) {
        let value = searchScope1 + &quot;:&quot; + searchValue1.replace(/\u5173\u952E\u8BCD[:\uFF1A]|\u6E20\u9053[:\uFF1A]|\u6765\u6E90[:\uFF1A]|\u6807\u9898[:\uFF1A]/, &#39;&#39;);
        searchValue.value = value?.trim();
      }
    }, 200);
  })
})


onUpdated(() =&gt; {
  nextTick(() =&gt; {
    initDropdown()
    bindPopup()
  })
})

const bindPopup = () =&gt; {
    $(&#39;.line&#39;).popup({
      position: &#39;bottom center&#39;,
      hoverable: true,
      delay: {
        show: 300,
        hide: 500
      },
      onShow: () =&gt; {
        $(&#39;.ui.popup&#39;).on(&#39;click&#39;, copyContent)
      },
      onHide: () =&gt; {
        $(&#39;.ui.popup&#39;).off(&#39;click&#39;, copyContent)
      }
    });

    $(&#39;.selectDropdown&#39;).each(function () {
      $(this).dropdown({
        onChange: (value, text, $selectedItem) =&gt; {
          let val = value ? parseInt($selectedItem.attr(&#39;data&#39;)) : -1
          params.query_params[$(this).attr(&#39;id&#39;)] = val
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
  // console.log(ctx.refs.table, &#39;table&#39;);
  // this.$refs.loading.finish()
};

const manualCheck = async (e, id) =&gt; {
  const res = await setManualCheck({
    id: id,
    manual_check: e.target.selectedIndex,
    check_user: &#39;test&#39;
  })
  if (res.data.retcode === 0) ctx.proxy.$message(&#39;success&#39;, &#39;\u4FEE\u6539\u6210\u529F&#39;)
  await getList(params);
}

const untrustChange = async (e, id) =&gt; {
  const res = await setUntrust({
    id: id,
    untrust: e.target.selectedIndex-1,
  })
  if (res.data.retcode === 0) ctx.proxy.$message(&#39;success&#39;, &#39;\u4FEE\u6539\u6210\u529F&#39;)
  await getList(params);
}

const pageChange = async function (page) {
  params.page_params.page = page;
  await getList(params);
};
const changeCreateTime = (date) =&gt; {
  // params.query_params.create_time = date
  params.query_params.create_time = {
    begin : date.begin &amp;&amp; \`\${ date.begin } 00:00:00\`,
    end   : date.end &amp;&amp; \`\${ date.end } 23:59:59\`
  }
}
const changePublicTime = (date) =&gt; {
  // params.query_params.public_time = date
  params.query_params.public_time = {
    begin : date.begin &amp;&amp; \`\${ date.begin } 00:00:00\`,
    end   : date.end &amp;&amp; \`\${ date.end } 23:59:59\`
  }
}


const schVal = computed(() =&gt;
  searchValue.value?.replace(/\u5173\u952E\u8BCD[:\uFF1A]|\u6E20\u9053[:\uFF1A]|\u6765\u6E90[:\uFF1A]|\u6807\u9898[:\uFF1A]/, &#39;&#39;))

const search = async () =&gt; {
  // let schVal = searchValue.value;
  let scpVal = searchScope.value;
  let qparams = params.query_params;
  params.page_params.page = 1
  qparams.keyword = &#39;&#39;;
  qparams.source = &#39;&#39;;
  qparams.title = &#39;&#39;;
  qparams.channel = &#39;&#39;;
  // schVal = schVal.replace(/\u5173\u952E\u8BCD[:\uFF1A]|\u6E20\u9053[:\uFF1A]|\u6765\u6E90[:\uFF1A]|\u6807\u9898[:\uFF1A]/, &#39;&#39;);
  if (scpVal === &#39;\u6E20\u9053&#39;) {
    qparams.channel = schVal.value;
  } else if (scpVal === &#39;\u6765\u6E90&#39;) {
    qparams.source = schVal.value;
  } else if (scpVal === &#39;\u6807\u9898&#39;) {
    qparams.title = schVal.value;
  } else {
    qparams.keyword = schVal.value;
  }
  await getList(params);
}

const sort = async (param) =&gt; {
  params.order_params = { name: param.sortColumn, direction: param.sortBy }
  await getList(params);
}

const identity = ref(null);
const showModal = (id) =&gt; {
  // message.success(&#39;111&#39;)
  identity.value.show(id)
}

const setSearchScope = (value) =&gt; {
  value = value.split(&#39;:&#39;)[0];
  searchScope.value = value ? value.trim() : &#39;&#39;;
}

let otherWin   = ref(null)
let sendParams = reactive({})
const openUrlWithRecord = (id, url) =&gt; {
  sendParams.id   = id;
  otherWin.value  = window.open(url);
}

const clear = () =&gt; {
  searchValue.value = \`\${searchScope.value}:\`
}

const searchID = async (filter) =&gt; {
  let id = filter[0]?.value || &#39;&#39;
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

const down = async () =&gt; {
  let downList = []
  for (let i = 1; i &lt;= Math.ceil(totals.value/5000); i++) {
    let res = await getWantedOrderList({
      page_params: {
        page: i,
        page_size: 5000
      },
      order_params: { name: &#39;create_time&#39;, direction: 0 },
      query_params: {}
    });
    let data = JSON.parse(res.data.data).data;
    downList = downList.concat(data)
  }
  let blob = new
  Blob([JSON.stringify(downList, null, 2)],{type:&#39;application/json,charset=utf-8;&#39;});
  let Link = document.createElement(&#39;a&#39;);
  Link.setAttribute(&#39;href&#39;, window.URL.createObjectURL(blob))
  Link.setAttribute(&#39;download&#39;, &#39;wanted-order.json&#39;)
  Link.style.display = &#39;none&#39;
  Link.click()
  // Link.download = &quot;wanted-order.txt&quot;;
  // Link.style.display = &#39;none&#39;;
  // \u5B57\u7B26\u5185\u5BB9\u8F6C\u53D8\u6210blob\u5730\u5740
  // let blob = new Blob(downList);
  // Link.href = URL.createObjectURL(blob);
  // \u89E6\u53D1\u70B9\u51FB
  // document.body.appendChild(Link);
  // Link.click();
  // \u7136\u540E\u79FB\u9664
  // document.body.removeChild(Link);
}

onMounted(() =&gt; {
  // \u76D1\u542Cwindow.open\u6253\u5F00\u7684\u5B50\u9875\u9762\u53D1\u9001\u8FC7\u6765\u7684\u6D88\u606F
  window.addEventListener(&#39;message&#39;, (e) =&gt; {
    if (e.data.cmd === &#39;DOMLoaded&#39;) {
      otherWin.value.postMessage({
        cmd    : &#39;wanted_order_src_id&#39;,
        content: sendParams.id
      }, &#39;*&#39;)
    }
  })
})
&lt;/script&gt;

&lt;style scoped&gt;
.ui.button {
  background: #3e91f7;
  color: white;
}

::v-deep .ui.form .inline.fields .field {
  padding-right: 4em;
}

/*::v-deep #search &gt; .ui.selection.dropdown option {*/
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
::v-deep .ui.form .inline.fields .field&gt;label {
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
&lt;/style&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div>`,2),a=[t];function v(u,r){return n(),e("div",d,a)}var m=i(s,[["render",v],["__file","wanted-order.html.vue"]]);export{m as default};
