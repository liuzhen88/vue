<template>
    <div id="apps">
        <router-view></router-view>
    </div>
</template>

<script>
import Test from './components/test';
import Headers from './components/header';

export default {
    name:'appss',
    components: {
        Test,
        Headers
    }
}
</script>
