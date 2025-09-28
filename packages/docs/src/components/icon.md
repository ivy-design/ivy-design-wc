# Icon 图标

:::tip 注意
图标来自 [element-plus/element-plus-icons](https://github.com/element-plus/element-plus-icons)
:::

## 基础用法

通过 `name` 来设置不同的图标

<ivy-icon name="download"></ivy-icon>
<ivy-icon name="edit" class="margin-left"></ivy-icon>
<ivy-icon name="reading" class="margin-left"></ivy-icon>

```html
<ivy-icon name="download"></ivy-icon>
<ivy-icon name="edit" class="margin-left"></ivy-icon>
<ivy-icon name="reading" class="margin-left"></ivy-icon>
```

## 旋转

添加 `spin` 属性来使 icon 旋转

<ivy-icon name="loading" spin></ivy-icon>
<ivy-icon name="refresh-right" spin class="margin-left"></ivy-icon>
<ivy-icon name="refresh" spin class="margin-left"></ivy-icon>

```html
<ivy-icon name="loading" spin></ivy-icon>
<ivy-icon name="refresh-right" spin class="margin-left"></ivy-icon>
<ivy-icon name="refresh" spin class="margin-left"></ivy-icon>
```

## 大小

添加 `size` 属性和直接设置 css 来设置大小，`size` 属性的优先级高

<ivy-icon name="loading" size="12px"></ivy-icon>
<ivy-icon name="loading" class="margin-left"></ivy-icon>
<ivy-icon name="loading" size="16px" class="margin-left"></ivy-icon>
<ivy-icon name="loading" size="18px" class="margin-left"></ivy-icon>
<ivy-icon name="loading" size="20px" class="margin-left"></ivy-icon>

```html
<ivy-icon name="loading" size="12px"></ivy-icon>
<ivy-icon name="loading" class="margin-left"></ivy-icon>
<ivy-icon name="loading" size="16px" class="margin-left"></ivy-icon>
<ivy-icon name="loading" size="18px" class="margin-left"></ivy-icon>
<ivy-icon name="loading" size="20px" class="margin-left"></ivy-icon>
```

## 颜色

添加 `color` 属性和直接设置 css 来设置颜色，`size` 属性的优先级高

<ivy-icon name="loading"></ivy-icon>
<ivy-icon name="loading" color="red" class="margin-left"></ivy-icon>
<ivy-icon name="loading" color="blue" class="margin-left"></ivy-icon>
<ivy-icon name="loading" color="pink" class="margin-left"></ivy-icon>
<ivy-icon name="loading" color="green" class="margin-left"></ivy-icon>

```html
<ivy-icon name="loading"></ivy-icon>
<ivy-icon name="loading" color="red" class="margin-left"></ivy-icon>
<ivy-icon name="loading" color="blue" class="margin-left"></ivy-icon>
<ivy-icon name="loading" color="pink" class="margin-left"></ivy-icon>
<ivy-icon name="loading" color="green" class="margin-left"></ivy-icon>
```

<!-- 增加注释，否则页面显示不完整 -->

## Api

### Attrs

| 属性名 | 说明                      | 类型     | 可选值 | 默认值 |
| ------ | ------------------------- | -------- | ------ | ------ |
| size   | 图标大小，合法的 css 单位 | `string` | -      | -      |
| color  | 图标颜色，合法的颜色值    | `string` | -      | -      |
| name   | 图标名字                  | `string` | -      | -      |

## 所有 icon

<div id="icons" :class="$style.icons">
<ivy-icon name="shopping-trolley"></ivy-icon>
<ivy-icon name="smoking"></ivy-icon>
<ivy-icon name="soccer"></ivy-icon>
<ivy-icon name="sold-out"></ivy-icon>
<ivy-icon name="sort"></ivy-icon>
<ivy-icon name="sort-down"></ivy-icon>
<ivy-icon name="sort-up"></ivy-icon>
<ivy-icon name="stamp"></ivy-icon>
<ivy-icon name="star"></ivy-icon>
<ivy-icon name="star-filled"></ivy-icon>
<ivy-icon name="stopwatch"></ivy-icon>
<ivy-icon name="success-filled"></ivy-icon>
<ivy-icon name="sugar"></ivy-icon>
<ivy-icon name="suitcase"></ivy-icon>
<ivy-icon name="suitcase-line"></ivy-icon>
<ivy-icon name="sunny"></ivy-icon>
<ivy-icon name="sunrise"></ivy-icon>
<ivy-icon name="sunset"></ivy-icon>
<ivy-icon name="switch"></ivy-icon>
<ivy-icon name="switch-button"></ivy-icon>
<ivy-icon name="switch-filled"></ivy-icon>
<ivy-icon name="takeaway-box"></ivy-icon>
<ivy-icon name="ticket"></ivy-icon>
<ivy-icon name="tickets"></ivy-icon>
<ivy-icon name="timer"></ivy-icon>
<ivy-icon name="toilet-paper"></ivy-icon>
<ivy-icon name="tools"></ivy-icon>
<ivy-icon name="top"></ivy-icon>
<ivy-icon name="top-left"></ivy-icon>
<ivy-icon name="top-right"></ivy-icon>
<ivy-icon name="trend-charts"></ivy-icon>
<ivy-icon name="trophy"></ivy-icon>
<ivy-icon name="trophy-base"></ivy-icon>
<ivy-icon name="turn-off"></ivy-icon>
<ivy-icon name="umbrella"></ivy-icon>
<ivy-icon name="unlock"></ivy-icon>
<ivy-icon name="upload"></ivy-icon>
<ivy-icon name="upload-filled"></ivy-icon>
<ivy-icon name="user"></ivy-icon>
<ivy-icon name="user-filled"></ivy-icon>
<ivy-icon name="van"></ivy-icon>
<ivy-icon name="video-camera"></ivy-icon>
<ivy-icon name="video-camera-filled"></ivy-icon>
<ivy-icon name="video-pause"></ivy-icon>
<ivy-icon name="video-play"></ivy-icon>
<ivy-icon name="view"></ivy-icon>
<ivy-icon name="wallet"></ivy-icon>
<ivy-icon name="wallet-filled"></ivy-icon>
<ivy-icon name="warning"></ivy-icon>
<ivy-icon name="warning-filled"></ivy-icon>
<ivy-icon name="warn-triangle-filled"></ivy-icon>
<ivy-icon name="watch"></ivy-icon>
<ivy-icon name="watermelon"></ivy-icon>
<ivy-icon name="wind-power"></ivy-icon>
<ivy-icon name="zoom-in"></ivy-icon>
<ivy-icon name="zoom-out"></ivy-icon>
<ivy-icon name="ice-cream"></ivy-icon>
<ivy-icon name="ice-drink"></ivy-icon>
<ivy-icon name="ice-tea"></ivy-icon>
<ivy-icon name="info-filled"></ivy-icon>
<ivy-icon name="iphone"></ivy-icon>
<ivy-icon name="key"></ivy-icon>
<ivy-icon name="knife-fork"></ivy-icon>
<ivy-icon name="lightning"></ivy-icon>
<ivy-icon name="link"></ivy-icon>
<ivy-icon name="list"></ivy-icon>
<ivy-icon name="loading"></ivy-icon>
<ivy-icon name="location"></ivy-icon>
<ivy-icon name="location-filled"></ivy-icon>
<ivy-icon name="location-information"></ivy-icon>
<ivy-icon name="lock"></ivy-icon>
<ivy-icon name="lollipop"></ivy-icon>
<ivy-icon name="magic-stick"></ivy-icon>
<ivy-icon name="magnet"></ivy-icon>
<ivy-icon name="male"></ivy-icon>
<ivy-icon name="management"></ivy-icon>
<ivy-icon name="map-location"></ivy-icon>
<ivy-icon name="medal"></ivy-icon>
<ivy-icon name="memo"></ivy-icon>
<ivy-icon name="menu"></ivy-icon>
<ivy-icon name="message"></ivy-icon>
<ivy-icon name="message-box"></ivy-icon>
<ivy-icon name="mic"></ivy-icon>
<ivy-icon name="microphone"></ivy-icon>
<ivy-icon name="milk-tea"></ivy-icon>
<ivy-icon name="minus"></ivy-icon>
<ivy-icon name="money"></ivy-icon>
<ivy-icon name="monitor"></ivy-icon>
<ivy-icon name="moon"></ivy-icon>
<ivy-icon name="moon-night"></ivy-icon>
<ivy-icon name="more"></ivy-icon>
<ivy-icon name="more-filled"></ivy-icon>
<ivy-icon name="mostly-cloudy"></ivy-icon>
<ivy-icon name="mouse"></ivy-icon>
<ivy-icon name="mug"></ivy-icon>
<ivy-icon name="mute"></ivy-icon>
<ivy-icon name="mute-notification"></ivy-icon>
<ivy-icon name="no-smoking"></ivy-icon>
<ivy-icon name="notebook"></ivy-icon>
<ivy-icon name="notification"></ivy-icon>
<ivy-icon name="odometer"></ivy-icon>
<ivy-icon name="office-building"></ivy-icon>
<ivy-icon name="open"></ivy-icon>
<ivy-icon name="operation"></ivy-icon>
<ivy-icon name="opportunity"></ivy-icon>
<ivy-icon name="orange"></ivy-icon>
<ivy-icon name="paperclip"></ivy-icon>
<ivy-icon name="partly-cloudy"></ivy-icon>
<ivy-icon name="pear"></ivy-icon>
<ivy-icon name="phone"></ivy-icon>
<ivy-icon name="phone-filled"></ivy-icon>
<ivy-icon name="picture"></ivy-icon>
<ivy-icon name="picture-filled"></ivy-icon>
<ivy-icon name="picture-rounded"></ivy-icon>
<ivy-icon name="pie-chart"></ivy-icon>
<ivy-icon name="place"></ivy-icon>
<ivy-icon name="platform"></ivy-icon>
<ivy-icon name="plus"></ivy-icon>
<ivy-icon name="pointer"></ivy-icon>
<ivy-icon name="position"></ivy-icon>
<ivy-icon name="postcard"></ivy-icon>
<ivy-icon name="pouring"></ivy-icon>
<ivy-icon name="present"></ivy-icon>
<ivy-icon name="price-tag"></ivy-icon>
<ivy-icon name="printer"></ivy-icon>
<ivy-icon name="promotion"></ivy-icon>
<ivy-icon name="quartz-watch"></ivy-icon>
<ivy-icon name="question-filled"></ivy-icon>
<ivy-icon name="rank"></ivy-icon>
<ivy-icon name="reading"></ivy-icon>
<ivy-icon name="reading-lamp"></ivy-icon>
<ivy-icon name="refresh"></ivy-icon>
<ivy-icon name="refresh-left"></ivy-icon>
<ivy-icon name="refresh-right"></ivy-icon>
<ivy-icon name="refrigerator"></ivy-icon>
<ivy-icon name="remove"></ivy-icon>
<ivy-icon name="remove-filled"></ivy-icon>
<ivy-icon name="right"></ivy-icon>
<ivy-icon name="scale-to-original"></ivy-icon>
<ivy-icon name="school"></ivy-icon>
<ivy-icon name="scissor"></ivy-icon>
<ivy-icon name="search"></ivy-icon>
<ivy-icon name="select"></ivy-icon>
<ivy-icon name="sell"></ivy-icon>
<ivy-icon name="semi-select"></ivy-icon>
<ivy-icon name="service"></ivy-icon>
<ivy-icon name="setting"></ivy-icon>
<ivy-icon name="set-up"></ivy-icon>
<ivy-icon name="share"></ivy-icon>
<ivy-icon name="ship"></ivy-icon>
<ivy-icon name="shop"></ivy-icon>
<ivy-icon name="shopping-bag"></ivy-icon>
<ivy-icon name="shopping-cart"></ivy-icon>
<ivy-icon name="shopping-cart-full"></ivy-icon>
<ivy-icon name="circle-check"></ivy-icon>
<ivy-icon name="circle-close"></ivy-icon>
<ivy-icon name="circle-close-filled"></ivy-icon>
<ivy-icon name="circle-plus"></ivy-icon>
<ivy-icon name="circle-plus-filled"></ivy-icon>
<ivy-icon name="clock"></ivy-icon>
<ivy-icon name="close"></ivy-icon>
<ivy-icon name="close-bold"></ivy-icon>
<ivy-icon name="cloudy"></ivy-icon>
<ivy-icon name="coffee"></ivy-icon>
<ivy-icon name="coffee-cup"></ivy-icon>
<ivy-icon name="coin"></ivy-icon>
<ivy-icon name="cold-drink"></ivy-icon>
<ivy-icon name="collection"></ivy-icon>
<ivy-icon name="collection-tag"></ivy-icon>
<ivy-icon name="comment"></ivy-icon>
<ivy-icon name="compass"></ivy-icon>
<ivy-icon name="connection"></ivy-icon>
<ivy-icon name="coordinate"></ivy-icon>
<ivy-icon name="copy-document"></ivy-icon>
<ivy-icon name="cpu"></ivy-icon>
<ivy-icon name="credit-card"></ivy-icon>
<ivy-icon name="crop"></ivy-icon>
<ivy-icon name="d-arrow-left"></ivy-icon>
<ivy-icon name="d-arrow-right"></ivy-icon>
<ivy-icon name="data-analysis"></ivy-icon>
<ivy-icon name="data-board"></ivy-icon>
<ivy-icon name="data-line"></ivy-icon>
<ivy-icon name="d-caret"></ivy-icon>
<ivy-icon name="delete"></ivy-icon>
<ivy-icon name="delete-filled"></ivy-icon>
<ivy-icon name="delete-location"></ivy-icon>
<ivy-icon name="dessert"></ivy-icon>
<ivy-icon name="discount"></ivy-icon>
<ivy-icon name="dish"></ivy-icon>
<ivy-icon name="dish-dot"></ivy-icon>
<ivy-icon name="document"></ivy-icon>
<ivy-icon name="document-add"></ivy-icon>
<ivy-icon name="document-checked"></ivy-icon>
<ivy-icon name="document-copy"></ivy-icon>
<ivy-icon name="document-delete"></ivy-icon>
<ivy-icon name="document-remove"></ivy-icon>
<ivy-icon name="download"></ivy-icon>
<ivy-icon name="drizzling"></ivy-icon>
<ivy-icon name="edit"></ivy-icon>
<ivy-icon name="edit-pen"></ivy-icon>
<ivy-icon name="eleme"></ivy-icon>
<ivy-icon name="eleme-filled"></ivy-icon>
<ivy-icon name="element-plus"></ivy-icon>
<ivy-icon name="expand"></ivy-icon>
<ivy-icon name="failed"></ivy-icon>
<ivy-icon name="female"></ivy-icon>
<ivy-icon name="files"></ivy-icon>
<ivy-icon name="film"></ivy-icon>
<ivy-icon name="filter"></ivy-icon>
<ivy-icon name="finished"></ivy-icon>
<ivy-icon name="first-aid-kit"></ivy-icon>
<ivy-icon name="flag"></ivy-icon>
<ivy-icon name="fold"></ivy-icon>
<ivy-icon name="folder"></ivy-icon>
<ivy-icon name="folder-add"></ivy-icon>
<ivy-icon name="folder-checked"></ivy-icon>
<ivy-icon name="folder-delete"></ivy-icon>
<ivy-icon name="folder-opened"></ivy-icon>
<ivy-icon name="folder-remove"></ivy-icon>
<ivy-icon name="food"></ivy-icon>
<ivy-icon name="football"></ivy-icon>
<ivy-icon name="fork-spoon"></ivy-icon>
<ivy-icon name="fries"></ivy-icon>
<ivy-icon name="full-screen"></ivy-icon>
<ivy-icon name="goblet"></ivy-icon>
<ivy-icon name="goblet-full"></ivy-icon>
<ivy-icon name="goblet-square"></ivy-icon>
<ivy-icon name="goblet-square-full"></ivy-icon>
<ivy-icon name="gold-medal"></ivy-icon>
<ivy-icon name="goods"></ivy-icon>
<ivy-icon name="goods-filled"></ivy-icon>
<ivy-icon name="grape"></ivy-icon>
<ivy-icon name="grid"></ivy-icon>
<ivy-icon name="guide"></ivy-icon>
<ivy-icon name="handbag"></ivy-icon>
<ivy-icon name="headset"></ivy-icon>
<ivy-icon name="help"></ivy-icon>
<ivy-icon name="help-filled"></ivy-icon>
<ivy-icon name="hide"></ivy-icon>
<ivy-icon name="histogram"></ivy-icon>
<ivy-icon name="home-filled"></ivy-icon>
<ivy-icon name="hot-water"></ivy-icon>
<ivy-icon name="house"></ivy-icon>
<ivy-icon name="ice-cream-round"></ivy-icon>
<ivy-icon name="ice-cream-square"></ivy-icon>
<ivy-icon name="add-location"></ivy-icon>
<ivy-icon name="aim"></ivy-icon>
<ivy-icon name="alarm-clock"></ivy-icon>
<ivy-icon name="apple"></ivy-icon>
<ivy-icon name="arrow-down"></ivy-icon>
<ivy-icon name="arrow-down-bold"></ivy-icon>
<ivy-icon name="arrow-left"></ivy-icon>
<ivy-icon name="arrow-left-bold"></ivy-icon>
<ivy-icon name="arrow-right"></ivy-icon>
<ivy-icon name="arrow-right-bold"></ivy-icon>
<ivy-icon name="arrow-up"></ivy-icon>
<ivy-icon name="arrow-up-bold"></ivy-icon>
<ivy-icon name="avatar"></ivy-icon>
<ivy-icon name="back"></ivy-icon>
<ivy-icon name="baseball"></ivy-icon>
<ivy-icon name="basketball"></ivy-icon>
<ivy-icon name="bell"></ivy-icon>
<ivy-icon name="bell-filled"></ivy-icon>
<ivy-icon name="bicycle"></ivy-icon>
<ivy-icon name="bottom"></ivy-icon>
<ivy-icon name="bottom-left"></ivy-icon>
<ivy-icon name="bottom-right"></ivy-icon>
<ivy-icon name="bowl"></ivy-icon>
<ivy-icon name="box"></ivy-icon>
<ivy-icon name="briefcase"></ivy-icon>
<ivy-icon name="brush"></ivy-icon>
<ivy-icon name="brush-filled"></ivy-icon>
<ivy-icon name="burger"></ivy-icon>
<ivy-icon name="calendar"></ivy-icon>
<ivy-icon name="camera"></ivy-icon>
<ivy-icon name="camera-filled"></ivy-icon>
<ivy-icon name="caret-bottom"></ivy-icon>
<ivy-icon name="caret-left"></ivy-icon>
<ivy-icon name="caret-right"></ivy-icon>
<ivy-icon name="caret-top"></ivy-icon>
<ivy-icon name="cellphone"></ivy-icon>
<ivy-icon name="chat-dot-round"></ivy-icon>
<ivy-icon name="chat-dot-square"></ivy-icon>
<ivy-icon name="chat-line-round"></ivy-icon>
<ivy-icon name="chat-line-square"></ivy-icon>
<ivy-icon name="chat-round"></ivy-icon>
<ivy-icon name="chat-square"></ivy-icon>
<ivy-icon name="check"></ivy-icon>
<ivy-icon name="checked"></ivy-icon>
<ivy-icon name="cherry"></ivy-icon>
<ivy-icon name="chicken"></ivy-icon>
<ivy-icon name="chrome-filled"></ivy-icon>
<ivy-icon name="circle-check-filled"></ivy-icon>
</div>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
        document.getElementById('icons').addEventListener('click', ev=>{
        const target = ev.target;
        const nodeName = target.nodeName;
        const tagName = nodeName.toLowerCase();
        if(tagName !== 'ivy-icon') return;
        const icon = `<${tagName} name="${target.getAttribute('name')}"></${tagName}>`;

        if (window.navigator.clipboard) {
            window.navigator.clipboard
                .writeText(icon)
                .then(
                    () => {
                        alert(`已复制到粘贴板：${icon}`);
                    },
                    () => {
                        alert(`复制到粘贴板失败：${icon}`);
                    }
                )
                .catch(e => {
                    throw e;
                });
        } else {
            alert('浏览器不支持，请切换到chrome浏览器')
        }

    }, false)
})

</script>
<style module>
.icons {
    display:flex;
    flex-wrap: wrap;
}
.icons > ivy-icon {
    margin: 10px;
    font-size: 20px;
}
</style>
