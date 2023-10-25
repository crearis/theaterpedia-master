<script setup lang="ts">
import { QueryProductVariantArgs, ProductVariantQueryResponse, MutationLoginArgs, LoginMutationResponse } from '~/graphql'
import { QueryName } from '~/server/queries';
import { MutationName } from '~/server/mutations';

const { $sdk } = useNuxtApp();

onMounted(async () => {
  const data = await $sdk().odoo.mutation<MutationLoginArgs, LoginMutationResponse>({ mutationName: MutationName.LoginMutation }, {
    email: "ergap@odoo.com",
    password: "123"
  });

  console.log(data);


  const { data: asa } = await $sdk().odoo.query<QueryProductVariantArgs, ProductVariantQueryResponse>({ queryName: QueryName.LoadUserQuery }, {});
})



</script>

<template>
  <div>
    <button @click="go">Go</button>
      <div class="prose">
        <h1>H1</h1>
        <h2>H2</h2>
        <h3>H3</h3>
        <h4>H4</h4>
      </div>
    <MainBanner />

  </div>
</template>
