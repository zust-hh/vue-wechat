<template>
  <div>
    <a-table
      :columns="columns"
      :rowKey="record => record.href"
      :dataSource="listData"
      :pagination="pagination"
      :loading="false"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="item, record">
          <router-link :to="record.href">{{item.title}}</router-link>
      </template>
      <template slot="href" slot-scope="text">
          <div>Content {{text}}</div>
      </template>
    </a-table>
  </div>
</template>

<script>
import Vue from "vue";
import { Table, message } from "ant-design-vue";

Vue.use(Table).use(message);

const columns = [
  {
    title: "Name",
    width: "20%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "href",
    dataIndex: "href",
    scopedSlots: { customRender: 'href' },
  }
];

const listDatax = [];
for (let i = 0; i < 23; i++) {
  listDatax.push({
    href: `/list/${i}`,
    title: `ant design vue part ${i}`
  });
}

export default {
  data() {
    return {
      listData: listDatax.slice(0, 8),
      loading: false,
      columns,
      pagination: {
        onChange: page => {
          message.info(page);
        },
        pageSize: 8,
        total: 23
      }
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    async fetch (params = {}) {
      this.loading = true;

      // const result = await this.$http.get('/');
      // console.log(result);

      const curPage = params.page * 8;
      const pagination = { ...this.pagination };
      pagination.total = 23;
      this.loading = false;
      this.listData = listDatax.slice(curPage - 8, curPage );
      this.pagination = pagination;
    }
  }
};
</script>

<style>
.list-item {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
