<template>
    <div class="footer">
        <div class="container">
            <img :src="logoUrl" class="logo" alt="logo">
            <p>版权所有 &copy; 广州逆风科技有限公司</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FootSec',
    data() {
        return {
            logoUrl: require('@/assets/images/logo.png')
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    background: #252830;
    text-align: center;
    padding: 50px 0 50px 0;
    color: #fff;
    font-size: 14px;
    
    .logo {
        width: 45px;
    }
}
</style>
