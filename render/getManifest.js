const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const manifestPath = path.join(__dirname, 'template', 'default', 'DEMO', 'manifest.xsf');
const parser = new xml2js.Parser();

fs.readFile(manifestPath, 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件时出错:', err);
        return;
    }

    parser.parseString(data, (parseErr, result) => {
        if (parseErr) {
            console.error('解析 XML 时出错:', parseErr);
            return;
        }

        console.log('解析后的结果:', JSON.stringify(result, null, 2));

        const formName = result['xsf:manifest']['xsf:solution'][0]['xsf:name'][0];
        console.log('表单名称:', formName);
    });
});
