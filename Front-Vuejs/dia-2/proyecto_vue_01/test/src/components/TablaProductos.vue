<template>
  <div>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Estado</th>
      </tr>
      <tr v-for="item in productos" :key="item.id">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.estado }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaProductos",
  props: {
    productos: Array,
  },
};
</script>
<style scoped>
table,
tr,
td {
  border: 2px solid black;
  padding: 1rem;
  margin: auto;
}</style
>>
