
const fs = require('fs');

const getTemplate = (data) => {
    const handle = () => {
        let data1 = '';
        const fields = data.map(item => item.field);
        fields.forEach(field => {
            data1 += getData1(field);
        });
        return getMain(data1);
    }

    const getMain = (data1) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-infoPathSolution name="urn:schemas-microsoft-com:office:infopath:01o-oRUQ4Vk6n:-myXSD-2020-10-27T07-28-52" href="manifest.xsf" solutionVersion="1.0.0.190" productVersion="15.0.0" PIVersion="1.0.0.0" ?>
<?mso-application progid="InfoPath.Document" versionProgid="InfoPath.Document.3"?>
<my:DEMO xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:my="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xd="http://schemas.microsoft.com/office/infopath/2003">
    ${data1}
</my:DEMO>
        `;
    }

    const getData1 = (fieldName) => {
        return ` <my:${fieldName}></my:${fieldName}>`;
    }

    return handle();
}


module.exports = {
    getTemplate
}