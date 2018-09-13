<template>
    <div class="navbar">
        <div class="container">
            <a class="navbar-brand logo pull-left" href="/"><img :src="logoUrl" alt="logo"><span> 中国电信</span></a>
            <ul class="nav-list pull-right">
                <li><a href="tel:156-2647-0703"><strong><i class="fa fa-comments-o"></i> ddd</strong></a></li>
                <li><a href="tel:156-2647-0703"><strong><i class="fa fa-phone"></i> 156-2647-0703</strong></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    data() {
        return {
            logoUrl: require('@/assets/images/logo.png')
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    background-color: #252830;
    color:#fff;
    
    .navbar-brand {
        height: 50px;
        line-height: 50px;
        padding: 0;
        margin: 0;
        
        span {
            font-size: 24px;
            font-family: 'aircut', STXihei, SimHei, sans-serif;
            margin: 0;
            padding: 0;
            letter-spacing: 2px;
            color: #00c0ff;
        }
        
        img {
            width: 26px;
            height: 26px;
            vertical-align: middle;
        }
    }
    
    .nav-list {
        li {
            float: left;
            margin-left: 10px;
            
            a {
                color: #f5f5f5;
            }
        }
    }
}
</style>
