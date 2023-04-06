<script setup lang="ts">
import { ref } from 'vue'

const value = ref([1, 2])
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    </header>

    <main>
        <ivy-collapse :model-value="value">
            <ivy-collapse-item header="史蒂夫·乔布斯">
                <div>
                    史蒂夫·乔布斯（Steve
                    Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                </div>
            </ivy-collapse-item>
            <ivy-collapse-item header="盖瑞·沃兹尼亚克">
                <div>
                    斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                    Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                    Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                </div>
            </ivy-collapse-item>
            <ivy-collapse-item header="乔纳森·伊夫">
                <div>
                    乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                </div>
            </ivy-collapse-item>
        </ivy-collapse>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

ivy-tooltip {
    --ivy-tooltip-background-color: rgba(70, 76, 91, 0.9);
}
</style>
