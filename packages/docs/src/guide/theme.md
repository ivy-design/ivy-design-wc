# 主题设置

```css
:root {
  --ivy-color-white: #ffffff;
  --ivy-color-black: #000000;
  --ivy-color-primary: #409eff;
  --ivy-color-primary-light-1: #53a8ff;
  --ivy-color-primary-light-2: #66b1ff;
  --ivy-color-primary-light-3: #79bbff;
  --ivy-color-primary-light-4: #8cc5ff;
  --ivy-color-primary-light-5: #a0cfff;
  --ivy-color-primary-light-6: #b3d8ff;
  --ivy-color-primary-light-7: #c6e2ff;
  --ivy-color-primary-light-8: #d9ecff;
  --ivy-color-primary-light-9: #ecf5ff;
  --ivy-color-primary-dart-2: #337ecc;
  --ivy-color-success: #67c23a;
  --ivy-color-success-light-1: #76c84e;
  --ivy-color-success-light-2: #85ce61;
  --ivy-color-success-light-3: #95d475;
  --ivy-color-success-light-4: #a4da89;
  --ivy-color-success-light-5: #b3e19d;
  --ivy-color-success-light-6: #c2e7b0;
  --ivy-color-success-light-7: #d1edc4;
  --ivy-color-success-light-8: #e1f3d8;
  --ivy-color-success-light-9: #f0f9eb;
  --ivy-color-success-dart-2: #529b2e;
  --ivy-color-warning: #e6a23c;
  --ivy-color-warning-light-1: #e9ab50;
  --ivy-color-warning-light-2: #ebb563;
  --ivy-color-warning-light-3: #eebe77;
  --ivy-color-warning-light-4: #f0c78a;
  --ivy-color-warning-light-5: #f3d19e;
  --ivy-color-warning-light-6: #f5dab1;
  --ivy-color-warning-light-7: #f8e3c5;
  --ivy-color-warning-light-8: #faecd8;
  --ivy-color-warning-light-9: #fdf6ec;
  --ivy-color-warning-dart-2: #b88230;
  --ivy-color-danger: #f56c6c;
  --ivy-color-danger-light-1: #f67b7b;
  --ivy-color-danger-light-2: #f78989;
  --ivy-color-danger-light-3: #f89898;
  --ivy-color-danger-light-4: #f9a7a7;
  --ivy-color-danger-light-5: #fab6b6;
  --ivy-color-danger-light-6: #fbc4c4;
  --ivy-color-danger-light-7: #fcd3d3;
  --ivy-color-danger-light-8: #fde2e2;
  --ivy-color-danger-light-9: #fef0f0;
  --ivy-color-danger-dart-2: #c45656;
  --ivy-color-error: #f56c6c;
  --ivy-color-error-light-1: #f67b7b;
  --ivy-color-error-light-2: #f78989;
  --ivy-color-error-light-3: #f89898;
  --ivy-color-error-light-4: #f9a7a7;
  --ivy-color-error-light-5: #fab6b6;
  --ivy-color-error-light-6: #fbc4c4;
  --ivy-color-error-light-7: #fcd3d3;
  --ivy-color-error-light-8: #fde2e2;
  --ivy-color-error-light-9: #fef0f0;
  --ivy-color-error-dart-2: #c45656;
  --ivy-color-info: #909399;
  --ivy-color-info-light-1: #9b9ea3;
  --ivy-color-info-light-2: #a6a9ad;
  --ivy-color-info-light-3: #b1b3b8;
  --ivy-color-info-light-4: #bcbec2;
  --ivy-color-info-light-5: #c8c9cc;
  --ivy-color-info-light-6: #d3d4d6;
  --ivy-color-info-light-7: #dedfe0;
  --ivy-color-info-light-8: #e9e9eb;
  --ivy-color-info-light-9: #f4f4f5;
  --ivy-color-info-dart-2: #73767a;
  --ivy-text-color-primary: #303133;
  --ivy-text-color-regular: #606266;
  --ivy-text-color-secondary: #909399;
  --ivy-text-color-placeholder: #a8abb2;
  --ivy-text-color-disabled: #c0c4cc;
  --ivy-fill-color: #f0f2f5;
  --ivy-fill-color-light: #f5f7fa;
  --ivy-fill-color-lighter: #fafafa;
  --ivy-fill-color-extra-light: #fafcff;
  --ivy-border-color: #dcdfe6;
  --ivy-border-color-light: #e4e7ed;
  --ivy-border-color-lighter: #ebeef5;
  --ivy-border-color-extra-light: #f2f6fc;
  --ivy-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08);
  --ivy-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04), 0px 8px 20px rgba(0, 0, 0, 0.08);
  --ivy-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, 0.12);
  --ivy-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, 0.12);
  --ivy-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, 0.08), 0px 12px 32px
      rgba(0, 0, 0, 0.12), 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
  --ivy-font-size: 14px;
  --ivy-font-size-small: 12px;
  --ivy-timeline-node-size: 12px;
  --ivy-timeline-node-size-large: 14px;
  --ivy-border-radius: 4px;
  --ivy-border-radius-medium: 8px;
  --ivy-all-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  --ivy-fade-transition: opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  --ivy-fade-linear-transition: opacity 0.2s linear;
  --ivy-md-fade-transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1) opacity
    0.3s cubic-bezier(0.23, 1, 0.32, 1);
  --ivy-border-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  --ivy-color-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
```
