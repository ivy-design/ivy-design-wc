# TimeSelect 时间选择

用于选择或输入日期

可用时间范围是 00:00-23:59

## 固定时间点

提供几个固定的时间点供用户选择

使用 el-time-select 标签，然后通过 start、end 和 step 指定起始时间，结束时间和步长。

<ivy-time-select start="08:30" step="01:15" end="18:30" placeholder="Select time"></ivy-time-select>
