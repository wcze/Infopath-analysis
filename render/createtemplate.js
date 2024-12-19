const fs = require('fs');
const path = require('path');

const templateXML = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-infoPathSolution name="urn:schemas-microsoft-com:office:infopath:exampleSolution:-myXSD-2020-12-19T12-00-00" href="manifest.xsf" solutionVersion="1.0.0.192" productVersion="15.0.0" PIVersion="1.0.0.0" ?>
<?mso-application progid="InfoPath.Document" versionProgid="InfoPath.Document.3"?>
<my:DEMO xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:my="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-12-19T12:00:00" xmlns:xd="http://schemas.microsoft.com/office/infopath/2003">
  <my:fieldName></my:fieldName>
  <my:fieldAge></my:fieldAge>

  <my:groupAddressList>
      <my:fieldStreet></my:fieldStreet>
      <my:fieldCity></my:City>
  </my:groupAddressList>

  <my:groupPhoneNumberList>
    <my:fieldPhoneNumber></my:fieldPhoneNumber>
  </my:groupPhoneNumberList>
</my:DEMO>`;

const filePath = path.join(__dirname, 'out', 'template.xml');

fs.writeFile(filePath, templateXML, 'utf8', (err) => {
    if (err) {
        console.error('写入文件时出错:', err);
    } else {
        console.log('template.xml 文件已成功生成！');
    }
});
