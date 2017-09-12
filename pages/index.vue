<template>
  <div>
    <h1>Supporter l'art</h1>
    <h2>{{ title }}</h2>
    <h3>{{ baseline }}</h3>
    <h4>{{ company }}</h4>
  </div>
</template>

<script>
import { getIntroduction } from '../api/contentful'

export default {
  data: () => {
    return { title: '', baseline: '', company: '' }
  },
  asyncData () {
    return getIntroduction()
  }
}
</script>
