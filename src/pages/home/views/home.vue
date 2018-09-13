<template>
    <div>
        <div class="inner-container bg000" v-for="con in courseList">
            <div class="container">
                <h3 class="title">
                    <span class="tit-icon-lt"></span><strong>{{con.title}}</strong><span class="tit-icon-rt"></span>
                </h3>
                <div class="content">
                    <div class="course-card-container" v-for="item in con.list">
                        <a target="_blank" class="course-card" href="#">
                            <div class="course-card-top">
                                <img :src="item.imgUrl" class="course-banner" alt="">
                                <div class="course-label">
                                    <label v-for="la in item.label">{{la}}</label>
                                </div>
                            </div>
                            <div class="course-card-content">
                                <h3 class="course-card-name">{{item.name}}</h3>
                                <div class="course-card-info">
                                    <span class="le" v-for="le in item.level">{{le}}</span>
                                    <span class="course-star-box">
                                        <i :class="{'fa-star-o': !star, 'fa-star': star}" class="fa" v-for="star in item.star"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import course from '@/data/course'

export default {
    name: 'home-page',
    data() {
        return {
            courseList: null
        }
    },
    mounted: function() {
        this.courseList = course.result;
    }
}
</script>

<style lang="scss">
.inner-container {
    padding: 30px 0;
}

.bg000 {
    box-shadow: 0 2px 4px 0 rgba(7,17,27,.06);
}

.title {
    position: relative;
    font-size: 14px;
    color: #93999F;
    letter-spacing: .6px;
    line-height: 36px;
    text-align: center;
    
    .tit-icon-lt {
        margin-right: 24px;
        display: inline-block;
        vertical-align: bottom;
        width: 56px;
        height: 36px;
        background: url('../../../assets/images/icon.png') no-repeat;
        background-size: 100%;
        background-position: center -72px;
    }
    
    .tit-icon-rt {
        margin-left: 24px;
        display: inline-block;
        vertical-align: bottom;
        width: 56px;
        height: 36px;
        background: url('../../../assets/images/icon.png') no-repeat;
        background-size: 100%;
        background-position: center -108px;
    }
}

.content {
    margin-top: 24px;
    margin-left: -18px;
    overflow: hidden;
}

.course-card-container {
    float: left;
    margin-left: 18px;
    border-radius: 4px;
    margin-bottom: 12px;
    width: 216px;
    height: 200px;
    position: relative;
    transition: .3s all linear;
    overflow: auto;
    
    .course-card-top {
        width: 216px;
        height: 120px;
        position: relative;
        border-radius: 8px;
        transition: all .3s;
        
        .course-banner {
            width: 100%;
            height: 100%;
            background-color: #f3f5f7;
            border-radius: 8px;
        }
        
        .course-label {
            position: absolute;
            bottom: 6px;
            left: 8px;
            font-size: 12px;
            color: #FFF;
            line-height: 16px;
            
            label {
                display: inline-block;
                background: rgba(7,17,27,.4);
                border-radius: 12px;
                padding: 4px 8px;
                margin-bottom: 2px;
                margin-right: 5px;
                font-weight: 200;
            }
        }
    }
    
    .course-card-content {
        padding: 12px 8px;
        
        .course-card-name {
            font-size: 16px;
            color: #07111B;
            line-height: 24px;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 46px;
            transition: all .3s;
        }
        
        .course-card-info {
            font-size: 12px;
            color: #93999F;
            line-height: 24px;
            margin-top: 8px;
            font-weight: 400;
            
            .le {
                margin-right: 5px;
            }
        }
    }
}
</style>
