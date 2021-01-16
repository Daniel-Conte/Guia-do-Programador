<template>
    <div>
        <span>{{ name }}</span>
        <span>{{ amount }}</span>
    </div>
</template>

<script>
export default {
    name: 'Pill',
    props: ['name', 'amount']
}
</script>

<style>

</style>