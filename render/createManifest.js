const fs = require('fs');
const path = require('path');

const manifestContent = `<?xml version="1.0" encoding="utf-8"?>
<xsf:manifest xmlns:xsf="http://schemas.microsoft.com/office/infopath/2003/solutionDefinition"
              xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xsf:solution>
    <xsf:name>SampleForm</xsf:name>
    <xsf:description>这是一个示例表单，用于展示 InfoPath 表单的基本配置。</xsf:description>
    <xsf:author>John Doe</xsf:author>
    <xsf:version>1.0</xsf:version>
    <xsf:dataConnections>
      <xsf:dataConnection>
        <xsf:name>SampleDataConnection</xsf:name>
        <xsf:connectionString>http://example.com/api</xsf:connectionString>
      </xsf:dataConnection>
    </xsf:dataConnections>
    <xsf:formFields>
      <xsf:formField>
        <xsf:name>Field1</xsf:name>
        <xsf:type>text</xsf:type>
      </xsf:formField>
      <xsf:formField>
        <xsf:name>Field2</xsf:name>
        <xsf:type>date</xsf:type>
      </xsf:formField>
    </xsf:formFields>
  </xsf:solution>
</xsf:manifest>`;

const fileName = 'SampleForm.manifest.xsf';
const filePath = path.join(__dirname, 'out', fileName);

fs.writeFile(filePath, manifestContent, 'utf8', (err) => {
    if (err) {
        console.error('写入文件时出错:', err);
    } else {
        console.log(`文件已成功生成: ${filePath}`);
    }
});
