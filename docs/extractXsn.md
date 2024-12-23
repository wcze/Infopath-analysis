# extractXsn 模块说明

本文档描述了 `extractXsn.js` 文件中 `parseXSN` 函数的功能和使用方法。

## 函数说明

### parseXSN

- **描述**: 解析 XSN 文件并提取其中的 `template.xml` 和 `manifest.xsf` 文件，解析它们的内容并输出 JSON 格式。
- **参数**: 
  - `filePath` (string): XSN 文件的路径。

### 使用方法

1. 确保 XSN 文件存在于指定路径。
2. 调用 `parseXSN` 函数并传入 XSN 文件路径。

```javascript
const path = require('path');
const { parseXSN } = require('./extractXsn');

const xsnFilePath = path.join(__dirname, 'template', 'default', 'DEMO.xsn');
parseXSN(xsnFilePath);
```

## 依赖

- `fs`: 文件系统模块，用于读取和写入文件。
- `path`: 路径模块，用于处理和转换文件路径。
- `adm-zip`: 用于解压缩 XSN 文件。
- `xml2js`: 用于解析 XML 文件。

## 错误处理

- 如果读取 `template.xml` 或 `manifest.xsf` 文件时发生错误，会在控制台输出错误信息。
- 如果解析 `template.xml` 或 `manifest.xsf` 文件时发生错误，会在控制台输出错误信息。

## 示例输出

解析完成后，控制台会输出解析后的 JSON 数据。

```json
{
  "template": {
    // ...template.xml 的 JSON 数据...
  },
  "manifest": {
    // ...manifest.xsf 的 JSON 数据...
  }
}
```
