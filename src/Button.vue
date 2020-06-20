<template>
    <button :class="`btn btn-${variant}`">
        <i :class="`fa fa-${icon}`"></i> {{ label }}
    </button>
</template>

<script>
    export default {
        name: 'VButton',
        props: {
            label: {
                type: String,
                required: true,
            },
            variant: {
                type: String,
                default: 'primary',
            },
            size: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'plus'
            }
        }
    }
</script>

<style scoped>
    @import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
    @import "./../node_modules/font-awesome/css/font-awesome.min.css";
</style>