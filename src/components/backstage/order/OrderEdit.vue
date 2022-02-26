<template>
  <div class="flex items-center mb-4">
    <h2 class="mr-2 text-lg">訂單編號：</h2>
    <p>{{ data.id }}</p>
  </div>
  <form action="" @submit.prevent="editOrderFrom">
    <div class="mb-3">
      <label for="name" class="mb-2">姓名：</label>
      <input
        type="text"
        id="name"
        v-model="data.user.name"
        class="border-gray-400 input"
        :class="errorType === 'name' ? 'border-red-400' : ''"
      />
    </div>
    <div class="mb-3">
      <label for="phone">電話：</label>
      <input
        type="tel"
        id="phone"
        v-model="data.user.tel"
        class="border-gray-400 input"
        :class="errorType === 'phone' ? 'border-red-400' : ''"
      />
    </div>
    <div class="mb-3">
      <label for="email">Email：</label>
      <input
        type="text"
        id="email"
        v-model="data.user.email"
        class="border-gray-400 input"
        :class="errorType === 'email' ? 'border-red-400' : ''"
      />
    </div>
    <div class="mb-3">
      <label for="address">地址：</label>
      <input
        type="text"
        id="address"
        v-model="data.user.address"
        class="border-gray-400 input"
        :class="errorType === 'address' ? 'border-red-400' : ''"
      />
    </div>
    <div class="mb-3">
      <label for="message">留言：</label>
      <input
        type="text"
        id="message"
        v-model="data.message"
        class="border-gray-400 input"
        :class="errorType === 'message' ? 'border-red-400' : ''"
      />
    </div>
    <div class="mb-6">
      <label for="isPaid" class="mr-3">是否付款</label>
      <input type="checkbox" id="isPaid" v-model="data.is_paid" />
    </div>
    <div class="flex justify-between gap-4">
      <base-btn red-outline class="w-1/2" @click="closeEditOrder">取消</base-btn>
      <base-btn submit class="w-1/2">送出</base-btn>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    editOrder: {
      type: Object,
      relative: true,
    },
  },
  emits: ['close-edit-order', 'edit-order-data'],
  data() {
    return {
      data: {},
      errorType: '',
    };
  },
  methods: {
    closeEditOrder() {
      this.$emit('close-edit-order');
    },
    editOrderFrom() {
      if (this.data.user.name === '') {
        this.errorType = 'name';
        return;
      }
      if (!this.phoneNumber(this.data.user.tel)) {
        this.errorType = 'phone';
        return;
      }
      if (!this.email(this.data.user.email)) {
        this.errorType = 'email';
        return;
      }
      if (this.data.user.address === '' || this.data.user.address.length < 6) {
        this.errorType = 'address';
        return;
      }
      this.$emit('edit-order-data', this.data);
      this.closeEditOrder();
    },
    phoneNumber(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value);
    },
    email(value) {
      const email = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return email.test(value);
    },
  },
  created() {
    this.data = JSON.parse(JSON.stringify(this.editOrder));
  },
};
</script>

<style lang="postcss" scoped>
.input {
  @apply w-full px-2 py-1 mt-2 bg-gray-200 border-2 rounded-md;
}
</style>
