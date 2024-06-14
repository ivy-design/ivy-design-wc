---
sidebar: false
layout: home
---

# 组件预览

## Icon 图标

<ivy-icon name="download"></ivy-icon>
<ivy-icon name="edit" class="margin-left"></ivy-icon>
<ivy-icon name="reading" class="margin-left"></ivy-icon>

## Button 按钮

<ivy-button>默认</ivy-button>
<ivy-button type="primary">主要</ivy-button>
<ivy-button type="success">成功</ivy-button>
<ivy-button type="warning">警告</ivy-button>
<ivy-button type="danger">错误</ivy-button>
<ivy-button type="info">提示</ivy-button>

## Link 链接

<ivy-link href="https://www.baidu.com">default</ivy-link>
<ivy-link type="primary" class="margin-left">primary</ivy-link>
<ivy-link type="success" class="margin-left">success</ivy-link>
<ivy-link type="warning" class="margin-left">warning</ivy-link>
<ivy-link type="danger" class="margin-left">danger</ivy-link>
<ivy-link type="info" class="margin-left">info</ivy-link>

## Text 文字

<ivy-text>default</ivy-text>
<ivy-text type="primary" class="margin-left">primary</ivy-text>
<ivy-text type="success" class="margin-left">success</ivy-text>
<ivy-text type="warning" class="margin-left">warning</ivy-text>
<ivy-text type="danger" class="margin-left">danger</ivy-text>
<ivy-text type="info" class="margin-left">info</ivy-text>

## Switch

<ivy-switch checked></ivy-switch>
<ivy-switch class="margin-left"></ivy-switch>

## Radio

<ivy-radio-group value="1">
<ivy-radio label="1" check>苹果</ivy-radio>
<ivy-radio label="2">橘子</ivy-radio>
<ivy-radio label="3">香蕉</ivy-radio>
</ivy-radio-group>

## Checkbox

<ivy-checkbox-group>
    <ivy-checkbox label="1" checked>苹果</ivy-checkbox>
    <ivy-checkbox label="2">橘子</ivy-checkbox>
    <ivy-checkbox label="3">香蕉</ivy-checkbox>
</ivy-checkbox-group>

## Tag 标签

<ivy-tag type="primary">primary</ivy-tag>
<ivy-tag type="success">success</ivy-tag>
<ivy-tag type="warning">warning</ivy-tag>
<ivy-tag type="danger">danger</ivy-tag>
<ivy-tag type="info">info</ivy-tag>

## Badge

<ivy-badge value="12">
    <ivy-button>评论</ivy-button>
</ivy-badge>
<ivy-badge value="10" class="margin-left-large">
    <ivy-button>踩</ivy-button>
</ivy-badge>
<ivy-badge value="22" class="margin-left-large">
    <ivy-button>点赞</ivy-button>
</ivy-badge>

## Collapse 折叠面板

<ivy-collapse>
    <ivy-collapse-item index="1" header="史蒂夫·乔布斯">
        <div>史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="2" header="斯蒂夫·盖瑞·沃兹尼亚克">
        <div>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</div>
    </ivy-collapse-item>
    <ivy-collapse-item index="3" header="乔纳森·伊夫">
        <div>乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</div>
    </ivy-collapse-item>
</ivy-collapse>

## Details

<ivy-details summary="浣溪沙">
    十八年来坠世间，吹花嚼蕊弄冰弦，多情情寄阿谁边？紫玉钗斜灯影背，红绵粉冷枕函边。相看好处却无言。
</ivy-details>

## Timeline

<ivy-timeline>
  <ivy-timeline-item timestamp="2020-8-12" type="primary">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-9-12" type="success">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-10-12" type="warning">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-11-12" type="danger">
  本周美国大选公布结果
  </ivy-timeline-item>
  <ivy-timeline-item timestamp="2020-12-12" type="info">
  本周美国大选公布结果
  </ivy-timeline-item>
</ivy-timeline>

## Steps

<ivy-steps>
    <ivy-step header="验证手机号"></ivy-step>
    <ivy-step header="修改密码"></ivy-step>
    <ivy-step header="完成"></ivy-step>
</ivy-steps>

## Rate

<ivy-rate value="2"></ivy-rate>

## Avatar

<ivy-space size="custom" gap="24px">
<ivy-avatar content="User"></ivy-avatar>
<ivy-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></ivy-avatar>
<ivy-avatar><ivy-icon name="user" size="24px"></ivy-icon></ivy-avatar>
</ivy-space>

## Tip

<ivy-tip type="info">主要消息提示的文案</ivy-tip>
<ivy-tip type="success" class="margin-top">成功消息提示的文案</ivy-tip>
<ivy-tip type="warning" class="margin-top">警告消息提示的文案</ivy-tip>
<ivy-tip type="danger" class="margin-top">错误消息提示的文案</ivy-tip>

## Circle

<ivy-circle value="60">60%</ivy-circle>
<ivy-circle value="100" status="success"><ivy-icon name="check" color="var(--ivy-color-success)" size="30px"></ivy-icon></ivy-circle>
<ivy-circle value="60" status="danger"><ivy-icon name="close" color="var(--ivy-color-danger)" size="30px"></ivy-icon></ivy-circle>
