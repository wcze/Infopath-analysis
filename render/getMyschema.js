const fs = require('fs');

const getMyschema = (data) => {
    const handle = () => {
        let data1 = '', data2 = '';
        data.forEach(item => {
            data1 += getData1(item);
            data2 += getData2(item);
        });
        return getMain(data1, data2);
    }

    const getMain = (data1, data2) => {
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<xsd:schema targetNamespace="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:my="http://schemas.microsoft.com/office/infopath/2003/myXSD/2020-10-27T07:28:52" xmlns:xd="http://schemas.microsoft.com/office/infopath/2003" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <xsd:element name="DEMO">
        <xsd:complexType>
            <xsd:sequence>
                ${data1}
            </xsd:sequence>
            <xsd:anyAttribute processContents="lax" namespace="http://www.w3.org/XML/1998/namespace"/>
        </xsd:complexType>
    </xsd:element>
    ${data2}
</xsd:schema>
        `;
    }

    const getData1 = (item) => {
        return `<xsd:element ref="my:${item.field}" minOccurs="0"/>`;
    }

    const getData2 = (item) => {
        if (item.type === 'User') {
            return `<xsd:element name="${item.field}">
                        <xsd:complexType mixed="true">
                            <xsd:sequence>
                                <xsd:any minOccurs="0" maxOccurs="unbounded" namespace="http://www.w3.org/1999/xhtml" processContents="lax"/>
                            </xsd:sequence>
                        </xsd:complexType>
                    </xsd:element>`;
        }
        if (item.type === 'TextArea') {
            return `<xsd:element name="${item.field}">
                        <xsd:complexType mixed="true">
                            <xsd:sequence>
                                <xsd:any minOccurs="0" maxOccurs="unbounded" namespace="http://www.w3.org/1999/xhtml" processContents="lax"/>
                            </xsd:sequence>
                        </xsd:complexType>
                    </xsd:element>`;
        }
        return `<xsd:element name="${item.field}" type="xsd:string"/>`;
    }

    return handle();
}


module.exports = {
    getMyschema
}