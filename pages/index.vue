<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <router-link to="/about">About page</router-link>
  </div>
</template>

<script>
export default {
  data: () => {
    return { name: 'David ' }
  }
}
</script>
