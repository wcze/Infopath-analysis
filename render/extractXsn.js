const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const xml2js = require('xml2js');
function parseXSN(filePath) {
    const zip = new AdmZip(filePath);
    const outputDir = path.join(__dirname, 'out');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    zip.extractAllTo(outputDir, true);

    const templateFilePath = path.join(outputDir, 'template.xml');
    const manifestFilePath = path.join(outputDir, 'manifest.xsf');

    fs.readFile(templateFilePath, 'utf8', (err, templateData) => {
        if (err) {
            console.error('读取 template.xml 文件出错:', err);
            return;
        }

        xml2js.parseString(templateData, { mergeAttrs: true }, (err, templateJson) => {
            if (err) {
                console.error('解析 template.xml 时出错:', err);
                return;
            }

            console.log('解析 template.xml 完成');
            console.log(JSON.stringify(templateJson, null, 2));
        });
    });

    fs.readFile(manifestFilePath, 'utf8', (err, manifestData) => {
        if (err) {
            console.error('读取 manifest.xsf 文件出错:', err);
            return;
        }

        xml2js.parseString(manifestData, { mergeAttrs: true }, (err, manifestJson) => {
            if (err) {
                console.error('解析 manifest.xsf 时出错:', err);
                return;
            }

            console.log('解析 manifest.xsf 完成');
            console.log(JSON.stringify(manifestJson, null, 2));
        });
    });
}

const xsnFilePath = path.join(__dirname, 'template', 'default', 'DEMO.xsn');
parseXSN(xsnFilePath);
